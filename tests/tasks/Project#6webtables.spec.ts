import {test, expect} from "@playwright/test"
import * as allure from "allure-js-commons"

test("Verify the webtable and select the checkbox", async({page}) => {
    //Login to TTA site
    await page.goto("https://app.thetestingacademy.com/playwright/webtable")

    //Search for the name
    await page.getByPlaceholder("Search username, role, city, project...").fill("Kabir")
    await page.getByRole("button", {name: "Select Cloud QA"}).click()

    //validate visibility
    const usernameRow= page.locator("tr[data-username='Kabir.Khan']");
    await expect (usernameRow.locator('td', { hasText: 'Kabir.Khan' })).toBeVisible();

    // validate if checkbox is checked
    await usernameRow.locator('td').first().click(); // one way to get checkbox locator
    await expect (usernameRow.locator("input[type='checkbox']")).toBeChecked(); // another way

    //validate if selected username appears
    await expect(page.locator('.selected-output')).toContainText("Kabir.Khan");
});