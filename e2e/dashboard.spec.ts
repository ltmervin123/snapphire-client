import { test, expect } from "@playwright/test";

test.describe("Dashboard Shell and Navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the main dashboard page
    await page.goto("/dashboard");
  });

  test("should display all main sidebar navigation links", async ({ page }) => {
    // We expect the sidebar to be visible and contain the main navigation links
    // Assuming the sidebar acts as a navigation region
    const sidebar = page.getByRole("navigation");

    // Verify the specific links exist within the sidebar navigation or document
    await expect(page.getByRole("link", { name: /analytics/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /candidates/i })).toBeVisible();
  });

  test("should verify Analytics page content is visible", async ({ page }) => {
    // Navigate to Analytics (which is typically the base /dashboard route)
    const analyticsLink = page.getByRole("link", { name: /analytics/i });
    await analyticsLink.click();

    // Verify the URL remains /dashboard or matches the analytics route
    await expect(page).toHaveURL(/.*\/dashboard/);

    // Verify the Analytics header or a main content region is visible
    await expect(
      page.getByRole("heading", { name: /analytics/i }),
    ).toBeVisible();
  });

  test("should navigate to Candidates page and display corresponding content", async ({
    page,
  }) => {
    // Click the Candidates link in the sidebar
    const candidatesLink = page.getByRole("link", { name: /candidates/i });
    await candidatesLink.click();

    // Verify the URL updates to the proper candidates route
    await expect(page).toHaveURL(/.*\/dashboard\/candidates/);

    // Verify the Candidates header is visible
    await expect(
      page.getByRole("heading", { level: 1, name: /candidates/i }),
    ).toBeVisible();
  });
});
