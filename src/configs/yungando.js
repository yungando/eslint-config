import yungandoPlugin from '@yungando/eslint-plugin';

export default () => [
  {
    name: 'yungando/yungando',
    plugins: { yungando: yungandoPlugin },
    /// keep-sorted
    rules: {
      'yungando/deep-list-children-newline': 'error',
    },
  },
];
