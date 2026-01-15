
import { antfu } from '@antfu/eslint-config';
import {
  antfuRuleOverrides,
  eslintRuleOverrides,
  importRuleOverrides,
  jsxA11yRuleOverrides,
  nodeRuleOverrides,
  reactRuleOverrides,
  styleRuleOverrides,
  testingLibraryRuleOverrides,
} from './rule-overrides';

export function config(options) {
  const {
    react = false,
    test = true,
    formatters = true,
  } = options;

  const ruleOverrides = {
    ...antfuRuleOverrides,
    ...eslintRuleOverrides,
    ...styleRuleOverrides,
    ...nodeRuleOverrides,
    ...importRuleOverrides,

    ...(react && {
      ...reactRuleOverrides,
      ...jsxA11yRuleOverrides,
    }),

    ...((test && react) && testingLibraryRuleOverrides),
  }

  return antfu(
    {
      react: react,
      stylistic: { semi: true },
      formatters: formatters,
      ...(react && {
        jsx: { a11y: true },
      })
    },
    {
      ...(test && jestPlugin.configs['flat/recommended']),
      ...((test && react) && testingLibraryPlugin.configs['flat/react'])
    },
    {
      ruleOverrides,
    }
  );
};

// {
//     jsx: { a11y: true },
//     react: true,
//     stylistic: { semi: true },
//     formatters: true,
//     languageOptions: {
//       globals: { fetchMock: true },
//       parser: babelEslintParser,
//       parserOptions: {
//         babelOptions: {
//           configFile: path.resolve(__dirname, 'babel.config.js'),
//         },
//       },
//     },
//     rules: {

//     },
//   },
//   {
//     
//   },
//   {
//     rules: {
//       ...eslintBaseConfigRuleOverrides,
//       ...jsxA11yPluginRuleOverrides,
//       ...importPluginRuleOverrides,

//       ...eslintRuleOverrides,
//       ...styleRuleOverrides,
//       ...antfuRuleOverrides,
//       ...nodeRuleOverrides,
//       ...testingLibraryRuleOverrides,
//       ...reactRuleOverrides,
//     },
//   },