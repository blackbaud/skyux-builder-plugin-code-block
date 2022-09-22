function SkyPluginError(message) {
  this.name = 'SkyPluginError';
  this.message = message || 'Plugin failure.';
}
SkyPluginError.prototype = Error.prototype;

const convertToHTMLEntities = (content) => {
  return content
    .replace(/{/g, `{{ '{' }}`)
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const cheerioConfig = {
  lowerCaseTags: false,
  lowerCaseAttributeNames: false,
  decodeEntities: false
};

module.exports = {
  cheerioConfig,
  convertToHTMLEntities,
  SkyPluginError
};
