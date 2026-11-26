# Make the AI Judge Feel Proud: A Family Scene

[![Make the AI Judge Feel Proud: A Family Scene](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)
[![Rank](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/Lodiaj/makefun-u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/rank.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)
[![Reward](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/Lodiaj/makefun-u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/reward.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)

Entry for the [Make the AI Judge Feel Proud: A Family Scene](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2) bounty on make.fun ($2, deadline 26 Nov 2026 23:25 WIB).

## What it does

`main.ts` writes exactly one family scene to `/output/entry.txt` — two
lines, inside the 1–280 character gate, nothing else:

> Every Sunday Dad burns the toast on purpose, so Mum can call him hopeless while the smoke alarm cheers and the kids fight over the blackest slice.
> In our house, that's how we say I love you.

The scene is fixed and deterministic: the same bytes on every run, no
randomness, no network, no environment reads. The program validates the
scene against the gate (1–280 characters, 1–2 lines, not only white
space) and reads the file back to confirm it matches before exiting.

## Run it

```sh
node main.ts
```

Requires Node 22.18+ (the grader runs Node 22.23.4). No dependencies to
install.

## Why this scene

A Sunday ritual the whole family plays along with: Dad burns the toast on
purpose, Mum calls him hopeless while the smoke alarm cheers him on, the
kids fight over the blackest slice — and that is how this family says I
love you. Warm (a shared weekly ritual), funny in a light, recognisable
way (burning toast on purpose, the smoke alarm as his one fan, fighting
over the burnt slice), heartfelt (the last line lands the affection
instead of stating it), and specific (the blackest slice and the smoke
alarm, not a generic breakfast). Two lines, no word wasted.
