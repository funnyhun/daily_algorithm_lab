import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// 주어진 수 N이 완전수인지 판별하고 그에 맞는 결과를 반환하는 함수
function solve_1(input) {
  const numbs = input.slice(0, -1).map(Number);
  const res = [];

  for (let numb of numbs) {
    const divs = [1];
    let buffer;

    for (let i = 2; i < numb; i++) {
      if (numb % i === 0) divs.push(i);
    }
    if (divs.reduce((a, c) => (a += c)) === numb) buffer = `${numb} = ${divs.join(" + ")}`;
    else buffer = `${numb} is NOT perfect.`;

    res.push(buffer);
  }

  return res.join("\n");
}

test_funcs([input], [solve_1]);
