module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:import/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['**/*.svg', '.eslintrc.cjs'],
  settings: {
    // 'import/ignore': ['.svg'],
    // 'import/resolver': {
    //   typescript: true,
    //   node: true,
    // },
  },
  rules: {
    'no-restricted-imports': [
      2,
      {
        patterns: ['**/shared-react/*'],
      },
    ],
  },
};
