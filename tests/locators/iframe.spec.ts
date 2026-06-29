import { test, expect, FrameLocator } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/')

    let vehicleframe: FrameLocator = await page.frameLocator("#frame-one")
    await vehicleframe.getByRole("textbox", {name: 'Vehicle name'}).fill("Toyota Fortuner")
    await vehicleframe.getByRole("textbox", {name: 'Owner name'}).fill("Nikhil")
    await vehicleframe.getByRole("textbox", {name: 'Registration number'}).fill("HR26CJ9945")
    await vehicleframe.locator('#RESULT_RadioButton-1').selectOption('SUV');
    await vehicleframe.getByPlaceholder("2024").fill("2026")
    await vehicleframe.getByRole("textbox", {name: 'Notes'}).fill("Family SUV with rugged performance")
    await vehicleframe.getByTestId("vehicle-submit").click()
     
    let output = await vehicleframe.locator("#vehicle-output").innerText();
    console.log(output);

    await page.waitForTimeout(5000);
})