import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt").map((e) => e.split(' ').map(Number));

// 고정 크기의 도화지에 고정 크기의 색종이를 붙인 뒤, 색종이가 붙은 영역을 구해 반환하는 문제
// 1) 도화지와 색종이의 크기가 모두 고정된다.
// 2) 붙은 영역의 결과를 구하므로 겹쳐진 부분은 고려하지 않아도 된다. -> 별도의 예외처리 필요 x
// 3) 1, 2를 모두 고려했을 때 별도의 로직 없이 모든 색종이를 붙인 뒤 구하는 게 편하다.
function solve_1(input) {
    const res = Array.from({ length : 100 }, () => new Array(100).fill(0))
    const cmds = input.slice(1);

    for (let cmd of cmds) {
        const [x, y] = cmd;
        const [maxX, maxY] = [x + 10, y + 10];

        for (let i = y; i < maxY; i++) {
            for (let j = x; j < maxX; j++) {
                res[i][j] = 1;
            }
        }
    }

    return res.reduce((a, c) => a += c.filter((e) => e).length, 0);
}

test_funcs([input], [solve_1]);
