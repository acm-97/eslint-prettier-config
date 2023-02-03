module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  ignorePatterns: ['next.config.js', 'next-i18next.config.js'],
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    'prefer-const': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'no-return-await': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-nested-ternary': 'off',
    'space-before-blocks': 'off',
    'newline-before-return': 'off',
    'no-unused-expressions': 'off',
    'no-plusplus': 'off',
    'no-useless-return': 'off',
    "no-unused-vars": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",

    // react rules
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/require-default-props': 'off',
    'react/no-array-index-key': 'off',
    'react/react-in-jsx-scope': 'off',
    "react/jsx-props-no-spreading": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-no-bind": "off",

    // import rules
    'import/extensions': 'off',
    'import/no-cycle': [0, { ignoreExternal: true }],
    'import/prefer-default-export': 'off',
    "import/no-unresolved": "off",
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', ['index', 'sibling', 'parent', 'object', 'type']],
        alphabetize: {
          order: 'desc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['node_modules', 'src'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
