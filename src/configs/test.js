import { ensurePackages, GLOB_TESTS, interopDefault } from '@antfu/eslint-config';

export default async () => {
  await ensurePackages(['eslint-plugin-jest']);
  const jestPlugin = await interopDefault(import('eslint-plugin-jest'));

  return [
    {
      name: 'yungando/test',
      files: [GLOB_TESTS],
      languageOptions: {
        globals: {
          ...jestPlugin.configs['flat/recommended'].languageOptions.globals,
          fetchMock: false,
        },
      },
      /// keep-sorted
      rules: {
        'test/expect-expect': 'warn',
        'test/no-alias-methods': 'error',
        'test/no-commented-out-tests': 'warn',
        'test/no-conditional-expect': 'error',
        'test/no-disabled-tests': 'warn',
        'test/no-focused-tests': 'error',
        'test/no-interpolation-in-snapshots': 'error',
        'test/no-mocks-import': 'error',
        'test/no-standalone-expect': 'error',
        'test/valid-describe-callback': 'error',
        'test/valid-expect-in-promise': 'error',
        'test/valid-expect': 'error',
      },
    },
  ];
};
