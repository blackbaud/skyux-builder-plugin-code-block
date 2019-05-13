const shared = require('./shared');

describe('Shared methods and properties', () => {
  it('should exist', () => {
    expect(shared).toBeDefined();
  });

  it('should export cheerio config', () => {
    expect(shared.cheerioConfig).toEqual(jasmine.any(Object));
  });

  it('should export SkyPluginError', () => {
    expect(shared.SkyPluginError).toBeDefined();
  });

  it('should export an error object with a default message', () => {
    const result = new shared.SkyPluginError();
    expect(result.message).toEqual('Plugin failure.');
  });

  it('should convert a string to use HTML entities for specific characters', () => {
    const rawContent = '<div> { var } </div>';
    const content = shared.convertToHTMLEntities(rawContent);
    expect(content).toEqual('&lt;div> {{ \'{\' }} var } &lt;/div>');
  });
});
