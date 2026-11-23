// One Word From Grandma — make.fun bounty
// u-0xkianno-one-word-from-grandma-f04bed16
//
// Writes exactly one word — the word a grandma would text about AI —
// to <output dir>/entry.txt, with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "robit";

const outputDir = process.env.OUTPUT_DIR ?? "/output";

// Length is counted in Unicode code points, so a word with characters
// outside the BMP is still measured the way the gate measures it.
const codePointLength = [...WORD].length;
if (codePointLength < 1 || codePointLength > 30) {
  throw new Error("word must be 1-30 characters (code points)");
}
// Exactly one word: reject any space, tab, carriage return or line break,
// so the entry can never become two words or carry a trailing newline.
if (/[\s]/.test(WORD)) {
  throw new Error("word must be a single word (no spaces or line breaks)");
}
if (WORD.trim() !== WORD) {
  throw new Error("word must not have leading or trailing whitespace");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, WORD, "utf8");
