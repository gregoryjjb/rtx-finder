require('dotenv').config();

const path = require('path');
const fs = require('fs');

const selenium = require('selenium-webdriver');
const twilio = require('twilio');

const Logger = require('./logger');
const sites = require('./sites');

const logger = new Logger();

logger.log('################# BEGINNING SCRAPE #################');
logger.log();

///////////////////////
// Set up cache

const cacheFile = path.join(__dirname, 'cache', 'cache.json')
let oldCache = null;

try {
  const raw = fs.readFileSync(cacheFile, 'utf-8');
  const parsed = JSON.parse(raw);
  oldCache = parsed;
} catch (e) {
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

///////////////////////
// Main

const main = async () => {
  const driver = (new selenium.Builder()).forBrowser('firefox').build();

  const siteCount = sites.length;
  const productCount = sites.map(s => s.products).flat().length;

  logger.section(`Scraping ${productCount} products from ${siteCount} sites`)

  const changedProducts = [];

  for (let site of sites) {
    logger.section(`Scraping ${site.name} products`);

    for (let product of site.products) {

      logger.section(product.name)
      logger.log(`url: ${product.url}`)

      try {
        const wasAvailable = oldCache?.availability?.[product.url] || false;
        const isAvailable = await site.test(driver, product);
        const changed = wasAvailable !== isAvailable;

        logger.log(`available: ${isAvailable}`);
        logger.log(`changed: ${changed}`);

        newCache.availability[product.url] = isAvailable;
        if (changed) changedProducts.push({ ...product, available: isAvailable });
      } catch (e) {
        logger.error(e);
      }
      logger.endSection();
    }
    logger.endSection();
  }
  logger.endSection();
  logger.log();

  await driver.quit();

  const available = changedProducts.filter(p => p.available);
  const unavailable = changedProducts.filter(p => !p.available);

  logger.section(`Summary: ${changedProducts.length} changed, ${available.length} available`);

  changedProducts.forEach(p => {
    logger.section(p.name);
    logger.log(`url: ${p.url}`);
    logger.log(`available: ${p.available}`)
  });

  logger.endSection();
  logger.log();

  logger.section('Sending notifications');
  logger.log();


  const client = twilio();
  const twilioPhone = process.env.TWILIO_PHONE;
  const myPhone = process.env.NOTIFICATION_PHONE;

  if (available.length > 0) {
    const availableString = available.map(p => `${p.name} ${p.url}`).join('\n');
    const availableMessage = `AVAILABLE:\n${availableString}`;
    logger.log(availableMessage);
    await client.messages.create({ body: availableMessage, to: myPhone, from: twilioPhone });
  }

  if (unavailable.length > 0) {
    const unavailableString = unavailable.map(p => `${p.name} ${p.url}`).join('\n');
    const unavailableMessage = `NO LONGER AVAILABLE:\n${unavailableString}`;
    logger.log(unavailableMessage);
    await client.messages.create({ body: unavailableMessage, to: myPhone, from: twilioPhone });
  }

  logger.endSection();

  fs.writeFileSync(cacheFile, JSON.stringify(newCache));
}

main().then(() => logger.log('################# SCRAPE FINISHED #################'));
