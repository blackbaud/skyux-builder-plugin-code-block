const cheerio = require('cheerio');

const convertToHTMLEntities = (content) => {
  return content.replace(/{/g, `{{ '{' }}`)
    .replace(/</g, '&lt;');
}

const cheerioConfig = {
  lowerCaseTags: false,
  lowerCaseAttributeNames: false,
  decodeEntities: false
};

const preload = (content, resourcePath) => {
  if (!resourcePath.match(/\.html$/)) {
    return content;
  }

  const $ = cheerio.load(content, cheerioConfig);
  const codeBlocks = $('stache-code-block');

  if (!codeBlocks.length) {
    return content;
  }

  codeBlocks.each((idx, elem) => {
    const $elem = $(elem);
    const rawContent = $elem.html().toString();
    const content = convertToHTMLEntities(rawContent);
    $elem.html(content);
  });

  return $.html().toString();
};

module.exports = { preload };
