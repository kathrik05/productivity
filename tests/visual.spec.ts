import { test, expect } from '@playwright/test';

test.describe('Figma Visual Fidelity Checks', () => {
  test('renders Design Foundation (80:5443) at exact 2290x986 frame size', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 2290, height: 986 });
    await page.goto('/foundation?screenshot=1', { waitUntil: 'networkidle' });

    const root = page.locator('[data-node-id="80:5443"]');
    await expect(root).toBeVisible();

    const images = page.locator('img');
    const count = await images.count();
    expect(count).toBe(9);
    for (let i = 0; i < count; i++) {
      const naturalWidth = await images
        .nth(i)
        .evaluate((el: HTMLImageElement) => el.naturalWidth);
      expect(naturalWidth).toBeGreaterThan(0);
    }

    await page.screenshot({
      path: 'test-results/design-foundation-80-5443.png',
      fullPage: false,
    });
  });

  test('renders Design Components (80:5478) at exact 3001x1686 frame size', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 3001, height: 1686 });
    await page.goto('/components?screenshot=1', { waitUntil: 'networkidle' });

    const root = page.locator('[data-node-id="80:5478"]');
    await expect(root).toBeVisible();

    const images = page.locator('img');
    const count = await images.count();
    expect(count).toBeGreaterThan(20);
    for (let i = 0; i < count; i++) {
      const naturalWidth = await images
        .nth(i)
        .evaluate((el: HTMLImageElement) => el.naturalWidth);
      expect(naturalWidth).toBeGreaterThan(0);
    }

    await page.screenshot({
      path: 'test-results/design-components-80-5478.png',
      fullPage: false,
    });

    const taskTileSet = page.locator('[data-node-id="87:6349"]');
    await taskTileSet.screenshot({
      path: 'test-results/tasktile-87-6349.png',
    });
  });
});
