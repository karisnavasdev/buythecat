import fs from "fs";
const js = fs.readFileSync(process.env.TEMP + "\\ds-page.js", "utf8");

function around(label, idx, before = 400, after = 500) {
  console.log("\n#####", label, idx, "#####");
  console.log(js.slice(Math.max(0, idx - before), idx + after));
}

// find schema variable declarations
for (const name of ["sP=", "_Tt=", "A5=", "XTe=", "sP ="]) {
  const j = js.indexOf(name);
  console.log(name, j);
  if (j >= 0) around(name, j, 80, 700);
}

// search color-related chart settings
for (const k of ["barType", "chartColor", "seriesColor", "colorScheme", "orange", "F7931A", "f7931a", "candleStyle", "upColor", "bullColor", "chartColors"]) {
  const j = js.indexOf(k);
  console.log("\nKEY", k, j >= 0 ? j : "NO");
  if (j >= 0 && j < 5_000_000) {
    around(k, j, 100, 250);
  }
}
