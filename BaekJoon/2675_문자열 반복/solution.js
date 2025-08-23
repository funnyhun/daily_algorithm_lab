import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt")
  .slice(1)
  .map((e) => e.split(" ").map((e, i) => (i === 0 ? parseInt(e) : e)));

// 주어진 문자열의 각 문자를 N 번만큼 중복시켜 출력하는 문제
// 문자열의 불변성을 고려해서 배열에 문자열 누적 + join()
function solve_1(input) {
  for (let cmd of input) {
    const [n, str] = cmd;
    const tmp = str.split("").map((e) => e.repeat(n));
    console.log(tmp.join(""));
  }
}

test_funcs([input], [solve_1]);
