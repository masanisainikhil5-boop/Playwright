//Mutiple Contexts - Two users at the same time
import { chromium } from "playwright";
async function multiusertest(){
    let browser = await chromium.launch({headless:false})

    //Admin
    let admincontext = await browser.newContext()
    let adminpage = await admincontext.newPage()

    await adminpage.goto("https://www.facebook.com")
    console.log("Admin: On login page");

    //Viewer
    let viewercontext = await browser.newContext()
    let viewerpage = await viewercontext.newPage()

    await viewerpage.goto("https://www.telegram.com")
    console.log("Viewer: On login Pgae");

    await admincontext.close()
    await viewerpage.close()
    await browser.close()
    
    
}
multiusertest()