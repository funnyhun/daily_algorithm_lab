import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// N의 K번째 약수를 반환하는 문제
function solve_1(input) {
  let [N, K] = input[0].split(" ").map(Number);

  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      K--;
      if (K === 0) return i;
    }
  }

  return 0;
}

test_funcs([input], [solve_1]);
