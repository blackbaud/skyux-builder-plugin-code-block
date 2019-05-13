const mock = require('mock-require');
const SkyEntryPlugin = require('./entry');
const shared = require('./utils/shared');

describe('Entry Plugin', () => {
  let _content;
  let _resourcePath;
  let _skyPagesConfig;
  const mockPlugin = {
    preload(content, resourcePath) {
      _content = content;
      _resourcePath = resourcePath;
      return content;
    }
  };

  beforeEach(() => {
    mock('./code-block', mockPlugin);
    mock('./code', mockPlugin);
  });

  afterEach(() => {
    mock.stopAll();
  });

  it('should contain a preload hook', () => {
    const plugin = new SkyEntryPlugin();
    expect(plugin.preload).toBeDefined();
  });

  it('should pass the content through all plugins', () => {
    const content = new Buffer('Content');
    const resourcePath = 'foo.html';

    const plugin = new SkyEntryPlugin();
    plugin.preload(content, resourcePath);

    expect(content.toString()).toEqual(_content.toString());
    expect(resourcePath).toEqual(_resourcePath);
  });

  it('should call each plugin', () => {
    mock.stopAll();
    let callOrder = [];

    mock('./code-block', {
      preload() {
        callOrder.push('code-block');
      }
    });

    mock('./code', {
      preload() {
        callOrder.push('code');
      }
    });
    const content = new Buffer('Content');
    const plugin = new SkyEntryPlugin();
    plugin.preload(content, 'foo.html', {});

    expect(callOrder).toContain('code-block');
    expect(callOrder).toContain('code');
  });

  it('should throw an error if an error is thrown from a plugin', () => {
    mock.stop('./code');
    mock('./code', {
      preload() {
        throw new shared.SkyPluginError('invalid plugin');
      }
    });

    const content = new Buffer('');
    const plugin = new SkyEntryPlugin();
    try {
      plugin.preload(content, '', {});
    } catch (error) {
      expect(plugin.preload).toThrowError(shared.SkyPluginError);
      expect(error.message).toEqual('invalid plugin');
    }
  });
});
