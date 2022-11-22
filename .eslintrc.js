module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [ 'eslint:recommended' ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 3,
      },
    ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 3,
      },
    ],
    'arrow-parens': 'off',
    'arrow-spacing': 'error',
    'block-spacing': [ 'error', 'always' ],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],
    camelcase: 'off',
    curly: [ 'error', 'all' ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    eqeqeq: 'error',
    'function-paren-newline': [ 'error', 'multiline-arguments' ],
    'generator-star-spacing': 'off',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'newline-per-chained-call': 'error',
    'no-debugger': 'off',
    'no-dupe-keys': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-prototype-builtins': 'off',
    'no-trailing-spaces': [
      'error',
      {
        ignoreComments: true,
      },
    ],
    'no-unused-vars': 'off',
    'no-var': 'error',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 1,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 3,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      },
    ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    'quote-props': [ 'error', 'as-needed' ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'rest-spread-spacing': [ 'error', 'never' ],
    semi: 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
  },
}
