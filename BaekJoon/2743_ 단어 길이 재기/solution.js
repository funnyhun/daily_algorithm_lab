import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

// 해당 문제는 한개의 문자열만이 입력으로 전달된다.
// 기존의 input 함수는 복수 개의 인풋을 상정하고 만들어짐
const input = local_input("./input.txt")[0];

// 주어진 단어의 길이를 재는 문제

// js의 문자열은 객체로 length라는 property를 갖는다.
function solve_1(input) {
  return input.length;
}

// 순회하며 세기
function solve_2(input) {
  let length = 0;
  for (let c of input) length += 1;
  return length;
}

// reduce() 활용
function solve_3(input) {
  return input.split("").reduce((a, c) => (a += 1), 0);
}

test_funcs([input], [solve_1, solve_2, solve_3]);
