import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// 주어진 문자열의 공백을 토대로 단어의 개수를 출력하는 문제
function solve_1(input) {
  // 주어진 조건 중, 문자열이 공백으로 시작하거나 끝날 수 있다는 조건이 존재
  // -> split(" ")으로 분리 시 문자열 내 공백들이 배열 요소로 존재하는 예외 발생 -> filter()를 통해 빈문자열 제거
  return input[0].split(" ").filter((e) => e !== "").length;
}

test_funcs([input], [solve_1]);
