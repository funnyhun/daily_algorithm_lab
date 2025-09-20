import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// 주어진 수 중에서 소수의 개수를 반환하는 문제
function solve_1(input) {
  const nums = input[1].split(" ").map(Number);
  let count = 0;

  for (const num of nums) {
    if (num === 1) continue;
    let isPrime = true;
    for (let div = 2; div <= Math.sqrt(num); div++) {
      if (num % div === 0) {
        isPrime = false;
        break;
      }
    }
    count += isPrime;
  }

  return count;
}

test_funcs([input], [solve_1]);
