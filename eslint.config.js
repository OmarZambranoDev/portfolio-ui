// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  {
    // Files to ignore
    ignores: ['dist', 'node_modules', 'storybook-static'],
  },
  // Base recommended configs
  js.configs.recommended,
  ...tseslint.configs.recommended,
  // Prettier integration (must be last to override other formatting rules)
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    // Custom rules for our project
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      // Add any other custom rules here
    },
  }
);