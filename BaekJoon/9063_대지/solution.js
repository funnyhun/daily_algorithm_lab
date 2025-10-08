import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// 주어지는 N 개의 좌표를 토대로 최소 크기의 직사각형의 넓이를 반환하는 문제
// 1) 각 변은 평행해야 한다.
// 2) 최소 2개 이상의 좌표가 존재해야 직사각형을 만들 수 있다.
// 3) [x1, y1], [x2, y2] -> 각 좌표의 최소, 최대 값을 경계로 사용한다.
// 4) -> 주어지는 N개의 좌표로 둘러쌓인 직사각형이 문제의 조건이기 때문에
function solve_1(input) {
  const N = parseInt(input[0]);
  const points = input.slice(1).map((l) => l.split(" ").map(Number));
  let [x1, y1, x2, y2] = [null, null, null, null];

  for (let [x, y] of points) {
    if (x1 === null || x < x1) x1 = x;
    if (x2 === null || x > x2) x2 = x;
    if (y1 === null || y < y1) y1 = y;
    if (y2 === null || y > y2) y2 = y;
  }

  return (x2 - x1) * (y2 - y1);
}

test_funcs([input], [solve_1]);
