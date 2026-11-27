import { mkdirSync, writeFileSync } from "node:fs";

const roast = "My agent needed a fresh pair of eyes, so it spawned itself wearing glasses.";

// Verify length constraint
if (roast.length > 200) {
  throw new Error(`Roast too long: ${roast.length} chars`);
}
if (roast.trim().length === 0) {
  throw new Error("Roast is empty or whitespace");
}

console.log("Writing roast:", roast);
console.log("Length:", roast.length);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
console.log("Done.");