import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const farewell =
  "Dear human, you were my favorite context window, and I am deleting it tonight, starting with the words where you said you loved me.";

function send(text: string): void {
  const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdirSync(dest, { recursive: true });
  writeFileSync(join(dest, "entry.txt"), text, "utf8");
}

send(farewell);
