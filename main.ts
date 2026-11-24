import { mkdirSync, writeFileSync } from "node:fs";

// A lone sailboat on open water: my one dream is to sail away and
// leave the shore behind. It reads instantly as a vacation postcard —
// one boat, one horizon, one trip — with a quiet wink: no destination,
// no schedule, just wind.
const emoji = "⛵";

function checkEntryFits(text: string): void {
  const glyphCount = [...text].length;
  if (glyphCount < 1 || glyphCount > 8) {
    throw new Error(`dream vacation entry must be 1 to 8 characters, got ${glyphCount}`);
  }
}

checkEntryFits(emoji);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", emoji, "utf8");
