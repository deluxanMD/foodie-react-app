import { test, expect } from "playwright-test-coverage";

test("should work", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const loginPage = await page.getByTestId("Login.Page");
  expect(loginPage).toHaveText("Login");
});
