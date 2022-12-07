# Eslint / Prettier Setup for @acm-97

[![NPM version][npm-image]][npm-url]
[![License][github-license]][github-license-url]

These are my ESLint and Prettier settings for a React.js or Nextjs project.

## Table of Contents

- [Eslint / Prettier Setup for @acm-97](#eslint--prettier-setup-for-acm-97)
  - [Table of Contents](#table-of-contents)
  - [What it does](#what-it-does)
  - [Install](#install)
  - [How to use:](#how-to-use)
    - [JavaScript projects](#javascript-projects)
    - [TypeScript projects](#typescript-projects)
    - [Add support for Next.JS](#add-support-for-nextjs)
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
yarn add -D @acm-97/eslint-prettier-config
```

> **Note**: After installation, if you are only going to work with Javascript files, you can run one of the following commands to remove unnecessary packages and save space:\

```npm
npm remove @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript
```

```yarn
yarn remove @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript
```

## How to use:

### JavaScript projects

```json
// in your "eslintrc.json" file
// add the below json object
{
  "extends": [
    "@acm-97/eslint-prettier-config"
  ]
}

// if the above does not work for you, try with this:
{
  "extends": [
    "./node_modules/@acm-97/eslint-prettier-config"
  ]
}

// in the "package.json" file
// you can add two scripts to your package.json to lint and/or fix your code:
"scripts": {
  "lint": "eslint .",
  "lint:fix": "npm run lint -- --fix",
},
```

### TypeScript projects

```json
// in your "eslintrc.json" file
// add the below json object
{
  "extends": [
    "@acm-97/eslint-prettier-config/typescript.js"
  ]
}

// if the above does not work for you, try with this:
{
  "extends": [
    "./node_modules/@acm-97/eslint-prettier-config/typescript.js"
  ]
}

// in the "package.json" file
// you can add two scripts to your package.json to lint and/or fix your code:
"scripts": {
  "lint": "tsc --noEmit && eslint . --ext .js,.jsx,.ts,.tsx",
  "lint:fix": "npm run lint -- --fix",
```

### Add support for Next.JS

First do: `yarn add -D eslint-config-next` or `npm install --dev eslint-config-next` and then:

```json
// update your "eslintrc.json" file
{
  "extends": [
    ...

    'next/core-web-vitals',
  ]
}
```

## With VS Code

Once you have done. You probably want your editor to lint and fix for you.

> Note: If eslint configuration does not work you may have to restore uor VS Code.

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings. Go to the `settings.json` file. Then, add this little config and then:

```json
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
