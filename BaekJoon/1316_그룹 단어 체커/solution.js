import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt").slice(1);

// 주어지는 N 개의 단어 중 그룹 단어의 개수를 출력하는 문제
// 1) 그룹 단어 : 문자열을 구성하는 문자가 재등장하지 않는 문자열
// 2) 유효한 키-값의 쌍이 아닌 고유 요소의 존재 여부를 확인하는 경우 -> Set
function solve_1(input) {
  let count = 0;

  for (let word of input) {
    const tmp = new Set();
    let flag = true;

    for (let i = 0; i < word.length; i++) {
      const c = word[i];

      if (c !== word[i - 1]) {
        if (tmp.has(c)) {
          flag = false;
          break;
        }
      }

      tmp.add(c);
    }

    if (flag) count++;
  }

  return count;
}

test_funcs([input], [solve_1]);
