import {test, expect} from '@playwright/test'

test("locators are lazy, strict and auto-wait", async({page}) =>{
    await page.goto("https://www.flipkart.com/account/login?ret=/")

    let emailph = page.locator(".c3Bd2c.yXUQVt")
    await emailph.fill("9035703770")

    let button = page.locator(".dSM5Ub.Kv3ekh.KcXDCU")
    await button.click()

    console.log("All actions completed");
    
})