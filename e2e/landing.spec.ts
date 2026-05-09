import { test, expect } from "@playwright/test";

test.describe("Landing Page E2E", () => {
  test("should render successfully and display the main heading", async ({
    page,
  }) => {
    // Navigate to the base URL (defaults to localhost:3000 if not configured in playright.config.ts)
    await page.goto("/");

    // Locate the main H1 heading on the landing page
    const mainHeading = page.getByRole("heading", { level: 1 });

    // Assert that the main heading is visible
    await expect(mainHeading).toBeVisible();

    // Assert the heading contains the expected text
    await expect(mainHeading).toContainText(/SnappHire AI|AI-Powered HR/i);
  });
});
