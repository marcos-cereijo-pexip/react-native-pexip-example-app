module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    semi: 0,
    'comma-dangle': 0,
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        trailingComma: 'none',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        bracketSpacing: true,
        eslintIntegration: true,
        printWidth: 120
      }
    ]
  }
}
