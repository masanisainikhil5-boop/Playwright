import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

    await page.locator("#rs-single").click()
    await page.getByRole("option", {name: "Playwright"}).click()

    await page.locator("#rs-multi").click()
    await page.getByRole("option", {name: "Playwright"}).click()
    await page.getByRole("option", {name: "Cucumber"}).click()
    await page.keyboard.press("Escape")

    await page.locator("#rs-async").click()
    await page.getByTestId('rs-async-input').fill('Hyd');
    await page.getByText('Hyderabad').click();


    await page.waitForTimeout(5000);



})