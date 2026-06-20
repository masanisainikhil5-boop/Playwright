//Referer concept - HTTP referer tells the server which page the user came from.
import {test, expect} from '@playwright/test'

test("Navigate with custom referer", async({page}) => {
    await page.goto("https://www.flipkart.com", {referer: "https://www.google.com/"})

    console.log("Page loaded with Google as referer");
    console.log("URL: ", page.url());

})

//Referral for all requests in a context
test("Set referer for entire context", async ({browser}) => {
    let context = await browser.newContext({
        extraHTTPHeaders: {
            "Referer": "https://thetestingacademy.com"
        }
    })

    let page = await context.newPage()
    await page.goto("https://app.vwo.com/#login")
    console.log("Page1 - partner referer included");
    await page.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login")
    console.log("Page2 - partner referer included");
    
    
});