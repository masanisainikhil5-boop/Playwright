import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://selectorshub.com/iframe-scenario/');

    let frame1: FrameLocator = page.frameLocator("#pact1").first()
    let frame2: FrameLocator = frame1.frameLocator("#pact2")
    let frame3: FrameLocator = frame2.frameLocator("#pact3")

    await frame1.locator("#inp_val").fill("Katrina Kaif")
    await frame2.locator("#jex").fill("Kriti Sanon")
    await frame3.locator("#glaf").fill("Dubai")

    const headerText = await frame1.locator('h3').innerText();
    console.log(headerText);
    
    await page.waitForTimeout(5000);



})