import { toHtml } from 'hast-util-to-html';
import { createLowlight } from 'lowlight';

import { aliases, AliasesKey } from './aliases';
import { GrammarKey, grammars } from './grammars';

/**
 * Lowlight instance used to perform syntax highlighting.
 * We register all known grammars and their aliases below.
 */
const lowlight = createLowlight();

// Register base grammars (e.g. javascript, typescript, css, etc.)
lowlight.register(grammars);

// Register additional language aliases (e.g. jsx -> javascript)
lowlight.registerAlias(aliases);

/**
 * A union type representing all accepted language identifiers:
 * either canonical grammar keys or known aliases.
 */
export type LangKey = GrammarKey | AliasesKey;

/**
 * The result type returned by `parseCodeToHast`.
 * This is a HAST (HTML Abstract Syntax Tree) fragment with tokenized span elements.
 */
export type ParseCodeResultData = ReturnType<typeof parseCodeToHast>;

/**
 * Converts raw code into a syntax-highlighted HAST structure using `lowlight`.
 *
 * If a language is provided, it is used directly. Otherwise, `highlightAuto` is used
 * to detect the best matching language.
 *
 * @param code - The raw source code string
 * @param lang - Optional language key or alias to use
 * @returns A HAST representation of the highlighted code
 */
export function parseCodeToHast(code: string, lang: LangKey | null = null) {
  if (lang === null) {
    return lowlight.highlightAuto(code, {
      prefix: '_token-',
    });
  }

  return lowlight.highlight(lang, code, {
    prefix: '_token-',
  });
}

/**
 * Converts code to a syntax-highlighted HTML string using `lowlight` and `hast-util-to-html`.
 *
 * Internally calls `parseCodeToHast()` and serializes the result to HTML.
 *
 * @param code - The raw source code string
 * @param langKey - Optional language key or alias to use
 * @returns An HTML string with tokenized spans
 */
export function parseCodeToHtml(
  code: string,
  langKey: LangKey | null = null,
): string {
  const hast = parseCodeToHast(code, langKey);
  return toHtml(hast);
}
