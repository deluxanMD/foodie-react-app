import { test, expect } from "@playwright/experimental-ct-react";
import Login from "../../src/pages/login/login.component";

test("login page", async ({ mount }) => {
  const loginPage = await mount(<Login />);
  await expect(loginPage).toHaveText("Login");
});
