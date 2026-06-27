import{test, expect} from "@playwright/test"
import * as allure from "allure-js-commons"; 

test("Verify the dropdown boxes", async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns")

    await page.locator("//div[@data-testid=('dropdown-language')]").click()
    await page.getByRole('option', { name: 'TypeScript' }).click();
    await page.locator("//div[@data-testid=('dropdown-experience')]").click()
    await page.getByRole('option', { name: 'Mid-level (4-6 years)' }).click();


})