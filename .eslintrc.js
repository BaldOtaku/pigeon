module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'class-methods-use-this': 0,
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
  },
};
