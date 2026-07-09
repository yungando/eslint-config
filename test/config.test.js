import { ESLint } from 'eslint';
import { beforeAll, describe, expect, it } from 'vitest';
import config from '../src/index.js';

describe('eslint config', () => {
  describe('when the config is setup using the default options', () => {
    let defaultConfig;
    let eslint;
    let resolvedConfig;

    beforeAll(async () => {
      defaultConfig = await config();
      eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig: defaultConfig,
      });

      resolvedConfig = await eslint.lintText('const foo = bar;');
    });

    it('should not include any config items from additional options', () => {
      expect(defaultConfig).not.toContainEqual(expect.objectContaining({ name: 'yungando/react' }));
      expect(defaultConfig).not.toContainEqual(expect.objectContaining({ name: 'yungando/jsx-a11y' }));
      expect(defaultConfig).not.toContainEqual(expect.objectContaining({ name: 'yungando/test' }));
    });

    it('should provide a valid ESLint config', async () => {
      expect(resolvedConfig).toBeTruthy();
    });
  });

  describe('when the config is setup with `react` enabled', () => {
    let configWithReact;
    let eslint;
    let resolvedConfig;

    beforeAll(async () => {
      configWithReact = await config({ react: true });
      eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig: configWithReact,
      });

      resolvedConfig = await eslint.lintText('const foo = bar;');
    });

    it('should include the `react` and `jsx-a11y` config items', () => {
      expect(configWithReact).toContainEqual(expect.objectContaining({ name: 'yungando/react' }));
      expect(configWithReact).toContainEqual(expect.objectContaining({ name: 'yungando/jsx-a11y' }));
    });

    it('should provide a valid ESLint config', async () => {
      expect(resolvedConfig).toBeTruthy();
    });
  });

  describe('when the config is setup with `test` enabled', () => {
    let configWithTest;
    let eslint;
    let resolvedConfig;

    beforeAll(async () => {
      configWithTest = await config({ test: true });
      eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig: configWithTest,
      });

      resolvedConfig = await eslint.lintText('const foo = bar;');
    });

    it('should include the `test` config item', () => {
      expect(configWithTest).toContainEqual(expect.objectContaining({ name: 'yungando/test' }));
    });

    it('should provide a valid ESLint config', async () => {
      expect(resolvedConfig).toBeTruthy();
    });
  });

  describe('when the config is setup with both `react` and `test` enabled', () => {
    let configWithAll;
    let eslint;
    let resolvedConfig;

    beforeAll(async () => {
      configWithAll = await config({ react: true, test: true });
      eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig: configWithAll,
      });

      resolvedConfig = await eslint.lintText('const foo = bar;');
    });

    it('should include the `test` config item', () => {
      expect(configWithAll).toContainEqual(expect.objectContaining({ name: 'yungando/test' }));
      expect(configWithAll).toContainEqual(expect.objectContaining({ name: 'yungando/react' }));
      expect(configWithAll).toContainEqual(expect.objectContaining({ name: 'yungando/jsx-a11y' }));
      expect(configWithAll).toContainEqual(expect.objectContaining({ name: 'yungando/testing-library' }));
    });

    it('should provide a valid ESLint config', async () => {
      expect(resolvedConfig).toBeTruthy();
    });
  });
});
