import { antfu } from '@antfu/eslint-config';
import {
  antfuConfig,
  eslintConfig,
  importConfig,
  jestConfig,
  jsxA11yConfig,
  nodeConfig,
  reactConfig,
  styleConfig,
  testingLibraryConfig,
} from './configs/index.js';

export const config = async (options = {}) => {
  const {
    react: enableReact = false,
    test: enableJest = false,
    formatters: enableFormatters = true,
  } = options;

  const configs = [
    ...antfuConfig(),
    ...eslintConfig(),
    ...importConfig(),
    ...nodeConfig(),
    ...styleConfig(),
  ];

  if (enableReact) {
    configs.push([reactConfig(), jsxA11yConfig()]);
  }

  if (enableJest) {
    configs.push(jestConfig());
  }

  if (enableReact && enableJest) {
    configs.push(testingLibraryConfig());
  }

  return antfu(
    {
      react: enableReact,
      stylistic: { semi: true },
      formatters: enableFormatters,
      ...(enableReact && {
        jsx: { a11y: true },
      }),
    },
  )
    .append(configs);
};
