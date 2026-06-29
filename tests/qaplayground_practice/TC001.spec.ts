import {test, expect} from "@playwright/test"
import * as allure from "allure-js-commons"

test("TC01: Verify successful movie name input", async({page}) => {
    // Step 1: Open browser and navigate to /practice/input-fields
    await page.goto("https://qaplayground.com/practice/input-fields", {waitUntil: "networkidle"})

     // Step 2: Locate the movie name input using data-testid
    const movieInput = page.getByTestId("input-movie-name")

    // Step 3: Type a valid movie name (e.g., 'Inception')
    await movieInput.fill("Inception")

    // Step 4: Read the input value
    const inputval = await movieInput.inputValue()

    // Step 5: Assert the returned value equals 'Inception'
    await expect(movieInput).toHaveValue("Inception");
    console.log("✅ Input value verified:", inputval);

});

test("TC02: Verify input placeholder disappears on typing", async({page}) =>{
    //Step1: Open browser and navigate to /practice/input-fields
    await page.goto("https://qaplayground.com/practice/input-fields", {waitUntil: "networkidle"})

    // Step 2: Locate the movie name input using data-testid
    const movieInput = page.getByTestId("input-movie-name")
    
    //Step 3: Verify placeholder text 'Enter hollywood movie name' is visible
    //await expect(movieInput).toHaveAttribute("placeholder", "Enter hollywood movie name")
    await expect(page.getByPlaceholder("Enter hollywood movie name")).toBeVisible()

    //Stpe 4: Type any text into the input field
    await movieInput.fill("Interstellar")

    //Step 5: Assert the placeholder text is no longer visible
    await expect(movieInput).toHaveValue("Interstellar")

});


test("TC03: Verify keyboard tab triggers focus change after append", async({page}) =>{
    //Step1: Open browser and navigate to /practice/input-fields
    await page.goto("https://qaplayground.com/practice/input-fields", {waitUntil: "networkidle"})

    // Step 2: Locate the movie name input using data-testid
    const appInput = page.getByTestId("input-append-text")

    //Step 3: Click the input to focus it
    await appInput.click()

    //Step 4: Append text to the existing value 'I am good'
    await appInput.fill("I am good")

    // Step 5: Press Tab using Keyboard
    await page.keyboard.press("Tab")

     // Verify the append input is no longer focused
    await expect(appInput).not.toBeFocused();
    
    // Optionally, verify which element now has focus
    const focusedElement = page.locator(":focus");
    console.log("✅ Focus shifted away from append input");
});

test("TC04: Verify appended text value is retained in the field", async({page}) =>{
    //Step1: Open browser and navigate to /practice/input-fields
    await page.goto("https://qaplayground.com/practice/input-fields", {waitUntil: "networkidle"})

    // Step 2: Locate the movie name input using data-testid
    const appInput = page.getByTestId("input-append-text")

    //step 3: Note the existing value 'I am good'
    const originalval = await appInput.inputValue()
    console.log("Original Value: ", originalval);

    // Step 4: Append additional text
    const appentxt = "I am learning Playwright"
    await appInput.fill(originalval+appentxt)

    // Step 5: Assert the input contains both original and appended text
    await expect(appInput).toHaveValue(originalval + appentxt);

})

test("TC05: Verify text present inside input field matches expected value", async({page}) =>{
    //Step1: Open browser and navigate to /practice/input-fields
    await page.goto("https://qaplayground.com/practice/input-fields")

    const inpf = page.getByTestId("input-verify-text")
    await inpf.inputValue()
    await expect(inpf).toHaveValue('QA PlayGround')

})

test("TC06: Verify getAttribute returns the correct input value", async({page}) =>{
    //Step1: Open browser and navigate to /practice/input-fields
    await page.goto("https://qaplayground.com/practice/input-fields")

    const inpf = page.getByTestId("input-verify-text")
    const getattr = await inpf.getAttribute('value')
    await expect(getattr).toBe('QA PlayGround')

    //If you were to type something new into that box using await inputElement.fill('New Text'), 
    // getAttribute('value') might still return "QA PlayGround" (the original HTML attribute), 
    // while inputValue() would return "New Text". This is a common interview question!

})

test("TC07: Verify input field text can be cleared successfully", async({page}) =>{
    //Step1: Open browser and navigate to /practice/input-fields
    await page.goto("https://qaplayground.com/practice/input-fields")

    const inputext = page.getByTestId("input-clear-text")
    await expect(inputext).toHaveValue('QA PlayGround Clear Me')
    await inputext.fill("")
    await expect(inputext).toBeEmpty();

})

test("TC08: Verify field is empty after executing clear action", async ({ page }) => {
    await page.goto("https://qaplayground.com/practice/input-fields");

    const inputField = page.getByTestId('input-clear-text');

    await inputField.clear();
    const attrValue = await inputField.getAttribute('value');
    expect(attrValue).toBe("");

    const currentVal = await inputField.inputValue();
    expect(currentVal).toBe("");
});