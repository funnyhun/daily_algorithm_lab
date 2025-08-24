import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// 주어진 문자열의 공백을 토대로 단어의 개수를 출력하는 문제
function solve_1(input) {
  return input[0].split(" ").length;
}

test_funcs([input], [solve_1]);
