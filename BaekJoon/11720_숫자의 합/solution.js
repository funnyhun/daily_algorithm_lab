import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt").filter((e, i) => i % 2 !== 0);

// 1 <= N <= 100 개의 숫자가 주어질 때, 합을 구하는 문제
// 여기서 '숫자'라는 표현은 0 ~ 9를 의미한다.
function solve_1(input) {
  let res = 0;

  // 문자열은 이터러블 객체로, 이터레이터를 활용한 순회가 가능하다.
  for (let c of input) {
    res += parseInt(c);
  }

  return res;
}

// JS에서 for ... of, for ... in 문법과 이터러블 객체의 관계

test_funcs([...input], [solve_1]);
