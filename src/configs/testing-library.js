import { ensurePackages, interopDefault } from '@antfu/eslint-config';

export default async () => {
  await ensurePackages(['eslint-plugin-testing-library']);
  const testingLibraryPlugin = await interopDefault(import('eslint-plugin-testing-library'));

  return [
    {
      ...testingLibraryPlugin.configs['flat/react'],
      name: 'yungando/testing-library',
      rules: {
        'testing-library/no-debugging-utils': 'off',
        'testing-library/no-node-access': 'off',
        'testing-library/no-render-in-lifecycle': 'off',
        'testing-library/prefer-presence-queries': 'off',
      },
    },
  ];
};
