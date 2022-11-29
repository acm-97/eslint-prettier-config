module.exports = {
  plugins: ['react', 'prettier', 'import'],
  extends: [
    './eslintrc-base.js',
  ],
  rules: {
    //prettier rules
    "prettier/prettier": [
      "error", {
        "semi": true,
        "singleQuote": true,
        "tabWidth": 2,
        "useTabs": false,
        "bracketSameLine": false,
        "printWidth": 120,
        "endOfLine": "auto",
        "trailingComma":"all",
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
