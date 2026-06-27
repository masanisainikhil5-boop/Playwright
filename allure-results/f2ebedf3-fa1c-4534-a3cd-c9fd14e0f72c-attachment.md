# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: locators\selectboxes.spec.ts >> Basic Web Test - Verify Page Title
- Location: tests\locators\selectboxes.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByLabel('Playwright')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Basic Web Test - Verify Page Title', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');
  6  | 
  7  |     await page.locator("#rs-single").click()
> 8  |     await page.getByLabel("Playwright").click()
     |                                         ^ Error: locator.click: Target page, context or browser has been closed
  9  | 
  10 | 
  11 | 
  12 | })
```