import {test, expect} from '@playwright/test'

test("Make an Appointment on Katalon", async({page}) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/", {waitUntil:"networkidle"})

    let makeapp = page.locator("#btn-make-appointment")
    await makeapp.click()

    let username = page.locator("#txt-username")
    await username.fill("John Doe")

    let password = page.locator("#txt-password")
    await password.fill("ThisIsNotAPassword")

    let logbut = page.locator("#btn-login")
    await logbut.click()

    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");

})