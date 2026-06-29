import {test, expect} from '@playwright/test'
import { ECDH } from 'node:crypto'

test('TC03: Verify double-click button triggers double-click action', async({page}) =>{
    await page.goto("https://qaplayground.com/practice/buttons")

    await page.getByTestId("btn-double-click").dblclick()

    const message = page.locator("#btn-action-result")
    const textmessage = await message.textContent()
    console.log("Message:", textmessage)

    await expect(message).toContainText("You Double-clicked on button!")

})