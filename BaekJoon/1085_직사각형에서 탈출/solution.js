import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// w, h가 주어지고 x, y에서 직사각형의 경계까지 거리 중 가장 작은 값을 반환하는 문제
// 사각형이 [0, 0]에서 시작하므로 경계까지 거리는 [x, y] 혹은 [w - x, h - y]의 경우뿐이다.
function solve_1(input) {
  const [x, y, w, h] = input[0].split(" ").map(Number);

  return Math.min(x, y, w - x, h - y);
}

test_funcs([input], [solve_1]);
