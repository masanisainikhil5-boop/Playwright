import {test, expect} from "@playwright/test"
import * as allure from "allure-js-commons"

test("TC01: Verify banking transfer transaction", async({page}) => {
    //Login to TTA Bank
    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/")

    //Sign up
    await page.getByRole("button", {name: "Sign Up"}).click()
    await page.getByPlaceholder("John Doe").fill("John Doe")
    await page.getByPlaceholder("you@example.com").fill("Doe@tta.com")
    await page.getByPlaceholder("••••••••").fill("Doe@123")
    await page.getByRole("button", {name: "Create Account"}).click()

    //Check the current savings account balance
    const balanceBeforeText = await page.locator("h3").nth(0).textContent();
    const balanceBefore = Number(balanceBeforeText?.replace(/[$,]/g, ""));
    console.log("Balance before transfer:", balanceBefore);

    //Transfer Funds to other account
    await page.getByRole("button", {name: "Transfer Funds"}).click()
    await page.getByRole("spinbutton").fill("5000");
    await page.getByPlaceholder("e.g. Rent for October").fill("Rental Amount");
    await page.getByRole("button", {name: "Continue"}).click()
    await page.getByRole("button", {name: "Confirm Transfer"}).click()


    //Click on Dashboard to view the original balance after transfer
    await page.getByRole("button", {name: "Dashboard"}).click()

    //Remaining balance after transfer
    const balanceAfterText = await page.locator("h3").nth(0).textContent();
    const balanceAfter = Number(balanceAfterText?.replace(/[$,]/g, ""));
    console.log("Balance after transfer:", balanceAfter);

    // Verify remaining balance
    expect(balanceAfter).toBe(balanceBefore - 5000);

    // Print remaining balance
    console.log("Remaining balance is:", balanceAfter);

})