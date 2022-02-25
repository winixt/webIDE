import loader from '../loader'

export default (registerLanguage, registerGrammar) => {
    const languages = [
        {
            id: "vue",
            "extensions": [
                ".vue"
            ],
            "resolvedConfiguration": import("./vue-language-configuration.json")
        },
        {
            "id": "html",
            "resolvedConfiguration": import("./sfc-template-language-configuration.json")
        },
        {
            "id": "jade",
            "resolvedConfiguration": import("./sfc-template-language-configuration.json")
        },
        {
            "id": "plaintext",
            "resolvedConfiguration": import("./sfc-template-language-configuration.json")
        },
        {
            "id": "vue-injection-markdown"
        },
        {
            "id": "vue-directives"
        },
        {
            "id": "vue-interpolations"
        }
    ];

    const grammars = [
        {
            "language": "vue",
            "scopeName": "source.vue",
            "resolvedConfiguration": import("./syntaxes/vue.tmLanguage.json"),
            "embeddedLanguages": {
                "source.vue": "vue",
                "text": "plaintext",
                "text.html.derivative": "html",
                "text.html.markdown": "markdown",
                "text.pug": "jade",
                "source.css": "css",
                "source.css.scss": "scss",
                "source.css.less": "less",
                "source.sass": "sass",
                "source.stylus": "stylus",
                "source.postcss": "postcss",
                "source.js": "javascript",
                "source.ts": "typescript",
                "source.jsx": "javascriptreact",
                "source.tsx": "typescriptreact",
                "source.json": "json",
                "source.json.comments": "jsonc",
                "source.yaml": "yaml",
                "source.toml": "toml",
                "source.graphql": "graphql"
            }
        },
        {
            "language": "vue-injection-markdown",
            "scopeName": "markdown.vue.codeblock",
            "resolvedConfiguration": import("./syntaxes/markdown-vue.json"),
            "injectTo": [
                "text.html.markdown"
            ],
            "embeddedLanguages": {
                "meta.embedded.block.vue": "vue",
                "source.vue": "vue",
                "text": "plaintext",
                "text.html.derivative": "html",
                "text.html.markdown": "markdown",
                "text.pug": "jade",
                "source.css": "css",
                "source.css.scss": "scss",
                "source.css.less": "less",
                "source.sass": "sass",
                "source.stylus": "stylus",
                "source.postcss": "postcss",
                "source.js": "javascript",
                "source.ts": "typescript",
                "source.jsx": "javascriptreact",
                "source.tsx": "typescriptreact",
                "source.json": "json",
                "source.json.comments": "jsonc",
                "source.yaml": "yaml",
                "source.toml": "toml",
                "source.graphql": "graphql"
            }
        },
        {
            "language": "vue-directives",
            "scopeName": "vue.directives",
            "resolvedConfiguration": import("./syntaxes/vue-directives.json"),
            "injectTo": [
                "source.vue",
                "text.html.markdown",
                "text.html.derivative",
                "text.pug"
            ]
        },
        {
            "language": "vue-interpolations",
            "scopeName": "vue.interpolations",
            "resolvedConfiguration": import("./syntaxes/vue-interpolations.json"),
            "injectTo": [
                "source.vue",
                "text.html.markdown",
                "text.html.derivative",
                "text.pug"
            ]
        }
    ]

    return loader(registerLanguage, registerGrammar)(languages, grammars)
}
