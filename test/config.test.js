import { beforeAll, describe, expect, it } from 'vitest';
import config from '../src/index.js';

describe('eslint config', () => {
  describe('when the config is setup using the default options', () => {
    let defaultConfig;

    beforeAll(async () => {
      defaultConfig = await config();
    });

    it('should not include any config items from additional options', () => {
      expect(defaultConfig).not.toContainEqual(expect.objectContaining({ name: 'yungando/react' }));
      expect(defaultConfig).not.toContainEqual(expect.objectContaining({ name: 'yungando/jsx-a11y' }));
      expect(defaultConfig).not.toContainEqual(expect.objectContaining({ name: 'yungando/test' }));
    });
  });

  describe('when the config is setup with `react` enabled', () => {
    let configWithReact;

    beforeAll(async () => {
      configWithReact = await config({ react: true });
    });

    it('should include the `react` and `jsx-a11y` config items', () => {
      expect(configWithReact).toContainEqual(expect.objectContaining({ name: 'yungando/react' }));
      expect(configWithReact).toContainEqual(expect.objectContaining({ name: 'yungando/jsx-a11y' }));
    });
  });

  describe('when the config is setup with `test` enabled', () => {
    let configWithTest;

    beforeAll(async () => {
      configWithTest = await config({ test: true });
    });

    it('should include the `test` config item', () => {
      expect(configWithTest).toContainEqual(expect.objectContaining({ name: 'yungando/test' }));
    });
  });

  describe('when the config is setup with both `react` and `test` enabled', () => {
    let configWithAll;

    beforeAll(async () => {
      configWithAll = await config({ react: true, test: true });
    });

    it('should include the `test` config item', () => {
      expect(configWithAll).toContainEqual(expect.objectContaining({ name: 'yungando/test' }));
      expect(configWithAll).toContainEqual(expect.objectContaining({ name: 'yungando/react' }));
      expect(configWithAll).toContainEqual(expect.objectContaining({ name: 'yungando/jsx-a11y' }));
      expect(configWithAll).toContainEqual(expect.objectContaining({ name: 'yungando/testing-library' }));
    });
  });
});
