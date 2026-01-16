export const nodeConfig = () => {
  return [
    {
      name: 'yungando/node',
      /// keep-sorted
      rules: {
        'node/prefer-global/process': ['error', 'always'],
      },
    },
  ];
};
