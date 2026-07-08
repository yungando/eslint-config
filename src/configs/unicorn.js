import { GLOB_SRC } from '@antfu/eslint-config';

export default () => [
  {
    name: 'yungando/unicorn',
    files: [GLOB_SRC],
    /// keep-sorted
    rules: {
      'unicorn/no-null': 'error',
      'unicorn/prefer-array-find': 'error',
      'unicorn/prefer-array-flat-map': 'error',
      'unicorn/prefer-array-flat': 'error',
      'unicorn/prefer-array-index-of': 'error',
      'unicorn/prefer-array-some': 'error',
      'unicorn/prefer-at': 'error',
      'unicorn/prefer-set-has': 'error',
      'unicorn/prefer-string-slice': 'error',
      'unicorn/prefer-string-trim-start-end': 'error',
    },
  },
];
