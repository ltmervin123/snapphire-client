# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.ts >> Authentication Pages Navigation & UI Elements >> should display critical elements on the Sign-Up page
- Location: e2e\auth.spec.ts:22:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: /sign up|register/i })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: /sign up|register/i })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - link "SnappHire AI" [ref=e5] [cursor=pointer]:
        - /url: /
      - heading "Create an account" [level=2] [ref=e6]
      - paragraph [ref=e7]: Join us and elevate your hiring process
    - generic [ref=e8]:
      - generic [ref=e9]:
        - generic [ref=e10]:
          - generic [ref=e11]: Full Name
          - textbox "Full Name" [ref=e12]
        - generic [ref=e13]:
          - generic [ref=e14]: Email address
          - textbox "Email address" [ref=e15]
        - generic [ref=e16]:
          - generic [ref=e17]: Password
          - textbox "Password" [ref=e18]
      - button "Sign Up" [ref=e20]
    - paragraph [ref=e22]:
      - text: Already have an account?
      - link "Sign in" [ref=e23] [cursor=pointer]:
        - /url: /sign-in
  - button "Open Next.js Dev Tools" [ref=e29] [cursor=pointer]:
    - img [ref=e30]
  - alert [ref=e33]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Authentication Pages Navigation & UI Elements', () => {
  4  |   test('should display critical elements on the Sign-In page', async ({ page }) => {
  5  |     // Navigate to the sign-in route
  6  |     await page.goto('/sign-in');
  7  | 
  8  |     // Verify Header
  9  |     const heading = page.getByRole('heading', { name: /sign in/i, exact: false });
  10 |     await expect(heading).toBeVisible();
  11 |     
  12 |     // Verify critical form elements (email, password, and submit button)
  13 |     const emailInput = page.locator('input[type="email"], input[name="email"]');
  14 |     const passwordInput = page.locator('input[type="password"], input[name="password"]');
  15 |     const submitButton = page.getByRole('button', { name: /sign in|login|continue/i });
  16 | 
  17 |     await expect(emailInput.first()).toBeVisible();
  18 |     await expect(passwordInput.first()).toBeVisible();
  19 |     await expect(submitButton.first()).toBeVisible();
  20 |   });
  21 | 
  22 |   test('should display critical elements on the Sign-Up page', async ({ page }) => {
  23 |     // Navigate to the sign-up route
  24 |     await page.goto('/sign-up');
  25 | 
  26 |     // Verify Header
  27 |     const heading = page.getByRole('heading', { name: /sign up|register/i, exact: false });
> 28 |     await expect(heading).toBeVisible();
     |                           ^ Error: expect(locator).toBeVisible() failed
  29 |     
  30 |     // Verify critical form elements (email, password, and submit button)
  31 |     const emailInput = page.locator('input[type="email"], input[name="email"]');
  32 |     const passwordInput = page.locator('input[type="password"], input[name="password"]');
  33 |     const submitButton = page.getByRole('button', { name: /sign up|register|continue/i });
  34 | 
  35 |     await expect(emailInput.first()).toBeVisible();
  36 |     await expect(passwordInput.first()).toBeVisible();
  37 |     await expect(submitButton.first()).toBeVisible();
  38 |   });
  39 | });
  40 | 
```