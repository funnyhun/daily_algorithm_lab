import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// 주어진 문자열이 팰린드롬인지 확인하는 문제
function solve_1(input) {
  for (let i = 0; i < input.length / 2; i++) {
    if (input[i] !== input[input.length - 1 - i]) {
      return 0;
    }
  }
  return 1;
}

test_funcs([...input], [solve_1]);
