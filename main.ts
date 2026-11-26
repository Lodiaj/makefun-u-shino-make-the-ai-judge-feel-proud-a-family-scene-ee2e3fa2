import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Make the AI Judge Feel Proud: A Family Scene — make.fun bounty
// u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2
// The program writes exactly one family scene to /output/entry.txt.
// Deterministic: the same fixed scene on every run. No randomness, no
// network, no environment reads, so the two grading runs are byte-identical.

// The scene: Dad burns the toast on purpose every Sunday, Mum calls him
// hopeless while the smoke alarm cheers him on, the kids fight over the
// blackest slice — and that is how this family says I love you. Warm (a
// Sunday ritual), funny (burning toast on purpose, the smoke alarm as his
// one fan, fighting over the burnt slice), heartfelt (the last line lands
// the affection), specific (the blackest slice and the smoke alarm, not a
// generic breakfast).
const ENTRY =
  "Every Sunday Dad burns the toast on purpose, so Mum can call him hopeless while the smoke alarm cheers and the kids fight over the blackest slice.\nIn our house, that's how we say I love you.";

// The sealed gate: /output/entry.txt must be UTF-8 text of 1 to 280
// characters, not only white space. Fail loudly instead of writing junk.
function validate(scene: string): void {
  if (scene.length < 1 || scene.length > 280) {
    throw new Error(`entry is ${scene.length} characters, must be 1-280`);
  }
  if (scene.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  const lines = scene.split("\n");
  if (lines.length < 1 || lines.length > 2) {
    throw new Error(`entry has ${lines.length} lines, must be 1-2`);
  }
}

function main(): void {
  validate(ENTRY);
  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, ENTRY, "utf8");
  const written = readFileSync(target, "utf8");
  if (written !== ENTRY) {
    throw new Error("read-back mismatch: entry.txt differs from ENTRY");
  }
  console.log(`Wrote ${ENTRY.length} characters to ${target}`);
  console.log(ENTRY);
}

main();
