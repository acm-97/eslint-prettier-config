# Eslint / Prettier Setup for @acm-97

[![NPM version][npm-image]][npm-url]
[![License][github-license]][github-license-url]

These are my ESLint and Prettier settings for a React.js or Nextjs project.

## Table of Contents

- [Eslint / Prettier Setup for @acm-97](#eslint--prettier-setup-for-acm-97)
  - [Table of Contents](#table-of-contents)
  - [What it does](#what-it-does)
  - [Install](#install)
  - [If you use JavaScript](#if-you-use-javascript)
  - [If you use TypeScript](#if-you-use-typescript)
  - [With VS Code](#with-vs-code)
<!-- - [With VS Code](#with-vs-code) -->
<!-- - [With Create React App](#with-create-react-app) -->

## What it does

- Lints JavaScript and TypeScript based on the latest standards.
- Fixes issues and formatting errors with Prettier.
- Check for accessibility rules on JSX and TSX elements.

## Install

with npm:

```npm
npm install --dev @acm-97/eslint-prettier-config
```

with yarn:

```yarn
yar add -D @acm-97/eslint-prettier-config
```

## [If you use JavaScript](#if-you-use-javascript)

```json
{
  "extends": [
    "@acm-97/eslint-prettier-config"
  ]
}
```

if the above does not work for you, try this way:

```json
{
  "extends": [
    "./node_modules/@acm-97/eslint-prettier-config"
  ]
}
```

in the ```package.json``` you can add two scripts to your package.json to lint and/or fix your code:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "npm run lint -- --fix",
},
```

## [If you use TypeScript](#if-you-use-typescript)

```json
{
  "extends": [
    "@acm-97/eslint-prettier-config/typescript.js"
  ],
  "parserOptions": {
    "project": ["./tsconfig.json"]
  }
}
```

if the above does not work for you, try this way:

```json
{
  "extends": [
    "./node_modules/@acm-97/eslint-prettier-config/typescript.js"
  ],
  "parserOptions": {
    "project": ["./tsconfig.json"]
  }
}
```

in the ```package.json``` you can add two scripts to your package.json to lint and/or fix your code:

```json
"scripts": {
  "lint": "tsc --noEmit && eslint . --ext .js,.jsx,.ts,.tsx",
  "lint:fix": "npm run lint -- --fix",
},
```

## With VS Code

Once you have done. You probably want your editor to lint and fix for you.

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings. Create a `.vscode` folder at your root project, and create a `settings.json` file in this folder. Then, add this little config:

```js
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

[npm-url]: https://www.npmjs.com/package/@acm-97/eslint-prettier-config
[npm-image]: https://img.shields.io/npm/v/@acm-97/eslint-prettier-config
[github-license]: https://img.shields.io/github/license/acm-97/react-snake-game
[github-license-url]: https://github.com/acm-97/eslint-prettier-config/blob/main/LICENCE.md
