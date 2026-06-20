import { log } from 'node:console';
import { Context } from 'node:vm';
import {chromium, Browser, BrowserContext, Page} from 'playwright';

async function run(){
    //Level 1 - Launch Browser
    let browser:Browser = await chromium.launch({headless:false})
    console.log("Browser launched", browser);
    
    //Level 2 - Created context
    let context:BrowserContext = await browser.newContext()
    console.log("Context created", context);

    //Levele 3 - Create Page
    let page:Page = await context.newPage()
    console.log("Page created",page);

    await page.goto("https://www.instagram.com")
    console.log("Title: ", await page.title());
    
    
    //Cleanup
    await page.close()
    await context.close()
    await browser.close()
     
}
run()