import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt").map((s) => s.split(" "));

// 문자열 S에서 i번째 문자열을 출력하는 단순한 문제
// 1. i는 인덱스가 아닌 몇 번째인지를 의미한다.
// 2. js에서 문자열은 불변하다. -> 해당 문제에서는 문자열 변형이 아니므로 크게 문제는 없음
// 3. 자바스크립트 함수는 원시형 데이터의 경우, 복사값이 전달된다.
function solve_1(input) {
  const s = input[0][0];
  const i = parseInt(input[1]);
  return s[i - 1];
}

test_funcs([input], [solve_1]);
