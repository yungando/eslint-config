export const antfuConfig = () => {
  return [
    {
      name: 'yungando/antfu',
      /// keep-sorted
      rules: {
        'antfu/consistent-list-newline': 'off',
        'antfu/curly': 'off',
        'antfu/if-newline': 'off',
        'antfu/top-level-function': 'off',
      },
    },
  ];
};
