// The 3AM Fridge Text — make.fun entry.
// A tiny deterministic program: it writes one late-night text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "3AM. The fridge light is on. The leftovers are judging me, and honestly, they're right.";

const OUT = "/output/entry.txt";

// One line, no trailing newline: the gate counts every character.
mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE, "utf8");
