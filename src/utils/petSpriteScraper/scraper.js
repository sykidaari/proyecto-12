import { chromium } from 'playwright';
import fs from 'fs/promises';
import wantedSprites from '../../../src/data/petSprites.js';
import { Buffer } from 'buffer';

export const scrape = async (url) => {
  // * CREATE/GET sprites folder in public of parentproject

  console.log(`folder created in /public in parent project


    `);
  await fs.mkdir('../../../public/petSprites', { recursive: true });

  // * LAUNCH PAGE
  // const browser = chromium.launch({ headless: false });
  const browser = await chromium.launch();

  const page = await browser.newPage();
  await page.goto(url);

  console.log(`page up and running
...
...
...

    `);

  // * HANDLE COOKIES
  const editCookies = page.locator('#onetrust-pc-btn-handler');
  editCookies.click();

  const rejectCookies = page.locator('.ot-pc-refuse-all-handler');
  rejectCookies.click();

  console.log(`done with cookies
...
... 
...

    `);

  // ? MAIN LOGIC
  const galleries = page.locator('div[id^="gallery-"]');
  const all = await galleries.all();

  console.log(`galleries found
...
... 
...

    `);

  for (const gallery of all) {
    const name = gallery.locator(
      'xpath=preceding-sibling::*[self::h3 or self::h4][1]/span[1]'
    );
    const folderName = await name.textContent();
    if (folderName === '') continue;

    const formattedFolderName = folderName.replaceAll(' ', '_');
    const basePath = '../../../public/petSprites';
    let fullPath = `${basePath}/${formattedFolderName}`;
    let counter = 1;

    // * ensure unique folder name
    while (true) {
      try {
        await fs.access(fullPath);

        console.log(`folder name already in use: ${fullPath}`);

        fullPath = `${basePath}/${formattedFolderName}_${counter++}`;
      } catch {
        break;
      }
    }

    const sprites = gallery.locator('.wikia-gallery-item');
    const all = await sprites.all();

    const foundSprites = [];

    if (all.length > 0) {
      foundSprites.push({ name: wantedSprites[0], sprite: all[0] });
    }

    for (let i = 1; i < all.length; i++) {
      const sprite = all[i];

      const caption = sprite.locator('.lightbox-caption');
      if ((await caption.count()) === 0) continue;

      const raw = await caption.textContent();
      if (!raw) continue;

      const name = raw.toLowerCase().replaceAll(' ', '_');

      if (wantedSprites.includes(name)) {
        foundSprites.push({ name, sprite });
      }
    }

    if (foundSprites.length < wantedSprites.length) continue;

    // * CREATE/GET petSprite in public of parentproject
    await fs.mkdir(`${fullPath}`, {
      recursive: true
    });

    console.log(`folder created: ${fullPath}
          
      `);

    for (const { name, sprite } of foundSprites) {
      const img = sprite.locator('img');
      const src = await img.getAttribute('data-src');

      const fileExt = src.includes('gif') ? 'gif' : 'webp';

      const correctFormat = `${src}?format=original`;

      const res = await fetch(correctFormat);

      await fs.writeFile(
        `${fullPath}/${name}.${fileExt}`,
        Buffer.from(await res.arrayBuffer())
      );

      console.log(`file created: ${name}.${fileExt}
        `);
    }
  }

  console.log(`
    
    
    
    All done :)`);

  // eslint-disable-next-line
  process.exit();
};
