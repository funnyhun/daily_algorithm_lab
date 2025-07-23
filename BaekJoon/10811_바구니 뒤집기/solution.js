import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt").map((e) => e.split(" ").map((e) => parseInt(e)));

function solve_1(input) {
  const res = Array.from({ length: input[0][0] }, (v, i) => i + 1);
  const cmds = input.slice(1);

  cmds.forEach(([i, j]) => {
    const startIndex = i - 1;
    const endIndex = j - 1;

    const target = res.slice(startIndex, endIndex + 1).reverse();
    res.splice(startIndex, target.length, ...target);
  });

  return res.join(" ");
}

test_funcs([input], [solve_1]);
