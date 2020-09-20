export function extractMemeText(meme) {
  let re = /(\/[a-z]+\/)[a-z_~',!]+\/[a-z_~',!]+\.jpg/;
  return meme.match(re)[1];
}

export function makeMeme(url, webText, myText) {
  let newUrl = url.replace(webText, myText);
  return newUrl;
}
