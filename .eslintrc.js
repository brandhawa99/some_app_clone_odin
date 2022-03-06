module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    },
    'jsx-runtime': {
        plugins: [
          'react'
        ],
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          jsxPragma: null // for @typescript/eslint-parser
        },
        rules: {
          'react/react-in-jsx-scope': 0,
          'react/jsx-uses-react': 0
        }
      }
}
