import { test, expect } from "@playwright/test";

test.describe("Authentication Pages Navigation & UI Elements", () => {
  test("should display critical elements on the Sign-In page", async ({
    page,
  }) => {
    // Navigate to the sign-in route
    await page.goto("/sign-in");

    // Verify Header
    const heading = page.getByRole("heading", {
      name: /sign in/i,
      exact: false,
    });
    await expect(heading).toBeVisible();

    // Verify critical form elements (email, password, and submit button)
    const emailInput = page.locator('input[type="email"], input[name="email"]');
    const passwordInput = page.locator(
      'input[type="password"], input[name="password"]',
    );
    const submitButton = page.getByRole("button", {
      name: /sign in|login|continue/i,
    });

    await expect(emailInput.first()).toBeVisible();
    await expect(passwordInput.first()).toBeVisible();
    await expect(submitButton.first()).toBeVisible();
  });

  test("should display critical elements on the Sign-Up page", async ({
    page,
  }) => {
    // Navigate to the sign-up route
    await page.goto("/sign-up");

    // Verify Header
    const heading = page.getByRole("heading", {
      name: /sign up|register/i,
      exact: false,
    });
    await expect(heading).toBeVisible();

    // Verify critical form elements (email, password, and submit button)
    const emailInput = page.locator('input[type="email"], input[name="email"]');
    const passwordInput = page.locator(
      'input[type="password"], input[name="password"]',
    );
    const submitButton = page.getByRole("button", {
      name: /sign up|register|continue/i,
    });

    await expect(emailInput.first()).toBeVisible();
    await expect(passwordInput.first()).toBeVisible();
    await expect(submitButton.first()).toBeVisible();
  });
});
