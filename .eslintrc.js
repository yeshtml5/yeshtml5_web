module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    'react-hooks',
    '@typescript-eslint'
  ],
  "rules": {
    'react-hooks/exhaustive-deps': 0, // <--- THIS IS THE NEW RULE
    'no-shadow': 'off',
    'no-catch-shadow': 'off',
  },
  "settings": {
    react: {
      version: 'detect',
    },
  },
}
