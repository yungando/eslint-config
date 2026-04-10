import { antfu } from '@antfu/eslint-config';
import {
  antfuConfig,
  commentsConfig,
  e18eConfig,
  eslintConfig,
  importConfig,
  jestDomConfig,
  jsxA11yConfig,
  nodeConfig,
  reactConfig,
  styleConfig,
  testConfig,
  testingLibraryConfig,
  unicornConfig,
  yungandoConfig,
} from './configs/index.js';

const config = (options = {}) => {
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

  const extraJsoncFiles = [
    '**/*.jem',
    '**/*.rpo',
  ];

  const configs = [
    ...antfuConfig(),
    ...commentsConfig(),
    ...e18eConfig(),
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
    configs.push(...testConfig());
  }

  if (enableReact && enableTest) {
    configs.push(...testingLibraryConfig());
    configs.push(...jestDomConfig());
  }

  return antfu({
    stylistic: enableStylistic,
    formatters: enableFormatters,
    test: enableTest,
    react: enableReact,
    jsx: jsxOptions,
    ...antfuOptions,
  })
    .override('antfu/jsonc/rules', (jsoncConfig) => ({
      ...jsoncConfig,
      files: [...jsoncConfig.files, ...extraJsoncFiles],
    }))
    .append(configs);
};

export default config;
