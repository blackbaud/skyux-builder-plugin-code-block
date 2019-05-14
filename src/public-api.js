const SkyEntryPlugin = require('./plugins/entry');
const entryPlugin = new SkyEntryPlugin();

const publicApi = {};
publicApi.preload = entryPlugin.preload;

module.exports = publicApi;
