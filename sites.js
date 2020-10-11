module.exports = [
  {
    name: 'Best buy',
    test: async (driver, product) => {
      await driver.get(product.url)
      const el = await driver.findElement({ className: 'fulfillment-add-to-cart-button' });
      const text = await el.getText();
      return !text.toLowerCase().includes('sold out');
    },
    products: [
      {
        "name": "NVIDIA GeForce RTX 3080 10GB GDDR6X PCI Express 4.0 Graphics Card - Titanium and Black",
        "url": "https://www.bestbuy.com/site/nvidia-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card-titanium-and-black/6429440.p?skuId=6429440"
      },
      {
        "name": "GIGABYTE - GeForce RTX 3080 10G GDDR6X PCI Express 4.0 Graphics Card White",
        "url": "https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-white/6436219.p?skuId=6436219"
      },
      // {
      //   "name": "EVGA - GeForce RTX 3080 10GB GDDR6X PCI Express 4.0 Graphics Card",
      //   "url": "https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6436195.p?skuId=6436195"
      // },
      // {
      //   "name": "EVGA - GeForce RTX 3080 10GB GDDR6X PCI Express 4.0 Graphics Card",
      //   "url": "https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6432400.p?skuId=6432400"
      // },
      // {
      //   "name": "GIGABYTE - GeForce RTX 3080 10G GDDR6X PCI Express 4.0 Graphics Card Black",
      //   "url": "https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-black/6430620.p?skuId=6430620"
      // },
      // {
      //   "name": "EVGA - GeForce RTX 3080 10GB GDDR6X PCI Express 4.0 Graphics Card",
      //   "url": "https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6436196.p?skuId=6436196"
      // },
      // {
      //   "name": "EVGA - GeForce RTX 3080 10GB GDDR6X PCI Express 4.0 Graphics Card",
      //   "url": "https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6436194.p?skuId=6436194"
      // },
      // {
      //   "name": "GIGABYTE - GeForce RTX 3080 10G GDDR6X PCI Express 4.0 Graphics Card Black",
      //   "url": "https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-black/6430621.p?skuId=6430621"
      // },
      // {
      //   "name": "MSI - Geforce RTX 3080 VENTUS 3X 10G OC BV - GDDR6X - PCI Express 4.0 - Graphic Card - Black/Silver",
      //   "url": "https://www.bestbuy.com/site/msi-geforce-rtx-3080-ventus-3x-10g-oc-bv-gddr6x-pci-express-4-0-graphic-card-black-silver/6430175.p?skuId=6430175"
      // },
      // {
      //   "name": "PNY GeForce RTX 3080 10GB XLR8 Gaming EPIC-X RGB Triple Fan Graphics Card",
      //   "url": "https://www.bestbuy.com/site/pny-geforce-rtx-3080-10gb-xlr8-gaming-epic-x-rgb-triple-fan-graphics-card/6432655.p?skuId=6432655"
      // },
      // {
      //   "name": "EVGA - GeForce RTX 3080 10GB GDDR6X PCI Express 4.0 Graphics Card",
      //   "url": "https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6432399.p?skuId=6432399"
      // },
      // {
      //   "name": "GIGABYTE - GeForce RTX 3080 10G GDDR6X PCI Express 4.0 Graphics Card Black",
      //   "url": "https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-black/6436223.p?skuId=6436223"
      // },
      // {
      //   "name": "ASUS - GeForce RTX 3080 10GB GDDR6X PCI Express 4.0 Strix Graphics Card - Black",
      //   "url": "https://www.bestbuy.com/site/asus-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-strix-graphics-card-black/6432445.p?skuId=6432445"
      // },
      // {
      //   "name": "EVGA - GeForce RTX 3080 10GB GDDR6X PCI Express 4.0 Graphics Card",
      //   "url": "https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6436191.p?skuId=6436191"
      // },
      // {
      //   "name": "PNY GeForce RTX 3080 10GB XLR8 Gaming EPIC-X RGB Triple Fan Graphics Card",
      //   "url": "https://www.bestbuy.com/site/pny-geforce-rtx-3080-10gb-xlr8-gaming-epic-x-rgb-triple-fan-graphics-card/6432658.p?skuId=6432658"
      // }
    ]
  }
]
