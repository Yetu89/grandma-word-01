// One Word From Grandma — make.fun bounty
// u-0xkianno-one-word-from-grandma-f04bed16
//
// Writes exactly one word — the word a grandma would text about AI —
// to <output dir>/entry.txt, with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "robit";

const outputDir = process.env.OUTPUT_DIR ?? "/output";

if (WORD.length === 0 || WORD.length > 30) {
  throw new Error("word must be 1-30 characters");
}
if (WORD.includes(" ")) {
  throw new Error("word must be a single word (no spaces)");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, WORD, "utf8");
