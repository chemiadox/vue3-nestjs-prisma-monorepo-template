module.exports = {
  files: ['**/*.ts', '**/*.vue'],
  languageOptions: {
    parser: import('@typescript-eslint/parser'),
    parserOptions: {
      sourceType: 'module',
      project: './tsconfig.json',
    },
  },
  plugins: {
    '@typescript-eslint': import('@typescript-eslint/eslint-plugin'),
    vue: import('eslint-plugin-vue'),
  },
  rules: {
    // custom rules
  },
};
