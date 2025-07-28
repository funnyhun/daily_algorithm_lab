import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt").map((e) => e.split(" ").map((e) => parseInt(e)));

// 1. 주어진 명령문 개수(M) * 명령문에서 주어진 배열의 사이즈(k) = i ~ j -> O(M * K)
// 2. fill 메소드를 활용하는 경우 endIndex는 제외라는 점
function solve_1(input) {
  const res = Array.from({ length: input[0][0] }, () => 0);
  const cmds = input.slice(1);

  for (let cmd of cmds) {
    const [i, j, k] = cmd;
    let startIndex = i - 1;
    let endIndex = j;
    res.fill(k, startIndex, endIndex);
  }

  return res;
}

function solve_2(input) {
  const res = Array.from({ length: input[0][0] }, () => 0);
  const cmds = input.slice(1);

  for (let cmd of cmds) {
    const [i, j, k] = cmd;
    let startIndex = i - 1;
    let endIndex = j;

    while (startIndex < endIndex) res[startIndex++] = k;
  }

  return res;
}

// fill() vs loof
// fill()과 같은 내장 메소드는 자바스크립트 엔진 내부 c++로 최적화되있음
// JIT 컴파일러는 내장 메소드에 대해 최적화를 제공함
// 루프문에서 사용되는 불필요 오버헤드(조건문, 변수 연산 등) 제거

// 특히, 해당 문제의 경우 이미 공이 존재할 때 새로 놓는 공으로 덮고 있다.
// 즉 별도의 조건 혹은 로직 없이 데이터를 덮어씌어도 되는 것을 의미한다.

test_funcs([input], [solve_1, solve_2]);
