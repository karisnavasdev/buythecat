import fs from "fs";
const html = fs.readFileSync("index.html", "utf8");
const i = html.indexOf("style.css");
console.log(html.slice(i - 80, i + 80));
const j = html.indexOf("chart-embed reveal");
console.log("\nEMBED:\n", html.slice(j - 20, j + 220));
