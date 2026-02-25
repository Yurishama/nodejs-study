import { test, expect } from '@playwright/test';

test('validate it has title equal TodoMVC: Reac', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/#/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/TodoMVC: React/);
  await expect(page.locator('h1')).toHaveText('todos');
  await expect(page.locator('#todo-input')).toBeVisible();
  await expect(page.locator('#todo-input')).toHaveAttribute('placeholder', 'What needs to be done?');

  await page.locator('#todo-input').fill('call the psiquiatra');
  await page.keyboard.press('Enter');

  const task1 = await page.locator('#root > main > ul > li > div > label').innerText();
  expect(task1).toBe('call the psiquiatra');

  const filtersBar = await page.locator('#root > footer > ul')
  await expect(filtersBar).toBeVisible();

  const item1 = await page.locator('#root > footer > span').innerText();
  expect(item1).toBe('1 item left!');


});
