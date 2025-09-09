import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// 주어진 B진법으로 표현된 N을 10진수로 반환하는 문제
// js 메소드 활용
function solve_1(input) {
    const [N, B] = input[0].split(' ');

    return parseInt(N, parseInt(B));
}

// 기본적인 진수 변환 활용
function solve_2(input) {
    let [N, B] = input[0].split(' ');
    B = parseInt(B);
    const system = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(0, B);

    let res = 0;

    for (let i = N.length - 1; i >= 0; i--) {
        const digitValue = system.indexOf(N[i]);
        const pow = N.length - 1 - i;
        
        res += (B ** pow) * digitValue;
    }

    return res;
}

test_funcs([input], [solve_1, solve_2]);
