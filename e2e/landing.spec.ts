import { test, expect } from "@playwright/test";

test.describe("Landing Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display hero section with title", async ({ page }) => {
    const title = page.locator("h1");
    await expect(title).toContainText("OAK");
    await expect(title).toContainText("4");
    await expect(title).toContainText("D");
  });

  test("should have working navigation links", async ({ page }) => {
    await page.click('a[href="#features"]');
    await expect(page.locator("#features")).toBeInViewport();

    await page.click('a[href="#specs"]');
    await expect(page.locator("#specs")).toBeInViewport();

    await page.click('a[href="#gallery"]');
    await expect(page.locator("#gallery")).toBeInViewport();
  });

  test("should display all feature cards", async ({ page }) => {
    await page.locator("#features").scrollIntoViewIfNeeded();
    const cards = page.locator("#features").locator('[class*="card"]').first();
    await expect(cards).toBeVisible();
  });

  test("should open and close gallery lightbox", async ({ page }) => {
    await page.locator("#gallery").scrollIntoViewIfNeeded();
    await page.click('[class*="viewer"]');

    const lightbox = page.locator(".yarl__root");
    await expect(lightbox).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(lightbox).not.toBeVisible();
  });

  test("should have accessible header with logo", async ({ page }) => {
    const logo = page.locator('header img[alt="Luxonis"]');
    await expect(logo).toBeVisible();
  });
});

test.describe("Mobile Menu", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("should open mobile menu on burger click", async ({ page }) => {
    await page.goto("/");

    const burger = page.locator("button[class*='burger']");
    await expect(burger).toBeVisible();

    await burger.click();

    const mobileMenu = page.locator('[class*="mobileMenu"]');
    await expect(mobileMenu).toBeVisible();

    await page.click('[class*="closeButton"]');
    await expect(mobileMenu).not.toBeVisible();
  });
});

test.describe("Accessibility", () => {
  test("should have proper heading hierarchy", async ({ page }) => {
    await page.goto("/");

    const h1Count = await page.locator("h1").count();
    expect(h1Count).toBe(1);

    const h2Count = await page.locator("h2").count();
    expect(h2Count).toBeGreaterThanOrEqual(4);
  });

  test("should have alt text on images", async ({ page }) => {
    await page.goto("/");

    const images = page.locator("img");
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt).toBeTruthy();
    }
  });
});
