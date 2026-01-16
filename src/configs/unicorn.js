export const unicornConfig = () => {
  return [
    {
      name: 'yungando/unicorn',
      /// keep-sorted
      rules: {
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
};
