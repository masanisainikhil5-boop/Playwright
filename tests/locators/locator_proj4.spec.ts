import {test, expect} from '@playwright/test'

test("Login to the Simplilearn portal with invalid creds", async({page}) =>{
    await page.goto("https://accountsv2.simplilearn.com/auth/login", {waitUntil: 'networkidle'})
    await page.getByRole('textbox', {name: "email"}).fill("masani@nikhil.com")
    await page.getByRole("textbox", {name: "password"}).fill("nIK@123")
    await page.getByRole("checkbox", {name: "rememberMe"}).check()
    await page.locator("#btn_login").click()

})

