import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt").map((e) => e.split(" ").map(Number));

// 주어진 문자열을 2차원 배열의 형태로 변환한 뒤 최대값과 해당 인덱스를 반환하는 문제
// 구조 분해 할당을 할당에 사용하는 경우, 이는 값복사로 const 변수 사용이 불가하다.
function solve_1(input) {
  let maxIdx = [0, 0];
  let max = 0;

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (input[row][col] > max) {
        max = input[row][col];
        // 해당 부분에서 배열의 값복사가 계속 일어난다.
        maxIdx = [row, col];
      }
    }
  }

  return `${max}\n${maxIdx[0] + 1} ${maxIdx[1] + 1}`;
}

test_funcs([input], [solve_1]);
