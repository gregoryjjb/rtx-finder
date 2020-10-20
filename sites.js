module.exports = [
  {
    name: 'Best buy',
    test: async (driver, product) => {
      await driver.get(product.url)
      const el = await driver.findElement({ className: 'fulfillment-add-to-cart-button' });
      const text = (await el.getText()).toLowerCase();

      if (text.includes('sold out') || text.includes('coming soon')) {
        return false;
      } else {
        return true;
      }
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
      {
        "name": "EVGA - GeForce RTX 3080 10GB GDDR6X PCI Express 4.0 Graphics Card",
        "url": "https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6436195.p?skuId=6436195"
      },
      {
        "name": "EVGA - GeForce RTX 3080 10GB GDDR6X PCI Express 4.0 Graphics Card",
        "url": "https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6432400.p?skuId=6432400"
      },
      {
        "name": "GIGABYTE - GeForce RTX 3080 10G GDDR6X PCI Express 4.0 Graphics Card Black",
        "url": "https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-black/6430620.p?skuId=6430620"
      },
      {
        "name": "EVGA - GeForce RTX 3080 10GB GDDR6X PCI Express 4.0 Graphics Card",
        "url": "https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6436196.p?skuId=6436196"
      },
      {
        "name": "EVGA - GeForce RTX 3080 10GB GDDR6X PCI Express 4.0 Graphics Card",
        "url": "https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6436194.p?skuId=6436194"
      },
      {
        "name": "GIGABYTE - GeForce RTX 3080 10G GDDR6X PCI Express 4.0 Graphics Card Black",
        "url": "https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-black/6430621.p?skuId=6430621"
      },
      {
        "name": "MSI - Geforce RTX 3080 VENTUS 3X 10G OC BV - GDDR6X - PCI Express 4.0 - Graphic Card - Black/Silver",
        "url": "https://www.bestbuy.com/site/msi-geforce-rtx-3080-ventus-3x-10g-oc-bv-gddr6x-pci-express-4-0-graphic-card-black-silver/6430175.p?skuId=6430175"
      },
      {
        "name": "PNY GeForce RTX 3080 10GB XLR8 Gaming EPIC-X RGB Triple Fan Graphics Card",
        "url": "https://www.bestbuy.com/site/pny-geforce-rtx-3080-10gb-xlr8-gaming-epic-x-rgb-triple-fan-graphics-card/6432655.p?skuId=6432655"
      },
      {
        "name": "EVGA - GeForce RTX 3080 10GB GDDR6X PCI Express 4.0 Graphics Card",
        "url": "https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6432399.p?skuId=6432399"
      },
      {
        "name": "GIGABYTE - GeForce RTX 3080 10G GDDR6X PCI Express 4.0 Graphics Card Black",
        "url": "https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-black/6436223.p?skuId=6436223"
      },
      {
        "name": "ASUS - GeForce RTX 3080 10GB GDDR6X PCI Express 4.0 Strix Graphics Card - Black",
        "url": "https://www.bestbuy.com/site/asus-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-strix-graphics-card-black/6432445.p?skuId=6432445"
      },
      {
        "name": "EVGA - GeForce RTX 3080 10GB GDDR6X PCI Express 4.0 Graphics Card",
        "url": "https://www.bestbuy.com/site/evga-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card/6436191.p?skuId=6436191"
      },
      {
        "name": "PNY GeForce RTX 3080 10GB XLR8 Gaming EPIC-X RGB Triple Fan Graphics Card",
        "url": "https://www.bestbuy.com/site/pny-geforce-rtx-3080-10gb-xlr8-gaming-epic-x-rgb-triple-fan-graphics-card/6432658.p?skuId=6432658"
      }
    ]
  },
  {
    name: 'Newegg',
    test: async (driver, product) => {
      await driver.get(product.url);
      const el = await driver.findElement({ id: 'ProductBuy' });
      const text = (await el.getText()).toLowerCase();

      return text.includes('add to cart');
    },
    products: [
      {
        "name": "MSI GeForce RTX 3080 DirectX 12 RTX 3080 GAMING X TRIO 10G 10GB 320-Bit GDDR6X PCI Express 4.0 HDCP Ready Video Card",
        "url": "https://www.newegg.com/msi-geforce-rtx-3080-rtx-3080-gaming-x-trio-10g/p/N82E16814137597"
      },
      {
        "name": "EVGA GeForce RTX 3080 FTW3 ULTRA GAMING Video Card, 10G-P5-3897-KR, 10GB GDDR6X, iCX3 Technology, ARGB LED, Metal Backplate",
        "url": "https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3897-kr/p/N82E16814487518"
      },
      {
        "name": "ASUS ROG Strix GeForce RTX 3080 DirectX 12 ROG-STRIX-RTX3080-O10G-GAMING 10GB 320-Bit GDDR6X PCI Express 4.0 x16 HDCP Ready Video Card",
        "url": "https://www.newegg.com/asus-geforce-rtx-3080-rog-strix-rtx3080-o10g-gaming/p/N82E16814126457"
      },
      {
        "name": "MSI GeForce RTX 3080 DirectX 12 RTX 3080 VENTUS 3X 10G OC 10GB 320-Bit GDDR6X PCI Express 4.0 HDCP Ready Video Card",
        "url": "https://www.newegg.com/msi-geforce-rtx-3080-rtx-3080-ventus-3x-10g-oc/p/N82E16814137598"
      },
      {
        "name": "EVGA GeForce RTX 3080 XC3 ULTRA GAMING Video Card, 10G-P5-3885-KR, 10GB GDDR6X, iCX3 Cooling, ARGB LED, Metal Backplate",
        "url": "https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3885-kr/p/N82E16814487520"
      },
      {
        "name": "ASUS TUF Gaming GeForce RTX 3080 TUF-RTX3080-O10G-GAMING Video Card",
        "url": "https://www.newegg.com/asus-geforce-rtx-3080-tuf-rtx3080-o10g-gaming/p/N82E16814126452"
      },
      {
        "name": "GIGABYTE GeForce RTX 3080 DirectX 12 GV-N3080EAGLE OC-10GD 10GB 320-Bit GDDR6X PCI Express 4.0 x16 ATX Video Card",
        "url": "https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080eagle-oc-10gd/p/N82E16814932330"
      },
      {
        "name": "ASUS TUF Gaming NVIDIA GeForce RTX 3080 TUF-RTX3080-10G-GAMING Video Card",
        "url": "https://www.newegg.com/asus-geforce-rtx-3080-tuf-rtx3080-10g-gaming/p/N82E16814126453"
      },
      {
        "name": "ZOTAC GAMING GeForce RTX 3080 Trinity 10GB GDDR6X 320-bit 19 Gbps PCIE 4.0 Gaming Graphics Card, IceStorm 2.0 Advanced Cooling, SPECTRA 2.0 RGB Lighting, ZT-A30800D-10P",
        "url": "https://www.newegg.com/zotac-geforce-rtx-3080-zt-a30800d-10p/p/N82E16814500502"
      },
      {
        "name": "ZOTAC GAMING GeForce RTX 3080 Trinity OC 10GB GDDR6X 320-bit 19 Gbps PCIE 4.0 Gaming Graphics Card, IceStorm 2.0 Advanced Cooling, SPECTRA 2.0 RGB Lighting, ZT-A30800J-10P",
        "url": "https://www.newegg.com/zotac-geforce-rtx-3080-zt-t30800j-10p/p/N82E16814500504"
      },
      {
        "name": "MSI GeForce RTX 3080 DirectX 12 RTX 3080 VENTUS 3X 10G 10GB 320-Bit GDDR6X PCI Express 4.0 HDCP Ready Video Card",
        "url": "https://www.newegg.com/msi-geforce-rtx-3080-rtx-3080-ventus-3x-10g/p/N82E16814137600"
      },
      {
        "name": "GIGABYTE GeForce RTX 3080 DirectX 12 GV-N3080VISION OC-10GD 10GB 320-Bit GDDR6X PCI Express 4.0 x16 ATX Video Card",
        "url": "https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080vision-oc-10gd/p/N82E16814932337"
      },
      {
        "name": "GIGABYTE GeForce RTX 3080 DirectX 12 GV-N3080GAMING OC-10GD 10GB 320-Bit GDDR6X PCI Express 4.0 x16 ATX Video Card",
        "url": "https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080gaming-oc-10gd/p/N82E16814932329"
      },
      {
        "name": "EVGA GeForce RTX 3080 XC3 GAMING Video Card, 10G-P5-3883-KR, 10GB GDDR6X, iCX3 Cooling, ARGB LED, Metal Backplate",
        "url": "https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3883-kr/p/N82E16814487521"
      },
      {
        "name": "GIGABYTE AORUS GeForce RTX 3080 DirectX 12 GV-N3080AORUS M-10GD 10GB 320-Bit GDDR6X PCI Express 4.0 x16 ATX Video Card",
        "url": "https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080aorus-m-10gd/p/N82E16814932336"
      },
      {
        "name": "EVGA GeForce RTX 3080 XC3 BLACK GAMING Video Card, 10G-P5-3881-KR, 10GB GDDR6X, iCX3 Cooling, ARGB LED",
        "url": "https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3881-kr/p/N82E16814487522"
      },
      {
        "name": "EVGA GeForce RTX 3080 FTW3 GAMING Video Card, 10G-P5-3895-KR, 10GB GDDR6X, iCX3 Technology, ARGB LED, Metal Backplate",
        "url": "https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3895-kr/p/N82E16814487519"
      }
    ]
  }
]
