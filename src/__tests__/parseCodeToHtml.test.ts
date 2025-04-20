import { parseCodeToHtml } from '../functions';

describe('parseCodeToHtml', () => {
  it('parses JavaScript code with const', () => {
    const html = parseCodeToHtml('const a = 1;', 'js');
    expect(html).toContain('<span class="_token-keyword">const</span>');
    expect(html).toContain('<span class="_token-number">1</span>');
  });

  it('parses TypeScript type', () => {
    const html = parseCodeToHtml('let foo: string = "bar";', 'ts');
    expect(html).toContain('<span class="_token-built_in">string</span>');
  });

  it('parses JSX tag', () => {
    const html = parseCodeToHtml('const App = () => (<h1>Hello</h1>);', 'jsx');
    expect(html).toContain('<span class="_token-tag">');
    expect(html).toContain('Hello');
  });

  it('auto-detects shell', () => {
    const html = parseCodeToHtml('echo "Hello"');
    expect(html).toContain('<span class="_token-built_in">echo</span>');
  });

  it('parses HTML doctype', () => {
    const html = parseCodeToHtml('<!DOCTYPE html>', 'html');
    expect(html).toContain('<span class="_token-meta">');
  });

  it('parses CSS with class selector', () => {
    const html = parseCodeToHtml('.box { color: red; }', 'css');
    expect(html).toContain('<span class="_token-selector-class">');
    expect(html).toContain('<span class="_token-attribute">color</span>');
  });

  it('parses JSON object', () => {
    const html = parseCodeToHtml('{"id": 1}', 'json');
    expect(html).toContain('<span class="_token-attr">"id"</span>');
    expect(html).toContain('<span class="_token-number">1</span>');
  });

  it('parses SQL SELECT', () => {
    const html = parseCodeToHtml('SELECT * FROM users;', 'sql');
    expect(html).toContain('<span class="_token-keyword">SELECT</span>');
  });

  it('parses YAML key-value', () => {
    const html = parseCodeToHtml('name: Max', 'yaml');
    expect(html).toContain('<span class="_token-attr">name:</span>');
  });

  it('parses Markdown heading', () => {
    const html = parseCodeToHtml('# Title', 'md');
    expect(html).toContain('<span class="_token-section">');
  });

  it('parses shell variable', () => {
    const html = parseCodeToHtml('echo $USER', 'sh');
    expect(html).toContain('<span class="_token-variable">');
  });

  it('parses Less variable', () => {
    const html = parseCodeToHtml('@color: red;', 'less');
    expect(html).toContain('<span class="_token-variable">@color:</span>');
  });

  it('parses Stylus rule', () => {
    const html = parseCodeToHtml('body\n  color #333', 'stylus');
    expect(html).toContain('<span class="_token-attribute">color</span>');
  });

  it('parses SCSS with nested selector', () => {
    const html = parseCodeToHtml(
      '$color: red; .btn { color: $color; }',
      'scss',
    );
    expect(html).toContain('<span class="_token-variable">');
  });

  it('parses TSX component', () => {
    const html = parseCodeToHtml(
      'const App = (): JSX.Element => (<h1>Hi</h1>);',
      'tsx',
    );
    expect(html).toContain('Hi');
  });

  it('parses JS arrow function', () => {
    const html = parseCodeToHtml('const add = (a, b) => a + b;', 'js');
    expect(html).toContain('<span class="_token-title function_">add</span>');
  });

  it('parses JS IIFE', () => {
    const html = parseCodeToHtml('(function() { return 1; })();', 'js');
    expect(html).toContain('<span class="_token-keyword">function</span>');
  });

  it('parses TS with enum', () => {
    const html = parseCodeToHtml('enum Direction { Up, Down }', 'ts');
    expect(html).toContain('<span class="_token-keyword">enum</span>');
  });

  it('parses TS conditional type', () => {
    const html = parseCodeToHtml('type T = string extends any ? 1 : 0;', 'ts');
    expect(html).toContain('<span class="_token-keyword">extends</span>');
  });

  it('parses CSS media query', () => {
    const html = parseCodeToHtml(
      '@media (max-width: 768px) { .box { display: none; } }',
      'css',
    );
    expect(html).toContain('<span class="_token-keyword">@media</span>');
  });

  it('parses JSON null', () => {
    const html = parseCodeToHtml('{"value": null}', 'json');
    expect(html).toContain('<span class="_token-literal">');
  });

  it('parses shell with pipes', () => {
    const html = parseCodeToHtml('ps aux | grep node', 'sh');
    expect(html).toContain('grep');
  });

  it('parses SCSS function', () => {
    const html = parseCodeToHtml(
      '@function rem($px) { @return $px / 16 * 1rem; }',
      'scss',
    );
    expect(html).toContain('<span class="_token-keyword">@function</span>');
  });

  it('parses bash function', () => {
    const html = parseCodeToHtml('hello() { echo "hi"; }', 'sh');
    expect(html).toContain('<span class="_token-function">');
  });

  it('parses JSX fragment', () => {
    const html = parseCodeToHtml(
      'const Layout = () => (<><Header /></>);',
      'jsx',
    );
    expect(html).toContain('<span class="_token-tag">&#x3C;></span>');
    expect(html).toContain('<span class="_token-tag">&#x3C;/></span>');
  });

  it('parses YAML array', () => {
    const html = parseCodeToHtml('- name: Max', 'yaml');
    expect(html).toContain('<span class="_token-bullet">-</span>');
  });

  it('parses Markdown code block', () => {
    const html = parseCodeToHtml('```ts\nconst a = 1;\n```', 'md');
    expect(html).toContain('<span class="_token-code">');
  });

  it('parses TS interface', () => {
    const html = parseCodeToHtml('interface User { id: number }', 'ts');
    expect(html).toContain('<span class="_token-keyword">interface</span>');
  });

  it('parses HTML form', () => {
    const html = parseCodeToHtml('<form action="/send"></form>', 'html');
    expect(html).toContain('<span class="_token-tag">');
  });

  it('parses bash redirect', () => {
    const html = parseCodeToHtml('echo "log" >> file.txt', 'sh');
    expect(html).toContain(
      '<span class="_token-string">"log"</span> >> file.txt',
    );
  });
});
