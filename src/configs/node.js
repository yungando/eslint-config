import { GLOB_SRC } from '@antfu/eslint-config';

export default () => [
  {
    name: 'yungando/node',
    files: [GLOB_SRC],
    /// keep-sorted
    rules: {
      'node/file-extension-in-import': ['error', 'always'],
      'node/no-extraneous-import': 'error',
      'node/no-extraneous-require': 'error',
      'node/prefer-global/process': ['error', 'always'],
    },
  },
];
