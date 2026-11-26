import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// 静默写盘：评委只看 entry.txt，任何提示文字都会污染门控。
// 终稿：互联网是一条吸完宿主再转发自己的寄生虫；准确、意外、带一点刺痛感。
const ENTRY = "Parasite";

const configured = process.env.MAKEFUN_OUTPUT_DIR?.trim();
const outputDir = configured ? resolve(configured) : "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, "entry.txt"), ENTRY, "utf8");
