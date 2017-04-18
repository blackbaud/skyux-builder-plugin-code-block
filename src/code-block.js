const cheerio = require('cheerio');

const preload = (content, resourcePath) => {
  if (!resourcePath.match(/\.html$/)) {
    return content;
  }

  let $ = cheerio.load(content, {
    lowerCaseTags: false,
    lowerCaseAttributeNames: false,
    decodeEntities: false
  });

  let codeBlocks = $('stache-code-block');

  if (codeBlocks.length) {
    codeBlocks.each(function (i, elem) {
      let innerText = $(this).html().toString().replace(/{/g, `{{ '{' }}`).replace(/</g, '&lt;');
      $(this).text(innerText);
    });

    content = $.html().toString();
  }

  return content;
};

module.exports = { preload };
