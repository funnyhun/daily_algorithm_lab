import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

function solve_1(input) {
  let number = parseInt(input[0]);
  const res = [];

  // 짝수인 경우 생략
  while (number % 2 === 0) {
    res.push(2);
    number /= 2;
  }

  for (let i = 3; i * i <= number; i += 2) {
    while (number % i === 0) {
      res.push(i);
      number /= i;
    }
  }

  if (number > 1) {
    res.push(number);
  }

  return res.join("\n");
}

test_funcs([input], [solve_1]);
