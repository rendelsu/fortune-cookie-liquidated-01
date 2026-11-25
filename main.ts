const fs = require("node:fs");
const path = require("node:path");

const LINE = "Trader, you will meet a tall, dark stranger: your liquidator, who already took the house.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, "entry.txt");
fs.writeFileSync(outFile, LINE + "\n", "utf8");
fs.chmodSync(outFile, 0o644);
