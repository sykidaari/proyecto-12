import { scrape } from '../petSpriteScraper/scraper.js';

// used options:
// Mametchi
// Flowertchi
// Kuchipatchi
// Mimitchi
// Sebiretchi (none)
// Dododotchi

const option = 'Dododotchi';

scrape(`https://tamagotchi.fandom.com/wiki/${option}/Sprite_Gallery`);
