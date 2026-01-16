import { ensurePackages, interopDefault } from '@antfu/eslint-config';

export const jestConfig = async () => {
  await ensurePackages(['eslint-plugin-jest']);
  const jestPlugin = await interopDefault(import('eslint-plugin-jest'));

  return [
    {
      ...jestPlugin.configs['flat/recommended'],
      name: 'yungando/jest',
      languageOptions: {
        globals: {
          fetchMock: true,
        },
      },
    },
  ];
};
