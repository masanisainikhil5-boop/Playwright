import {test, expect} from '@playwright/test'
import { ECDH } from 'node:crypto'

test('TC04: Verify right-click button triggers context menu action', async({page}) =>{
    await page.goto("https://qaplayground.com/practice/buttons")

    await page.getByRole("button",{name:"Right Click Me"}).click({button: 'right'});

    const message = page.locator("#btn-action-result")
    const textmessage = await message.textContent()
    console.log("Message:", textmessage)

    await expect(message).toContainText("You Right-clicked on button!")

})