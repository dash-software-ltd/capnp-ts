import { readFileSync } from "fs";
import * as path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export function readFileBuffer(filePath: string): ArrayBuffer {
  const b = readFileSync(path.join(__dirname, "../../", filePath));

  return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
}
