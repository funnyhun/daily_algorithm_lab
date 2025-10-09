import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// 주어지는 각들에 대해 정해진 규칙에 따른 결과를 반환하는 문제
// - 세 각의 크기가 모두 60이면, Equilateral
// - 세 각의 합이 180이고, 두 각이 같은 경우에는 Isosceles
// - 세 각의 합이 180이고, 같은 각이 없는 경우에는 Scalene
// - 세 각의 합이 180이 아닌 경우에는 Error
function solve_1(input) {
  const [a, b, c] = input.map(Number);

  if (a + b + c !== 180) return "Error";
  if (a === b && b === c) return "Equilateral";
  if (a === b || b === c || a === c) return "Isosceles";
  return "Scalene";
}

test_funcs([input], [solve_1]);
