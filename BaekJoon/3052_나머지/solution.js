import test from "node:test";
import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt").map((e) => parseInt(e));

// 1. 배열 내 요소에 동일한 고차 함수 적용 -> map()
// 2. 중복값 제거 필요

function solve_1(input) {
  const remain = input.map((a) => a % 42);
  const res = new Set(remain);
  return res.size;
}

test_funcs([input], [solve_1]);
