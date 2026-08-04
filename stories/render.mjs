import { chromium } from "playwright-core";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(ROOT, "output");

const stories = [
  { file: "story-one.html", out: "lumen-story-one.png" },
  { file: "story-01-hero.html", out: "lumen-story-01-hero.png" },
  { file: "story-02-services.html", out: "lumen-story-02-services.png" },
  { file: "story-03-cta.html", out: "lumen-story-03-cta.png" },
];

const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH || "/usr/local/bin/google-chrome",
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--font-render-hinting=none"],
});

const context = await browser.newContext({
  viewport: { width: 1080, height: 1920 },
  deviceScaleFactor: 1,
});

fs.mkdirSync(OUT, { recursive: true });

for (const story of stories) {
  const page = await context.newPage();
  const fileUrl = "file://" + path.join(ROOT, story.file);
  await page.goto(fileUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  const outPath = path.join(OUT, story.out);
  await page.screenshot({
    path: outPath,
    type: "png",
    clip: { x: 0, y: 0, width: 1080, height: 1920 },
  });
  console.log("Wrote", outPath);
  await page.close();
}

await browser.close();
