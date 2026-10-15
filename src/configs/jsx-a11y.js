import { GLOB_JSX } from '@antfu/eslint-config';
import jsxA11yXPlugin from 'eslint-plugin-jsx-a11y-x';

export default () => [
  {
    name: 'yungando/jsx-a11y',
    plugins: { 'jsx-a11y-x': jsxA11yXPlugin },
    files: [GLOB_JSX],
    /// keep-sorted
    rules: {
      ...jsxA11yXPlugin.configs.recommended.rules,
      'jsx-a11y-x/control-has-associated-label': 'error',
      'jsx-a11y-x/label-has-associated-control': [
        'error',
        {
          required: { some: ['nesting', 'id'] },
        },
      ],
      'jsx-a11y-x/lang': 'error',
    },
  },
];
