import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// 주어진 문자열을 아스키 코드로 변환하여 출력하는 문제
// 1. js에는 String 객체 내부에 해당 기능을 하는 메소드가 존재한다.
// 2. js에는 문자열이 아닌 단일 문자도 String 객체로 생성된다.
function solve_1(input) {
  return input[0].charCodeAt(input);
}

test_funcs([input], [solve_1]);
