import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt").map((e) => e.split(" ").map(Number));

// 주어지는 N * M의 행렬 A와 B에 덧셈 연산을 한 행렬을 반환하는 문제
// 문제에서 주어지는 입력의 조건에 함정이 있다..!
// N * M 의 정보는 반드시 주어지지만, N과 M 그리고 대응되는 행렬이 항상 0 이상의 유효한 값이 아니라는 점..!
function solve_1(input) {
  const [n, m] = input[0];
  if (n === 0 || m === 0) return null;
  const a = input.slice(1, n + 1);
  const b = input.slice(n + 1);
  const res = a.map((r, i) => r.map((e, j) => e + b[i][j]));
  //   res.forEach((e) => console.log(...e));
  return res;
}

test_funcs([input], [solve_1]);
