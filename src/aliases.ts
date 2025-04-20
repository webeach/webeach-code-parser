import type { GrammarKey } from './grammars';

/**
 * A map of grammar aliases that are treated as equivalent to primary `GrammarKey` values.
 *
 * For example:
 * - `'sh'` and `'zsh'` are considered aliases for `'bash'`
 * - `'ts'` and `'tsx'` are considered aliases for `'typescript'`
 *
 * This structure allows multiple language identifiers to be normalized to a single known grammar key.
 */
export const aliases = {
  bash: ['sh', 'zsh'],
  markdown: ['md'],
  javascript: ['js', 'jsx'],
  typescript: ['ts', 'tsx'],
  xml: ['html'],
} as const satisfies Readonly<Partial<Record<GrammarKey, string[]>>>;

// Extracts the full type of the aliases object
type Aliases = typeof aliases;

/**
 * A union type of all alias values defined in the `aliases` object.
 *
 * Example result:
 *   'sh' | 'zsh' | 'md' | 'js' | 'jsx' | 'ts' | 'tsx' | 'html'
 */
export type AliasesKey = Aliases[keyof Aliases][number];
