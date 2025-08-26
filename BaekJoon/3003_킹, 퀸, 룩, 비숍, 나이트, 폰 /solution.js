import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt")[0].split(" ").map(Number);

// 주어진 요소의 수가 올바른 갯수가 되도록 증감될 양을 출력하는 문제
// .map()으로 각 요소를 특정 타입 객체로 변경할려는 경우 해당 객체의 생성자 함수로 적용이 가능하다.
function solve_1(input) {
  const correct = [1, 1, 2, 2, 2, 8];
  const res = input.map((e, i) => {
    return correct[i] - e;
  });
  return res;
}

test_funcs([input], [solve_1]);
