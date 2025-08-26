import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt")[0];

// 알파벳으로 맵핑된 숫자를 토대로 주어진 규칙의 전화를 걸 때, 필요한 시간을 출력하는 문제
function solve_1(input) {
  const dial = {
    A: 3,
    B: 3,
    C: 3,
    D: 4,
    E: 4,
    F: 4,
    G: 5,
    H: 5,
    I: 5,
    J: 6,
    K: 6,
    L: 6,
    M: 7,
    N: 7,
    O: 7,
    P: 8,
    Q: 8,
    R: 8,
    S: 8,
    T: 9,
    U: 9,
    V: 9,
    W: 10,
    X: 10,
    Y: 10,
    Z: 10,
  };

  let time = 0;

  for (let n of input) {
    time += dial[n];
  }

  return time;
}

test_funcs([input], [solve_1]);
