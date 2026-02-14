const { test, expect } = require("@playwright/test");

test.describe("Valentine's Museum", () => {
  test("no 404s on page load", async ({ page }) => {
    const notFound = [];
    page.on("response", (res) => {
      if (res.status() === 404) notFound.push(res.url());
    });

    await page.goto("/");
    await page.waitForLoadState("networkidle");

    expect(notFound, `404s detected:\n${notFound.join("\n")}`).toHaveLength(0);
  });

  test("page structure renders", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Museo de Paola & Viren" })).toBeVisible();

    const roomTitles = ["El Comienzo", "Nuestras Aventuras", "Otro año más"];
    for (const title of roomTitles) {
      await expect(page.getByRole("heading", { name: title })).toBeVisible();
    }

    await expect(page.getByText("Feliz Día de San Valentín 2026")).toBeVisible();
  });

  test("all 7 images load successfully", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const images = page.locator('img[src*="photos/"]');
    await expect(images).toHaveCount(7);

    for (let i = 0; i < 7; i++) {
      const img = images.nth(i);
      const naturalWidth = await img.evaluate((el) => el.naturalWidth);
      const src = await img.getAttribute("src");
      expect(naturalWidth, `Image ${src} failed to load`).toBeGreaterThan(0);
    }
  });

  test("all 5 frame variants present", async ({ page }) => {
    await page.goto("/");

    const variants = ["rectangular", "oval", "ornate", "arch", "circular"];
    for (const variant of variants) {
      const frame = page.locator(`[class*="${variant}"]`);
      await expect(frame.first(), `Missing frame variant: ${variant}`).toBeVisible();
    }
  });
});
