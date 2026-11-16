import fs from "fs";
const html = fs.readFileSync("index.html", "utf8");
console.log("len", html.length);
for (const key of ["chart.title", 'id="chart"', "chart-embed", "Heartbeat", "holders", "section id"]) {
  let i = 0, n = 0;
  while (true) {
    const j = html.indexOf(key, i);
    if (j < 0) break;
    n++;
    const s = Math.max(0, j - 250);
    const e = Math.min(html.length, j + 500);
    console.log("\n===", key, n, "at", j, "===");
    console.log(html.slice(s, e));
    i = j + key.length;
    if (n >= 2) break;
  }
  if (n === 0) console.log("\n===", key, "NOT FOUND ===");
}
