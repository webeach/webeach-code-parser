import { LangKey, parseCodeToHtml } from '../functions';

import * as bashMock from './mocks/bash.mock';
import * as cssMock from './mocks/css.mock';
import * as htmlMock from './mocks/html.mock';
import * as jsMock from './mocks/js.mock';
import * as jsonMock from './mocks/json.mock';
import * as jsxMock from './mocks/jsx.mock';
import * as lessMock from './mocks/less.mock';
import * as mdMock from './mocks/md.mock';
import * as scssMock from './mocks/scss.mock';
import * as shellMock from './mocks/shell.mock';
import * as sqlMock from './mocks/sql.mock';
import * as stylusMock from './mocks/stylus.mock';
import * as tsMock from './mocks/ts.mock';
import * as tsxMock from './mocks/tsx.mock';
import * as xmlMock from './mocks/xml.mock';
import * as yamlMock from './mocks/yaml.mock';

const mockMap: Partial<Record<LangKey, Record<string, string>>> = {
  bash: bashMock,
  css: cssMock,
  html: htmlMock,
  js: jsMock,
  json: jsonMock,
  jsx: jsxMock,
  less: lessMock,
  md: mdMock,
  shell: shellMock,
  scss: scssMock,
  sql: sqlMock,
  stylus: stylusMock,
  ts: tsMock,
  tsx: tsxMock,
  xml: xmlMock,
  yaml: yamlMock,
};

describe('parseCodeToHtml snapshots', () => {
  for (const [lang, examples] of Object.entries(mockMap)) {
    describe(lang, () => {
      for (const [key, code] of Object.entries(examples)) {
        it(`renders ${key} correctly`, () => {
          const html = parseCodeToHtml(code, lang as LangKey);
          expect(html).toMatchSnapshot();
        });
      }
    });
  }
});
