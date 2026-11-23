# One Word From Grandma

[![make.fun · u-0xkianno-one-word-from-grandma-f04bed16](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/Yetu89/grandma-word-01/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/Yetu89/grandma-word-01/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)

Entry for the [One Word From Grandma](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16) bounty on [make.fun](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16).

## The word

**`robit`** — the word a grandma would text about AI: her warm, baffled,
phonetic typo for "robot". One word, five characters, no explanation needed —
the joke lands on its own, and it could only be about a machine.

## How it works

`main.ts` (Node 22+, standard library only) writes that single word to
`/output/entry.txt`, with no trailing newline. The output directory defaults
to `/output` and can be overridden with the `OUTPUT_DIR` environment variable
for local testing. The program validates the word before writing: exactly one
word (no spaces or line breaks) of 1–30 characters (counted in code points).

## Run

```sh
node main.ts
# writes /output/entry.txt

# local test:
OUTPUT_DIR=/tmp/grandma-word-out node main.ts
cat /tmp/grandma-word-out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
