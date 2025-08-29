import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// 최빈 문자열을 구하는 문제, 최빈 문자열이 복수 개인 경우 "?" 출력
// 1. 대소문자 구분 x
function solve_1(input) {
  // 알파벳으로 접근 하기 위해 Object 사용 but, 알파벳은 충분히 적으므로 배열로도 가능
  const count = {};

  for (let c of input) {
    // 순회하며 값 기록
    const upper = c.toUpperCase();
    count[upper] = (count[upper] || 0) + 1;
  }

  // value를 기준으로 정렬
  const sorted = Object.entries(count).sort(([, a], [, b]) => b - a);

  if (sorted.length === 1) return sorted[0][0];
  return sorted[0][1] === sorted[1][1] ? "?" : sorted[0][0];
}

test_funcs([...input], [solve_1]);
