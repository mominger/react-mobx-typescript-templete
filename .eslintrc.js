module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-var-requires': 0,
    '@typescript-eslint/no-var-requires': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/no-empty-function": ["off"],
    "@typescript-eslint/no-non-null-assertion": ["off"],
    "@typescript-eslint/no-empty-interface": ["off"]
  },
};
