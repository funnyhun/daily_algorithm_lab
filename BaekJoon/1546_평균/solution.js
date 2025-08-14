import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

// 복수개의 테스트 케이스 변환
let tmp = 0;
const input = local_input("./input.txt")
  .map((e, i) => {
    if (i % 2 === 1) {
      return [tmp, e.split(" ").map((n) => parseInt(n))];
    }
    tmp = parseInt(e);
  })
  .filter((e) => e !== undefined);

// 1. 나누기의 특수성
// 일반적으로 컴퓨터는 2진수의 형태로 수를 저장한다. -> 이는 데이터를 bit라는 단위의 구조로 저장하기 때문
// 이처럼 10진수를 2진수의 형태로 표현하는 일련의 규칙을 부동소수점 표현 방식이라고 부른다.
// 이때, 나눗셈 연산의 횟수는 부동소수점의 오차를 누적시키는 것과 동일하다.
// 즉, 나눗셈 연산의 횟수를 최소화하면서 결과를 구해야 오차를 최대한 줄일 수 있다.

function solve_1(input) {
  const m = Math.max(...input[1]);
  const total = input[1].reduce((a, c) => (a += c), 0);
  return ((total / m) * 100) / input[0];
}

function solve_2(input) {
  const m = Math.max(...input[1]);
  const sum = input[1].reduce((a, c) => {
    a += (c / m) * 100;
    return a;
  }, 0.0);
  return sum / input[0];
}

// 아이러니하게도, 두가지 solve 모두 테스트 케이스를 통과했다.
// 문제에서는 10^-2의 오차를 허용하고 있는데, 실제 주어지는 데이터의 범위가 크지 않기 때문에 규칙을 어기는 오차가 생겨나지 않는다.
// 즉, 오차에 대한 고려는 "요구 사항의 정밀도가 엄격할 때", "나눗셈 연산의 횟수가 많을 때", "데이터의 범위가 클 때" 에 반드시 필요하다.

test_funcs(input, [solve_1, solve_2]);
