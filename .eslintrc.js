'use strict';

const globals = require('./index').environments.globals.globals;

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:node/recommended',
    'prettier',
  ],
  plugins: ['eslint-plugin', 'node', 'prettier'],
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    node: true,
  },
  rules: {
    eqeqeq: ['error', 'smart'],
    strict: 'error',
    'prefer-template': 'warn',
    'object-shorthand': ['warn', 'always', { avoidExplicitReturnArrows: true }],
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.test.js'],
      globals,
    },
  ],
};
