import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt")[0];

// 1 ... N ... 1 로 증감하는 *로 구성된 피라미드를 출력하는 문제
// 1. 좌우 공백 출력 + 별의 수가 늘어나는 패턴
// 2. js의 string 연산은 immutable이다. -> 메소드 활용
function solve_1(input) {
  const n = parseInt(input);
  // 1 ... n/2 층 출력
  for (let i = 1; i <= n; i++) {
    console.log(`${" ".repeat(n - i)}${"*".repeat(i * 2 - 1)}`);
  }
  // n/2 ... n 층 출력
  for (let i = n - 1; i > 0; i--) {
    console.log(`${" ".repeat(n - i)}${"*".repeat(i * 2 - 1)}`);
  }
}

test_funcs([input], [solve_1]);
