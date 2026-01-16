import { ensurePackages, interopDefault } from '@antfu/eslint-config';

export const testingLibraryConfig = async () => {
  await ensurePackages(['eslint-plugin-testing-library']);
  const testingLibraryPlugin = await interopDefault(import('eslint-plugin-testing-library'));

  const testingLibraryRuleOverrides = {
    'testing-library/no-debugging-utils': 'off',
    'testing-library/no-node-access': 'off',
    'testing-library/no-render-in-lifecycle': 'off',
    'testing-library/prefer-presence-queries': 'off',
  };

  return [
    {
      name: 'yungando/testing-library',
      plugins: {
        testingLibraryPlugin,
      },
      rules: {
        ...testingLibraryPlugin.configs['flat/react'],
        ...testingLibraryRuleOverrides,
      },
    },
  ];
};
