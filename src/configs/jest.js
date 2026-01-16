import { ensurePackages, interopDefault } from '@antfu/eslint-config';

export const jestConfig = async () => {
  await ensurePackages(['eslint-plugin-jest']);
  const jestPlugin = await interopDefault(import('eslint-plugin-jest'));

  return [
    {
      name: 'yungando/jest',
      plugins: {
        jestPlugin,
      },
      rules: jestPlugin.configs['flat/recommended'],
    },
  ];
};
