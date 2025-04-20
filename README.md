# `@webeach/code-parser`

🔥 Code parser & syntax highlighter based on [`lowlight`](https://github.com/wooorm/lowlight), used across the WebEach ecosystem to highlight code snippets consistently in Markdown, blogs, documentation, and extra UI components.

Converts raw code strings into:
- 📆 HAST (Hypertext Abstract Syntax Tree)
- 🧹 Pre-rendered HTML with consistent class naming (`_token-*`)

---

<!-- TOC -->
* [`@webeach/code-parser`](#webeachcode-parser)
  * [✨ Features](#-features)
  * [📦 Installation](#-installation)
  * [🧠 Usage](#-usage)
    * [1. Parse to HAST (for custom rendering or serialization)](#1-parse-to-hast-for-custom-rendering-or-serialization)
    * [2. Parse to HTML (ready to inject into the DOM)](#2-parse-to-html-ready-to-inject-into-the-dom)
  * [🤩 Supported Languages](#-supported-languages)
  * [🎨 Styling](#-styling)
  * [⚙️ Development](#-development)
    * [Build the library](#build-the-library)
    * [Watch mode](#watch-mode)
  * [🔖 Releasing a New Version](#-releasing-a-new-version)
  * [👨‍💻 Author](#-author)
  * [📄 License](#-license)
<!-- TOC -->

---

## ✨ Features

- Supports popular languages: TypeScript, JavaScript, CSS, YAML, Bash, JSON, Markdown, etc.
- Converts code to HAST or HTML
- Tiny, dependency-light

---

## 📦 Installation

```bash
yarn add @webeach/code-parser
```

---

## 🧠 Usage

### 1. Parse to HAST (for custom rendering or serialization)

```ts
import { parseCodeToHast } from '@webeach/code-parser';

const hast = parseCodeToHast(`const foo = 'bar'`, 'typescript');
```

### 2. Parse to HTML (ready to inject into the DOM)

```ts
import { parseCodeToHtml } from '@webeach/code-parser';

const html = parseCodeToHtml(`const foo = 'bar'`, 'typescript');
// <span class="_token-keyword">const</span> foo = ...
```

---

## 🤩 Supported Languages

```ts
import type { LangKey } from '@webeach/code-parser';

const lang: LangKey = 'typescript'; // autocomplete-safe
```

Supported languages:

- `bash`
- `css`
- `html`
- `javascript`
- `json`
- `less`
- `markdown`
- `scss`
- `shell`
- `sql`
- `stylus`
- `typescript`
- `xml`
- `yaml`

---

## 🎨 Styling

This library outputs class names like `_token-keyword`, `_token-string`, etc.

You can map these to your design system using CSS:

```css
._token-comment,
._token-quote {
  color: var(--color-neutral-6);
  font-style: italic;
}

._token-doctag,
._token-formula,
._token-keyword,
._token-name {
  color: var(--color-primary-7);
}

._token-section,
._token-selector-tag,
._token-deletion,
._token-subst {
  color: var(--color-danger-9);
}

._token-literal,
._token-number {
  color: var(--color-secondary-7);
}

._token-string,
._token-regexp,
._token-addition,
._token-attribute,
._token-meta ._token-string {
  color: var(--color-success-8);
}

._token-attr,
._token-variable,
._token-template-variable,
._token-type,
._token-selector-class,
._token-selector-attr,
._token-selector-pseudo {
  color: var(--color-warning-9);
}

._token-symbol,
._token-bullet,
._token-link,
._token-meta,
._token-selector-id,
._token-title {
  color: var(--color-secondary-7);
}

._token-built_in,
._token-title.class_,
._token-class ._token-title {
  color: var(--color-warning-8);
}

._token-emphasis {
  font-style: italic;
}

._token-strong {
  font-weight: bold;
}

._token-link {
  text-decoration: underline;
}
```

---

## ⚙️ Development

### Build the library

Compiles the codebase and generates the production-ready output in the `lib` directory.

```sh
yarn run build
```

### Watch mode

Watches for file changes and rebuilds automatically.

```sh
yarn run build:watch
```

---

## 🔖 Releasing a New Version

Releases are handled automatically using `semantic-release`.

Before publishing a new version, make sure to:

1. Commit and push all changes to the `main` branch.
2. Use commit messages that follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format:
   - `feat: ...` — for new features
   - `fix: ...` — for bug fixes
   - `chore: ...`, `refactor: ...`, etc.
3. Versioning is determined automatically based on the type of commits (`patch`, `minor`, `major`).

---

## 👨‍💻 Author

Developed and maintained by [Ruslan Martynov](https://github.com/ruslan-mart)

If you have any suggestions or find a bug, feel free to open an issue or pull request.

---

## 📄 License

This package is licensed under the [MIT License](./LICENSE).
