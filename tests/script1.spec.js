import { test, expect } from '@playwright/test';

test('validate it has title', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/#/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
