import fs from "fs";
const html = fs.readFileSync("index.html", "utf8");
const start = html.indexOf('id="chart"');
console.log(html.slice(start, start + 2800));
console.log("\n\n===== CA / PAIR =====");
for (const key of ["data-ca", "dexscreener", "solana", "copyBtn", "pump.fun", "CA"]) {
  let i = 0, n = 0;
  while (n < 4) {
    const j = html.toLowerCase().indexOf(key.toLowerCase(), i);
    if (j < 0) break;
    n++;
    console.log("\n---", key, j, "---");
    console.log(html.slice(Math.max(0, j - 80), j + 220));
    i = j + key.length;
  }
}
