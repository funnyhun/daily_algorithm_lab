import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt")
  .map((s) => s.split(" "))
  .map((a) => a.map((e) => parseInt(e)));

function solve_1(input) {
  const [range, max] = input[0];
  const data = input[1];
  let res = [];

  for (let i = 0; i < range; i++) {
    const target = data[i];
    if (target < max) res.push(target);
  }

  return res.join(" ");
}

function solve_2(input) {
  const [range, max] = input[0];
  const data = input[1];

  return data.filter((e) => e < max).join(" ");
}

test_funcs([input], [solve_1, solve_2]);
