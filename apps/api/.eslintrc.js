module.exports = {
  extends: ['../../.eslintrc.js'],
  rules: {
    'no-unused-vars': 'error',
  },
  overrides: [
    {
      files: ['**/*.export.ts'],
      rules: { 'no-unused-vars': 'off' },
    },
  ],
};
