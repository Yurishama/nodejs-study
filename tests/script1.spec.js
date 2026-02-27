import { test, expect } from '@playwright/test';
import { clickElement } from 'wd/lib/commands';

test('validate the Page is load it', async ({ page }) => {
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


test('validate how to create a task', async ({ page }) => {
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


test('validate how mark task like done', async ({ page }) => {
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

  // locator
  //#root > main > ul > li > div > input
  //#root > main > ul > li:nth-child(1)
  //document.querySelector("#root > main > ul")
  //document.querySelector("#root > main > ul > li:nth-child(1)")

  const firstTask = page.locator('#root > main > ul > li:nth-child(1)');
  await expect(firstTask.getByText('call the psiquiatra', { exact: true })).toBeVisible();


  // document.querySelector("#root > main > ul > li > div > input")
  await firstTask.locator('input.toggle').check();


  await expect(firstTask).toHaveClass(/completed/);


//error this is save it into the const
  expect(item1).toBe('1 item left!'); 

  const item11 = await page.locator('#root > footer > span').innerText();
    expect(item11).toBe('0 items left!'); 


});