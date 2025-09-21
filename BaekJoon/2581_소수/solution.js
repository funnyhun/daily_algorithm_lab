import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// M, N이 주어졌을 때 범위 내 모든 소수를 찾아 합과 최솟값을 반환하는 문제
function solve_1(input) {
  const [N, M] = input.map(Number);
  let res = [];

  for (let num = N; num <= M; num++) {
    if (num === 1) continue;
    let isPrime = true;
    for (let div = 2; div <= Math.sqrt(num); div++) {
      if (num % div === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) res.push(num);
  }

  return res.length === 0 ? -1 : `${res.reduce((a, c) => (a += c))}\n${Math.min(...res)}`;
}

test_funcs([input], [solve_1]);
