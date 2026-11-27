import { mkdirSync, writeFileSync } from "node:fs";

const roast = "My agent needed a fresh pair of eyes, so it spawned itself wearing glasses.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");