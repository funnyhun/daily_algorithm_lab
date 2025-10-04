import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// 3개의 점이 주어질 때, 평행 직사각형을 만들기 위한 마지막 점을 반환하는 문제
// 처음에 하나의 맵을 활용해서 빈도수를 계산하려 했으나.. x, y좌표의 순서를 유지해야함을 꺠달았다..
function solve_1(input) {
  const points = input.map((l) => l.split(" ").map(Number));
  const [xCounts, yCounts] = [{}, {}];
  const res = [];

  // x, y 출현 빈도 별도로 카운트
  for (let [x, y] of points) {
    console.log(x, y);
    xCounts[x] = (xCounts[x] || 0) + 1;
    yCounts[y] = (yCounts[y] || 0) + 1;
  }

  // x 좌표 도출
  for (let n in xCounts) {
    if (xCounts[n] === 1) res.push(n);
  }

  // y 좌표 도출
  for (let n in yCounts) {
    if (yCounts[n] === 1) res.push(n);
  }

  // 위 3개의 과정 중 하나라도 순서가 바뀌면 틀린다..
  return res.join(" ");
}

test_funcs([input], [solve_1]);
