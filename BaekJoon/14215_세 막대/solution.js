import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// 주어진 막대 a, b, c로 만들 수 있는 삼각형 중 가장 큰 둘레를 반환하는 문제
// 1) 막대 a, b, c는 줄일 수만 있다.
// 2) 삼각형의 성립은 삼각 부등식에 기반한다
// 3) 문제 조건에서 삼각형을 못만드는 경우는 없다.
function solve_1(input) {
  const stick = input[0].split(" ").map(Number).sort();

  // 가장 큰 변을 도출하기 위해 삼각 부등식의 range 도출
  const range = stick[0] + stick[1];

  return stick[0] + stick[1] + range - 1;
}

test_funcs([input], [solve_1]);
