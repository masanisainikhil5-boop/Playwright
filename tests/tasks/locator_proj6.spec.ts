import {test, expect} from '@playwright/test'

test("Incorrect email id while logging in", async({page}) =>{
    await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage", {waitUntil:'networkidle'})
    await page.getByRole('textbox', {name: "Business Email"}).fill("admin@admin.com")
    await page.getByRole('checkbox', {name: "I agree to Wingify's Privacy Policy & Terms"}).check()
    await page.getByRole('button', {name: "Create a Free Trial Account"}).click()

    let error = page.locator(".C(--common-color-red) Fz(--common-font-size-12) Trsp(--common-Op) Trsdu(0.15s) Op(0) invalid-input+Op(1) invalid-reason")
    await expect(page.getByText("admin.com doesn't look like a business domain. Please use your business email.")).toBeVisible()

});
