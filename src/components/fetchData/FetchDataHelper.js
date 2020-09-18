import cheerio from 'cheerio';

export default function parseHTML(html) {
  const $ = cheerio.load(html);
  const urlMeme = $('.meme-img');
  return concatURLs(createMemeArray(urlMeme));
}

const createMemeArray = (meme) => {
  const memeArray = [];
  for (let i = 0; i < meme.length; i++) {
    memeArray.push(meme[i].attribs.src);
  }
  return memeArray;
};

const concatURLs = (array) => {
  const urlArray = [];
  const baseUrl = 'https://api.memegen.link/images';
  for (let i = 0; i < array.length; i++) {
    urlArray.push(baseUrl + array[i].toString());
  }
  return urlArray;
};
