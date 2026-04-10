import jestDomPlugin from 'eslint-plugin-jest-dom';

export default () => [
  {
    name: 'yungando/jest-dom',
    plugins: { 'jest-dom': jestDomPlugin },
    // keep-sorted
    rules: {
      ...jestDomPlugin.configs['flat/recommended'].rules,
    },
  },
];
