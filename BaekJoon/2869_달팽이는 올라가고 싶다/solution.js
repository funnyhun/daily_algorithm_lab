import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// A, B, V가 주어질 때 달팽이가 V에 도달하기 위해 걸리는 일수를 반환하는 문제
// 1) A만큼 오르고 B만큼 떨어지지만, 목적지에 도착하면 떨어지지 않는다.
// 2) 즉, (V - A) -> 달팽이가 하루만에 도착하는 거리 / (A - B) -> 달팽이가 하루동안 오를 수 있는 거리
// 3) 위 값은 달팽이가 목적지에 도착하기 직전의 일수가 된다.
// 4) 결과적으로, 해당 값에 + 1을 하면 달팽이가 목적지에 도착하게 된다!
function solve_1(input) {
    const [A, B, V] = input.split(' ').map(Number);

    // 처음에 하루만에 도착할 수 있다는 걸 고려하지 않았다...
    if (V <= A)
        return 1;

    const time = Math.ceil((V - A) / (A - B));
    // console.log(A, B, V);

    return time + 1;
}

test_funcs(input, [solve_1]);
