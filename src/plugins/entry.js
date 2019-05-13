const shared = require('./utils/shared');

function SkyEntryPlugin() {
  const preload = (content, resourcePath) => {
    try {
      const preloadPluginOrder = [
        require('./code-block'),
        require('./code')
      ];

      preloadPluginOrder.forEach(plugin => {
        content = plugin.preload(content, resourcePath);
      });
    }
    catch (error) {
      throw new shared.SkyPluginError(error.message);
    }

    return content;
  };

  return Object.freeze({ preload });
}

module.exports = SkyEntryPlugin;
