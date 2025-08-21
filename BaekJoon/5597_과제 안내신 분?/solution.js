import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt").map((e) => parseInt(e));

// 1. 학생은 항상 30 명이며, 주어진 숫자는 과제를 출석한 학생이다.
// 3. 자료구조의 검색 연산이 상수시간에 가까울수록 유리할 듯
// -> 하지만 입력값이 정해져 있어 시간복잡도 자체는 항상 상수 시간
// -> 그렇지만 정해진 입력값을 벗어나 학생 수가 커질 수록 검색 연산의 시간복잡도가 가장 크다..
// 4. 가장 쉬운 방법은..?

function solve_ary(input) {
  const res = [];

  // 이때, 배열의 includes()는 O(N)
  for (let i = 1; i <= 30; i++) {
    if (!input.includes(i)) {
      res.push(i);
    }
  }

  return res;
}

function solve_set(input) {
  const res = [];
  const data = new Set(input); // O(N)

  // 이때, Set의 has()는 O(1)
  for (let i = 1; i <= 30; i++) {
    if (!data.has(i)) res.push(i);
  }

  return res;
}

// solve_ary : O(N^2)
// solve_set : O(N)
// 만약, 문제의 학생 수 상한을 없앤다고 하면 더 커질 수 있는 차이

// 문제 해결을 위해 자료구조에서 사용할 주요 연산이 무엇인지를 고민하자.

test_funcs([input], [solve_ary, solve_set]);
