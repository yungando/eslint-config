export default () => [
  {
    name: 'yungando/jsx-a11y',
    /// keep-sorted
    rules: {
      'jsx-a11y/control-has-associated-label': 'error',
      'jsx-a11y/label-has-associated-control': ['error', { required: { some: ['nesting', 'id'] } }],
      'jsx-a11y/lang': 'error',
    },
  },
];
