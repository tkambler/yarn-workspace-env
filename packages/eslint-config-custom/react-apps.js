module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  ignorePatterns: ['**/*.svg', '.eslintrc.cjs'],
  settings: {
    'import/ignore': ['.svg'],
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
