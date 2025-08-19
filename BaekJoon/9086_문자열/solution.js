import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// 주어진 복수 개의 문자열의 첫 글자와 마지막 글자를 출력하는 문제
function solve_1(input) {
  // 참조 없이 순회로 해결하기 위해 첫번째 인자 제거
  let words = input.slice(1);
  let res = [];

  for (let word of words) {
    const [s, e] = [word[0], word[word.length - 1]];
    res.push(`${s}${e}`);
  }

  return res.join("\n");
}

// [중요!!!] 결과를 문자열이 아닌 배열로 다루는 것에 대해
// js에서 문자열은 불변하다.
// 즉, 어떠한 값을 누적시키는 과정에서 문자열을 사용하게 된다면 이는 새로운 문자열을 N번 생성하는 것과 같다.
// + 누적 과정에서 구분자가 필요한 경우, join() 메소드를 활용하면 마지막 인자에 대한 구분자를 자연스럽게 처리할 수 있다.

test_funcs([input], [solve_1]);
