/* node: true */

const plugin = require('./code-block');

describe('Code Block Plugin', () => {
  it('should contain a preload hook', () => {
    expect(plugin.preload).toBeDefined();
  });

  it('should not alter the content if the resourcePath is not an html file.', () => {
    const content = 'let foo = "bar";';
    const path = 'foo.js';
    let result = plugin.preload(content, path);
    expect(result).toBe(content);
  });

  it('should alter the content if the html file does not include any <stache-code-block> tags.', () => {
    const content = '<p></p>';
    const path = 'foo.html';
    let result = plugin.preload(content, path);
    expect(result).toBe(content);
  });

  it('should convert the inner HTML of all <stache-code-block> to HTML entities.', () => {
    const content = `
      <stache-code-block>
        <p>My content</p>
        {{myVar}}
        $(document).ready();
      </stache-code-block>
      <stache-code-block></stache-code-block>
    `;
    const path = 'foo.html';
    let result = plugin.preload(content, path);
    expect(result).toContain('&lt;p>My content&lt;/p>');
    expect(result).toContain('{{ \'{\' }}{{ \'{\' }}myVar}}');
  });
});