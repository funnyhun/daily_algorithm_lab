import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt")[0];

// 정수 문자열을 뒤집어 더 큰 수를 반환하는 문제
function solve_1(input) {
  let [a, b] = input.split(" ").map((e) => {
    return parseInt(e.split("").reverse().join(""));
  });
  return Math.max(a, b);
}

test_funcs([input], [solve_1]);
