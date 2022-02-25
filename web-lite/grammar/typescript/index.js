import loader from '../loader'

export default (registerLanguage, registerGrammar) => {
  const languages = [
    {
      id: 'typescript',
      aliases: ['TypeScript', 'ts', 'typescript'],
      extensions: ['.ts', '.cts', '.mts'],
      resolvedConfiguration: import('./language-configuration.json')
    },
    {
      id: 'typescriptreact',
      aliases: ['TypeScript React', 'tsx'],
      extensions: ['.tsx'],
      resolvedConfiguration: import('./language-configuration.json')
    },
    {
      id: 'jsonc',
      filenames: ['tsconfig.json', 'jsconfig.json'],
      filenamePatterns: [
        'tsconfig.*.json',
        'jsconfig.*.json',
        'tsconfig-*.json',
        'jsconfig-*.json'
      ]
    }
  ]

  const grammars = [
    {
      language: 'typescript',
      scopeName: 'source.ts',
      resolvedConfiguration: import('./syntaxes/TypeScript.tmLanguage.json'),
      tokenTypes: {
        'meta.template.expression': 'other',
        'meta.template.expression string': 'string',
        'meta.template.expression comment': 'comment',
        'entity.name.type.instance.jsdoc': 'other',
        'entity.name.function.tagged-template': 'other',
        'meta.import string.quoted': 'other',
        'variable.other.jsdoc': 'other'
      }
    },
    {
      language: 'typescriptreact',
      scopeName: 'source.tsx',
      resolvedConfiguration: import(
        './syntaxes/TypeScriptReact.tmLanguage.json'
      ),
      embeddedLanguages: {
        'meta.tag.tsx': 'jsx-tags',
        'meta.tag.without-attributes.tsx': 'jsx-tags',
        'meta.tag.attributes.tsx': 'typescriptreact',
        'meta.embedded.expression.tsx': 'typescriptreact'
      },
      tokenTypes: {
        'meta.template.expression': 'other',
        'meta.template.expression string': 'string',
        'meta.template.expression comment': 'comment',
        'entity.name.type.instance.jsdoc': 'other',
        'entity.name.function.tagged-template': 'other',
        'meta.import string.quoted': 'other',
        'variable.other.jsdoc': 'other'
      }
    },
    {
      scopeName: 'documentation.injection.ts',
      resolvedConfiguration: import(
        './syntaxes/jsdoc.ts.injection.tmLanguage.json'
      ),
      injectTo: ['source.ts', 'source.tsx']
    },
    {
      scopeName: 'documentation.injection.js.jsx',
      resolvedConfiguration: import(
        './syntaxes/jsdoc.js.injection.tmLanguage.json'
      ),
      injectTo: ['source.js', 'source.js.jsx']
    },
    {
      language: 'typescript',
      scopeName: 'source.ts',
      resolvedConfiguration: import('./syntaxes/TypeScript.tmLanguage.json'),
      tokenTypes: {
        'meta.template.expression': 'other',
        'meta.template.expression string': 'string',
        'meta.template.expression comment': 'comment',
        'entity.name.type.instance.jsdoc': 'other',
        'entity.name.function.tagged-template': 'other',
        'meta.import string.quoted': 'other',
        'variable.other.jsdoc': 'other'
      }
    },
    {
      language: 'typescriptreact',
      scopeName: 'source.tsx',
      resolvedConfiguration: import(
        './syntaxes/TypeScriptReact.tmLanguage.json'
      ),
      embeddedLanguages: {
        'meta.tag.tsx': 'jsx-tags',
        'meta.tag.without-attributes.tsx': 'jsx-tags',
        'meta.tag.attributes.tsx': 'typescriptreact',
        'meta.embedded.expression.tsx': 'typescriptreact'
      },
      tokenTypes: {
        'meta.template.expression': 'other',
        'meta.template.expression string': 'string',
        'meta.template.expression comment': 'comment',
        'entity.name.type.instance.jsdoc': 'other',
        'entity.name.function.tagged-template': 'other',
        'meta.import string.quoted': 'other',
        'variable.other.jsdoc': 'other'
      }
    },
    {
      scopeName: 'documentation.injection.ts',
      resolvedConfiguration: import(
        './syntaxes/jsdoc.ts.injection.tmLanguage.json'
      ),
      injectTo: ['source.ts', 'source.tsx']
    },
    {
      scopeName: 'documentation.injection.js.jsx',
      resolvedConfiguration: import(
        './syntaxes/jsdoc.js.injection.tmLanguage.json'
      ),
      injectTo: ['source.js', 'source.js.jsx']
    }
  ]

  return loader(registerLanguage, registerGrammar)(languages, grammars)
}
