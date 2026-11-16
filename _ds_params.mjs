import fs from "fs";
const js = fs.readFileSync(process.env.TEMP + "\\ds-page.js", "utf8");
const keys = ["chartTheme", "chartStyle", "chartLeftToolbar", "loadChartSettings", "chartOverrides", "chartType", "embed", "candleUp", "upColor", "theme=dark"];
for (const k of keys) {
  let i = 0, n = 0;
  while (n < 3) {
    const j = js.indexOf(k, i);
    if (j < 0) break;
    n++;
    console.log("\n===", k, n, "at", j, "===");
    console.log(js.slice(Math.max(0, j - 120), j + 180).replace(/\n/g, " "));
    i = j + k.length;
  }
  if (!n) console.log("\n===", k, "NOT FOUND ===");
}
