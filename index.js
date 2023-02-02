module.exports = {
  plugins: ['react', 'prettier', 'import'],
  extends: [
    './eslintrc-base.js',
  ],
  rules: {
    //prettier rules
    "prettier/prettier": [
      "error", {
        'endOfLine': 'auto',
        "arrowParens": "avoid",
        "bracketSpacing": false,
        "endOfLine": "lf",
        "htmlWhitespaceSensitivity": "css",
        "insertPragma": false,
        "jsxBracketSameLine": false,
        "jsxSingleQuote": false,
        "printWidth": 100,
        "proseWrap": "always",
        "quoteProps": "as-needed",
        "requirePragma": false,
        "semi": false,
        "singleQuote": true,
        "tabWidth": 2,
        "trailingComma": "all",
        "useTabs": false
      }
    ]
  },
  parserOptions: {
    project: './jsconfig.json',
    jsconfigRootDir: './',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
