import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// 가장 적은 개수의 동전으로 거스름돈을 주는 케이스를 반환하는 문제
// 1) 가장 적은 케이스므로, 큰 단위부터 나누면 OK!
// 2) 가장 작은 단위가 1이므로, 무조건 나눠진다.
function solve_1(input) {
  const [num, amounts] = [Number(input[0]), input.slice(1).map(Number)];
  const coins = [25, 10, 5, 1];
  const res = [];

  for (let i = 0; i < num; i++) {
    const count = [];
    let amount = amounts[i];

    for (let coin of coins) {
      count.push(Math.floor(amount / coin));
      amount = amount % coin;
    }

    res.push(count.join(" "));
  }

  return res.join("\n");
}

test_funcs([input], [solve_1]);
