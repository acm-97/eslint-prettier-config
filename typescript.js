module.exports = {
  plugins: ['@typescript-eslint', 'react', 'prettier', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    './eslintrc-base.js',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: './',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/space-before-blocks': 'warn',
    '@typescript-eslint/no-explicit-any': ['off'],

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
};
