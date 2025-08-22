import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt")[0];

// 주어진 문자열에서 특정 알파벳이 있는지와 인덱스를 출력하는 문제
function solve_1(input) {
  const res = new Array(26).fill(-1);

  for (let i = 0; i < input.length; i++) {
    // 아스키 코드를 활용해서 배열의 인덱스 추출
    const idx = input[i].charCodeAt(0) - 97;

    // 처음으로 등장한 위치이므로, -1인 경우만 idx 쓰기
    if (res[idx] === -1) res[idx] = i;
  }

  return res.join(" ");
}

test_funcs([input], [solve_1]);
