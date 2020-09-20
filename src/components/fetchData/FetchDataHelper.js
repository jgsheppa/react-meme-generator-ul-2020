import cheerio from 'cheerio';

export default function parseHTML(html) {
  const $ = cheerio.load(html);
  const urlMeme = $('.meme-img');
  return extractMemeNames(createMemeNameArray(urlMeme));
}

const createMemeNameArray = (meme) => {
  const memeNameArray = [];
  for (let i = 0; i < meme.length; i++) {
    memeNameArray.push(meme[i].attribs.src);
  }
  return memeNameArray;
};

export function extractMemeNames(meme) {
  let memeIDArray = [];
  let re = /(\/[a-z,-]+\/)[a-z_~',!]+/;
  for (let i = 0; i < meme.length; i++) {
    memeIDArray.push(meme[i].match(re)[1]);
  }
  return memeIDArray;
}
