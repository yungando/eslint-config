import { antfu } from '@antfu/eslint-config';
import {
  antfuConfig,
  commentsConfig,
  eslintConfig,
  importConfig,
  jsxA11yConfig,
  nodeConfig,
  reactConfig,
  styleConfig,
  testConfig,
  testingLibraryConfig,
  unicornConfig,
  yungandoConfig,
} from './configs/index.js';

const config = async (options = {}) => {
  const {
    react: enableReact = false,
    test: enableTest = false,
    formatters: enableFormatters = true,
    stylstic: stylisticRules = { semi: true },
    ...antfuOptions
  } = options;

  const configs = [
    ...antfuConfig(),
    ...commentsConfig(),
    ...eslintConfig(),
    ...importConfig(),
    ...nodeConfig(),
    ...styleConfig(),
    ...unicornConfig(),
    ...yungandoConfig(),
  ];

  if (enableReact) {
    configs.push(...reactConfig(), ...jsxA11yConfig());
  }

  if (enableTest) {
    configs.push(...await testConfig());
  }

  if (enableReact && enableTest) {
    configs.push(...await testingLibraryConfig());
  }

  return await antfu(
    {
      react: enableReact,
      test: enableTest,
      stylistic: stylisticRules,
      formatters: enableFormatters,
      ...(enableReact && {
        jsx: { a11y: true },
      }),
      ...antfuOptions,
    },
  ).append(configs);
};

export default config;
