export const commentsConfig = () => {
  return [
    {
      name: 'yungando/comments',
      /// keep-sorted
      rules: {
        'eslint-comments/disable-enable-pair': 'error',
        'eslint-comments/no-unused-disable': 'error',
      },
    },
  ];
};
