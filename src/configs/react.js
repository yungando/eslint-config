import { GLOB_SRC } from '@antfu/eslint-config';

export default () => [
  {
    name: 'yungando/react',
    files: [GLOB_SRC],
    /// keep-sorted
    rules: {
      'react/dom-no-missing-button-type': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/no-unstable-context-value': 'error',
    },
  },
];
