const cheerio = require('cheerio');
const shared = require('./utils/shared');

const preload = (content, resourcePath) => {
  if (!resourcePath.match(/\.html$/)) {
    return content;
  }

  const $ = cheerio.load(content, shared.cheerioConfig);
  const codeBlocks = $('sky-code-block');

  if (!codeBlocks.length) {
    return content;
  }

  codeBlocks.each((idx, elem) => {
    const $elem = $(elem);
    const rawContent = $elem.html().toString();
    const content = shared.convertToHTMLEntities(rawContent);
    $elem.html(content);
    $elem.attr('ngPreserveWhitespaces', true);
  });

  return $.html().toString();
};

module.exports = { preload };
