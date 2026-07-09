import jestDomPlugin from 'eslint-plugin-jest-dom-ya';

export default () => [
  {
    name: 'yungando/jest-dom',
    plugins: { 'jest-dom-ya': jestDomPlugin },
    // keep-sorted
    rules: {
      ...jestDomPlugin.configs['flat/recommended'].rules,
    },
  },
];
