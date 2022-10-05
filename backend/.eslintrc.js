module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: '2018',
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  },
};
