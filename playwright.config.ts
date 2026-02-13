import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: "http://localhost:3000/valentines2026/",
  },
  projects: [{ name: "chromium", use: { browserName: "chromium" } }],
  webServer: {
    command:
      "rm -rf /tmp/serve-valentines && mkdir -p /tmp/serve-valentines/valentines2026 && cp -R out/* /tmp/serve-valentines/valentines2026/ && npx serve /tmp/serve-valentines -l 3000 --no-clipboard",
    url: "http://localhost:3000/valentines2026",
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
