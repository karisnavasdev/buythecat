import fs from "fs";
const js = fs.readFileSync(process.env.TEMP + "\\ds-page.js", "utf8");
const keys = [
  "mainSeriesProperties",
  "candleStyle",
  "upColor",
  "growingColor",
  "colorup",
  "chart.bg",
  "backgroundColor",
  "overrides",
  "custom_css",
  "widgetbar",
  "#26a69a",
  "#089981",
  "#00c853",
  "38,186,118",
  "growing",
  "falling",
];
for (const k of keys) {
  let i = 0, n = 0;
  while (n < 2) {
    const j = js.indexOf(k, i);
    if (j < 0) break;
    n++;
    console.log("\n===", k, n, j, "===");
    console.log(js.slice(Math.max(0, j - 90), j + 160).replace(/\s+/g, " "));
    i = j + k.length;
  }
  if (!n) console.log("NO", k);
}
