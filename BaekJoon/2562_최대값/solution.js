import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/log.js";

const input = local_input("./input.txt").map((e) => parseInt(e));

// 주어진 input을 순회하면서 최대값을 찾는다.
// 문제에서 요구하는 출력을 위해서 idx를 캐싱해야 한다.
function solve_1(input) {
  let maxIdx = 0;

  for (let i = 1; i < input.length; i++) {
    const std = input[maxIdx];
    const target = input[i];
    if (std < target) maxIdx = i;
  }

  return `${input[maxIdx]}\n${maxIdx + 1}`;
}

// O(2n) -> O(N)
function solve_2(input) {
  const max = Math.max(...input);
  return `${max}\n${input.indexOf(max) + 1}`;
}

/* 
Big-O 기준, 두 구현 모두 O(n)으로 동일하며 해당 문제의 경우 입력의 범위가 굉장히 제한적이다.
입력값의 범위가 제한되지 않은 경우, solve_1, 2는 실제 실행 시간에서 큰 차이를 갖는다.
*/

test_funcs([input], [solve_1, solve_2]);
