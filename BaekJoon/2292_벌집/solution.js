import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// 육각형으로 이루어진 벌집이 존재하고, 각 방은 시계 방향으로 1 ... N의 번호가 붙여질 때
// 1번방에서 N번째 방에 도달하기 위해 필요한 이동의 수
// 1) 육각형으로 이루어진 벌집은 각 층이 늘어날 때, 증가량이 6씩 늘어난다. -> 1, 7(+ 6), 19(+ 12), 37(+ 18) ... N(+ 6N)
// 2) 시작점은 반드시 1이기 때문에 블럭 N에 도달하기 위한 이동 수는 해당 블록의 층과 동일하다. -> 1 ~ 6 : 1, 7 ~ 18 : 2 ...
function solve_1(input) {
  const N = parseInt(input[0]);
  let layer = 1;
  let max = 1;

  while (N > max) {
    max += layer * 6;
    layer++;
  }

  return layer;
}

test_funcs([input], [solve_1]);
