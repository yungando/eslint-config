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
    stylistic: enableStylistic = true,
    formatters: enableFormatters = true,
    test: enableTest = false,
    react: enableReact = false,
    jsx: jsxOptions = enableReact
      ? { a11y: true }
      : false,
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
      stylistic: enableStylistic,
      formatters: enableFormatters,
      test: enableTest,
      react: enableReact,
      jsx: jsxOptions,
      ...antfuOptions,
    },
  ).append(configs);
};

export default config;
