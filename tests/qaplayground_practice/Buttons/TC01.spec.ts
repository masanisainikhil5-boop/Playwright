import {test, expect} from '@playwright/test'

test('Verify button is clickable', async({page}) =>{
    await page.goto("https://qaplayground.com/practice/buttons")

    await page.getByTestId("btn-goto-home").click()
    const text = page.locator('h1')
    const textopvalue = await text.innerText()
    console.log("InnerText:", textopvalue)
    await expect(text).toContainText('Master Automation Testing With');

})