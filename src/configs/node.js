export const nodeConfig = () => {
  return [
    {
      name: 'yungando/antfu',
      /// keep-sorted
      rules: {
        'node/prefer-global/process': ['error', 'always'],
      },
    },
  ];
};
