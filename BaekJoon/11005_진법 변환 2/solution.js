import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// 주어진 10진수 N을 B진법으로 변환해서 반환하는 문제
// js 메소드 활용
function solve_1(input) {
  const [N, B] = input[0].split(" ").map(Number);

  return N.toString(B);
}

// 기본적인 진수 변환 활용
// 1) B진수로 변환한 각 자리수는 표현할 수 있는 범위를 의미한다.
// 2) 자리수가 올라간다는 건 표현 범위를 넘어섰다는 뜻 'Z' -> 35, '10' -> 36
// 3) 진수로 나눠서 남은 나머지 -> 해당 자리에서 표현 가능한 수
// 4) 진수로 나눈 수 -> 해당 자리수에서 표현하고 남은 수
// 5) 변환 대상이 0이 될 때까지...
function solve_2(input) {
  let [N, B] = input[0].split(" ").map(Number);
  const system = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(0, B);
  const res = [];

  if (N === 0) return "0";

  while (N > 0) {
    res.push(system[N % B]);
    N = Math.floor(N / B);
  }

  return res.reverse().join("");
}

test_funcs([input], [solve_1, solve_2]);
