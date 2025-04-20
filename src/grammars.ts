import bashLang from 'highlight.js/lib/languages/bash';
import cssLang from 'highlight.js/lib/languages/css';
import javascriptLang from 'highlight.js/lib/languages/javascript';
import jsonLang from 'highlight.js/lib/languages/json';
import lessLang from 'highlight.js/lib/languages/less';
import markdown from 'highlight.js/lib/languages/markdown';
import scssLang from 'highlight.js/lib/languages/scss';
import shellLang from 'highlight.js/lib/languages/shell';
import sqlLang from 'highlight.js/lib/languages/sql';
import stylusLang from 'highlight.js/lib/languages/stylus';
import typescriptLang from 'highlight.js/lib/languages/typescript';
import xmlLang from 'highlight.js/lib/languages/xml';
import yamlLang from 'highlight.js/lib/languages/yaml';
import type { LanguageFn } from 'lowlight';

/**
 * A mapping of language identifiers to their corresponding Highlight.js language grammars.
 *
 * These are used to register supported languages with `lowlight`,
 * enabling syntax highlighting via `highlight()` or `highlightAuto()`.
 *
 * You can use the keys of this object as canonical language IDs throughout the system.
 */
export const grammars = {
  bash: bashLang,
  css: cssLang,
  less: lessLang,
  markdown: markdown,
  javascript: javascriptLang,
  json: jsonLang,
  scss: scssLang,
  shell: shellLang,
  sql: sqlLang,
  stylus: stylusLang,
  typescript: typescriptLang,
  xml: xmlLang,
  yaml: yamlLang,
} satisfies Readonly<Record<string, LanguageFn>>;

/**
 * A union type of all supported language keys in the `grammars` map.
 *
 * Example:
 *   'bash' | 'css' | 'less' | ... | 'yaml'
 */
export type GrammarKey = keyof typeof grammars;
