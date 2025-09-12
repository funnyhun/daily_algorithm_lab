import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// 주어진 규칙에 따라 점을 추가 했을 때, N번째 존재하는 점의 개수를 반환하는 문제
// 1) 문제는 X * X의 정사각형 형태를 유지한다.
// 2) 각 변의 점의 개수는 2^N + 1개로 늘어난다.
// 3) 결과적으로, 모든 점의 개수는 (한 변에 존재하는 점의 개수)^2
function solve_1(input) {
  const N = parseInt(input[0]);

  return Math.pow(Math.pow(2, N) + 1, 2);
}

test_funcs([input], [solve_1]);
