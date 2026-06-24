import {test, expect} from '@playwright/test'

test("Verify invalid login creds", async({page}) => {
    await page.goto("https://app.vwo.com/#/login", {waitUntil: "networkidle"})
    
    let username = page.getByRole("textbox", {name: "Email address"})
    await username.fill("admin@admin.com")

    let password = page.getByRole("textbox", {name: "Password"})
    await password.fill("admin123")

    let button = page.getByRole("button", {name: "Sign in", exact: true})
    await button.click()

    let error_msg = page.locator("#js-notification-box-msg")
    await expect(error_msg).toContainText("Your email, password, IP address or location did not match")

});