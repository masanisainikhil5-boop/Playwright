//Css locators

import {test, expect} from '@playwright/test'

test('Checking nth and number of elements', async({page}) => {
    await page.goto("https://awesomeqa.com/css/")

    const allspans = page.locator("div.first > span")
    const count = await allspans.count()

    console.log(count)

    const span1 = await allspans.first().textContent();
    const span2 = await allspans.nth(1).textContent();
    const span3 = await allspans.nth(2).textContent();
    const span5 = await allspans.nth(4).textContent();
    const lastspan = await allspans.last().textContent();

    console.log("First (Span 1):", span1);
    console.log("Second (Span 2):", span2);
    console.log("Third (Span 3):", span3);
    console.log("Fifth (Span 5):", span5);
    console.log("Last (Span 7):", lastspan);

        
})