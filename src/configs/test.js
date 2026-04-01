import { GLOB_TESTS } from '@antfu/eslint-config';

export default () => [
  {
    name: 'yungando/test',
    files: GLOB_TESTS,
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
