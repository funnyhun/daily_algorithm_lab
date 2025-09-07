import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt").map((e) => e.split(''));

// 주어진 문자열 배열을 세로로 변환한 문자열을 반환하는 문제
// 1) 각 문자열의 길이는 다를 수 있다 -> 인덱스 접근 시 길이 차이를 고려해야 한다.
function solve_1(input) {
    const target = input.map((e) => [...e]);
    const res = [];

    let cursor = 0;
    while (target.length > 0) {
        // 각 배열의 앞 요소를 추출
        res.push(target[cursor].shift());

        // 배열에 요소가 없을 시 해당 배열 제거
        if (target[cursor].length === 0)
            target.splice(cursor, 1);

        // 요소 추출을 위해 커서 이동 (배열 범위 벗어남 방지)
        cursor = cursor + 1 >= target.length ? 0 : cursor + 1;
    }

    return res.join('');
}

// solve_1의 경우 splice(), shift()는 배열을 변경하는 비용이 있어서 비싸다...
// 참조로 값에 접근해서 해결하자...
function solve_2(input) {
  const maxLength = Math.max(...input.map((e) => e.length));

  const result = [];
  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < input.length; j++) {
      // 인덱스가 배열 범위를 벗어나지 않도록 확인
      if (input[j][i] !== undefined) {
        result.push(input[j][i]);
      }
    }
  }

  return result.join('');
}

test_funcs([input], [solve_1, solve_2]);
