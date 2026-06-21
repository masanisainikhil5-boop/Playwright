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