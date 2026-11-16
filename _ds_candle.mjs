import fs from "fs";
const js = fs.readFileSync(process.env.TEMP + "\\ds-page.js", "utf8");
const keys = ["Candle", "hollow", "chartStyle", "#16c784", "#0ecb81", "#26a69a", "upCandle", "bullish", "seriesColor", "lineColor", "areaStyle"];
for (const k of keys) {
  let i = 0, n = 0;
  while (n < 2) {
    const j = js.indexOf(k, i);
    if (j < 0) break;
    n++;
    if (n === 1) console.log("\n===", k, j, "===");
    else console.log("---", n, j);
    console.log(js.slice(Math.max(0, j - 70), j + 140).replace(/\s+/g, " "));
    i = j + k.length;
  }
  if (!n) console.log("NO", k);
}
