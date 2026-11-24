import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// ToastWatch: the worst app idea ever pitched, in one sentence.
const PITCH =
  "ToastWatch is a premium app that live-streams your toast browning in glorious 4K straight to your phone, for busy professionals too impatient to stand beside their own toaster, so you never miss a single golden-brown moment.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), PITCH, "utf8");
