import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

// 주어진 규칙대로 분수를 요소로 갖는 배열이 존재할 때, X번째 존재하는 요소를 반환하는 문제
// 시간 제한: 0.5s, 메모리 제한: 256MB
// 1) X의 범위는 1~10,000,000으로 O(N)으로도 충분히 가능한 문제라고 생각된다
// 2) But, 분수는 지그재그로 증가하므로 레이어(분모)는 삼각수로 증가한다.
// 3) 이는 최소한 천만번째 요소가 존재하는 배열의 deps는 최소한 4472 이상이다..
// 4) 노드 환경에서 해당 크기의 배열은 반드시 256MB를 넘기 때문에 실제 배열을 생성해보는 방식은 불가...

// 증가하는 수를 기반으로 layer(분모)를 알아내보자
function solve_1(x) {
    let X = parseInt(x);
    let layer = 1;

    while (X > layer) {
        X -= layer;
        layer++;
    }
    
    // 지그재그로 요소를 나열했을 때, layer가 짝수면 좌부터 시작
    let denominator = layer % 2 === 0 ? X : layer - X + 1;
    let numerator = layer % 2 === 0 ? layer - X + 1 : X;
    
    return (`${denominator}/${numerator}`);
}

// 삼각수 공식을 활용
function solve_2(x) {
    let X = parseInt(x);
    const layer = Math.ceil((-1 + Math.sqrt(1 + 8 * x)) / 2);
    const preTotal = (layer - 1) * layer / 2;
    const remain = X - preTotal;

    let denominator = layer % 2 === 0 ? remain : layer - remain + 1;
    let numerator = layer % 2 === 0 ? layer - remain + 1 : remain;
    
    return (`${denominator}/${numerator}`);
}

test_funcs(input, [solve_1, solve_2]);
