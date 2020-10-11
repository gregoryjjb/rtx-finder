const path = require('path');
const fs = require('fs');

const selenium = require('selenium-webdriver');

const Logger = require('./logger');
const sites = require('./sites');

const logger = new Logger();

const cacheFile = path.join(__dirname, 'cache.json');
let oldCache = null;

try {
  const raw = fs.readFileSync(cacheFile, 'utf-8');
  const parsed = JSON.parse(raw);
  oldCache = parsed;
} catch(e) {
  logger.error('Failed to load cache:', e.message);
}

if (oldCache) {
  logger.log('Loaded cache from previous run');
}

const newCache = {
  startTime: (new Date()).toISOString(),
  endTime: null,
  availability: {}
}

const main = async () => {
  const driver = (new selenium.Builder()).forBrowser('firefox').build();

  const siteCount = sites.length;
  const productCount = sites.map(s => s.products).flat().length;

  logger.log(`Scraping ${productCount} products from ${siteCount} sites`)

  for (let site of sites) {
    logger.section(`Scraping ${site.name} products`);

    for (let product of site.products) {

      logger.section(product.name)
      logger.log(`url: ${product.url}`)
      
      try {
        const wasAvailable = oldCache?.availability?.[product.url] || false;
        const isAvailable = await site.test(driver, product);
        logger.log(`available: ${isAvailable}`);
        logger.log(`changed: ${wasAvailable !== isAvailable}`);

        newCache.availability[product.url] = isAvailable;
      } catch (e) {
        logger.error(e);
      }

      logger.endSection();
    }

    logger.endSection();
  }

  await driver.quit();

  fs.writeFileSync(cacheFile, JSON.stringify(newCache));
}

main().then(() => console.log('Scrape finished'));
