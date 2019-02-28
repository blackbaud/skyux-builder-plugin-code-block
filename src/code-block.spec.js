const plugin = require('./code-block');

describe('Code Block Plugin', () => {
  it('should contain a preload hook', () => {
    expect(plugin.preload).toBeDefined();
  });

  it('should not alter the content if the resourcePath is not an html file.', () => {
    const content = new Buffer('let foo = "bar";');
    const path = 'foo.js';
    const result = plugin.preload(content, path);
    expect(result.toString()).toEqual(content.toString());
  });

  it('should alter the content if the html file does not include any <sky-code-block> tags.', () => {
    const content = new Buffer('<p></p>');
    const path = 'foo.html';
    const result = plugin.preload(content, path);
    expect(result.toString()).toEqual(content.toString());
  });

  it('should add the ngPreserveWhitespaces attribute to the <sky-code-block> tags', () => {
    const content = new Buffer(`
      <sky-code-block>
      </sky-code-block>`);
    const path = 'foo.html';
    const result = plugin.preload(content, path);
    expect(result.toString()).toContain('ngPreserveWhitespaces="true"');
  });

  it('should convert the inner HTML of all <sky-code-block> to HTML entities.', () => {
    const content = new Buffer(`
      <sky-code-block>
        <p>My content</p>
        {{ myVar }}
        $(document).ready();
      </sky-code-block>
      <sky-code-block></sky-code-block>
    `);
    const path = 'foo.html';
    const result = plugin.preload(content, path);
    expect(result.toString()).toContain('&lt;p>My content&lt;/p>');
    expect(result.toString()).toContain('{{ \'{\' }}{{ \'{\' }} myVar }}');
  });
});
