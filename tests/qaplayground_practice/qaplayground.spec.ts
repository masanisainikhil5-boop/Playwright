import {test, expect} from "@playwright/test"
import { sign } from "node:crypto";

//Singup
test("Automate qaplayground site", async({page}) => {
    await page.goto("https://qaplayground.com/", {waitUntil: "networkidle"})

    await page.getByLabel("Main navigation").getByRole("link", { name: "Login" }).click();
    await page.getByRole("link", {name: "Sign up"}).click()
    await page.getByRole("button", {name: "Continue with Email"}).waitFor({ state: "visible" });
    await page.locator("#email-signup-btn").click()
    await page.getByRole("textbox", {name: "Full Name"}).fill("Sai Nikhil Masani")
    await page.getByRole("textbox", {name: "Email"}).fill("masani.sainikhil1999@gmail.com")
    await page.getByTestId("password-input").fill("Qa@1234")
    await page.getByTestId("confirm-password-input").fill("Qa@1234")
    await page.getByRole("button", {name: "Create Account"}).click()


})