module.exports = {
  env: {
    browser: true,
    es6: true
  },

  extends: ['airbnb-base', 'airbnb/rules/react', 'prettier'],

  globals: {
    window: 'readonly',
    location: 'readonly',
    history: 'readonly',
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  plugins: ['prettier', 'react', 'react-hooks', '@typescript-eslint'],

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
        directory: './tsconfig.json'
      }
    }
  },

  rules: {
    quotes: ["error", "single", { "avoidEscape": true }],
    camelcase: 'off',
    'import/no-unresolved': 'error',
    'no-else-return': 'off',
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    semi: ['warn', 'never'],
    'prettier/prettier': ['error'],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'sort-imports': 'off',
    'arrow-parens': 'off',
    'comma-dangle': [
      'warn',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/no-array-index-key': 'off',
    'import/no-unresolved': 'error',
    'max-len': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'import/order': 'off',
    'global-require': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    'no-restricted-globals': 'off'
  },

  "overrides": [
    {
      "files": ["scripts/**.js"]
    }
  ],
}
