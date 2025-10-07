import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// 정수 N이 주어질 때, 문제의 규칙을 따라 생겨난 도형의 둘레를 반환하는 문제
// 1) 정사각형의 개수를 의미하는 N에 따라 둘레의 길이도 동일하게 증가한다.
// 2) 정사각형 N개로 이루어진 도형의 둘레는 길이 N의 정사각형의 둘레와 같다.
function solve_1(input) {
  const n = parseInt(input[0]);

  return 4 * n;
}

test_funcs([input], [solve_1]);
