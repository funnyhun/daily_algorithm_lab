import * as fs from "fs";

// CommonJs in BOJ
export function boj_input(dir) {
  return require("fs").readFileSync(dir).toString().trim().split("\n");
}

// ESM
export function local_input(dir) {
  return fs.readFileSync(dir).toString().trim().split("\n");
}
