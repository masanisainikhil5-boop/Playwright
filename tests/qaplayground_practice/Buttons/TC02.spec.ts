import {test, expect} from '@playwright/test'

test('TC02: Verify button displays the correct label text', async({page}) =>{
    await page.goto("https://qaplayground.com/practice/buttons")

    const buttonele = page.getByTestId("btn-goto-home")
    const buttontext = await buttonele.textContent()
    console.log("Button text:",buttontext)

    await expect(buttonele).toContainText("Go To Home")

})