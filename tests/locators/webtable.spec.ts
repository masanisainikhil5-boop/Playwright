import {test, expect} from '@playwright/test'

test("Verify the Web table", async({page})=>{
    await page.goto("https://awesomeqa.com/webtable.html")

    const firstpart = '//table[@id="customers"]/tbody/tr['
    const secondpart = "]/td["
    const thirdpart =  ']'

    const rows = await page.locator('//table[@id="customers"]/tbody/tr').count()
    const col = await page.locator('//table[@id="customers"]/tbody/tr[2]/td').count()

    for(let i=2; i<= rows; i++){
        for(let j=1; j<=col; j++){
            const dynamicPath = `${firstpart}${i}${secondpart}${j}${thirdpart}`;
            console.log(dynamicPath);

            const data = await page.locator(dynamicPath).innerText();
            console.log(data);

            // Playwright Native Locators is very much recommended. 

        const row1 = page.locator('#customers tbody tr', { hasText: 'Helen Bennett' });
        const country1 = await row1.locator('td').nth(2).innerText();
        console.log(`Helen Bennett is In - ${country1}`);
            
        }
    }
})