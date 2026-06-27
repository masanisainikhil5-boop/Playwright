import{test, expect} from "@playwright/test"
import * as allure from "allure-js-commons"; 

test("Verify the dropdown boxes", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/dropdown")

    await page.locator("#dropdown").click()
    await page.selectOption("#dropdown", "Option 1")

    await page.waitForTimeout(5000)


})