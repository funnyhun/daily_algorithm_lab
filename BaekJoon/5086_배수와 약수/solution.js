import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// 'a b' 입력에 대해 a가 b의 약수 혹은 배수인 경우 정해진 결과를 반환하는 문제
// 1) 마지막 라인은 항상 '0 0'이다.
// 2) a와 b가 같은 경우는 없다.
function solve_1(input) {
  const res = [];
  for (const str of input) {
    if (str === "0 0") break;
    const [a, b] = str.split(" ").map(Number);
    res.push(a % b === 0 ? "multiple" : b % a === 0 ? "factor" : "neither");
  }
  return res.join("\n");
}

test_funcs([input], [solve_1]);
