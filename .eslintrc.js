module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: ['airbnb-base/legacy', 'prettier'],
  plugins: ['babel', 'import', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  }
};
