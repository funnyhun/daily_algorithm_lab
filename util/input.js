import * as fs from "fs";

// CommonJs in BOJ
export function boj_input() {
  return require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
}

// ESM
export function local_input(dir) {
  return fs.readFileSync(dir).toString().trim().split("\n");
}
