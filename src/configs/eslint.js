/// keep-sorted
const eslintBaseConfigRuleOverrides = {
  'array-callback-return': ['error', { allowImplicit: true }],
  'func-style': 'off',
  'jsdoc/require-jsdoc': 'off',
  'max-classes-per-file': ['error', 1],
  'no-bitwise': 'error',
  'no-empty-function': ['error', { allow: ['arrowFunctions', 'methods'] }],
  'no-extra-label': ['error'],
  'no-lonely-if': ['error'],
  'no-multi-assign': ['error'],
  'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['acc', 'accumulator', 'e', 'ctx', 'context', 'req', 'request', 'res', 'response', '$scope', 'staticContext'] }],
  'no-plusplus': ['error'],
  'no-promise-executor-return': ['error'],
  'no-restricted-exports': ['error', { restrictedNamedExports: ['default', 'then'] }],
  'no-return-assign': ['error', 'always'],
  'no-undefined': 'off',
  'no-void': ['error'],
  'prefer-destructuring': ['error', { VariableDeclarator: { array: false, object: true }, AssignmentExpression: { array: true, object: false } }, { enforceForRenamedProperties: false }],
  'prefer-object-spread': ['error'],
  'require-unicode-regexp': 'off',
  camelcase: ['error', { properties: 'never' }],
};

export const eslintConfig = () => {
  return [
    {
      name: 'yungando/eslint',
      /// keep-sorted
      rules: {
        'new-cap': ['error', { capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'], properties: false }],
        'no-param-reassign': ['error', { props: true }],
        'no-restricted-syntax': ['error', 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],
        'no-underscore-dangle': 'error',
        'no-unused-vars': ['error', { vars: 'all', args: 'after-used', caughtErrors: 'all' }],
        'one-var': ['error', 'never'],
        'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
        curly: ['error', 'multi-line'],
      },
    },
  ];
};
