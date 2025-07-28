import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt").map((e) => e.split(" ").map((e) => parseInt(e)));

// 1. 정해진 cmd 수행 -> [i, j] : i부터 j까지 역순으로 바꿀 것
// 2. 기존 배열에서 실제로 요소를 이동 시키기 vs 배열의 특정 부분을 변환한 뒤 덮어쓰기
// 3. 배열 형태에서 출력 요구사항인 문자열로 변경

function solve_1(input) {
  const res = Array.from({ length: input[0][0] }, (v, i) => i + 1);
  const cmds = input.slice(1);

  cmds.forEach(([i, j]) => {
    const startIndex = i - 1;
    const endIndex = j - 1;

    // 해당 부분 역순으로 바꾼 뒤, 원본 배열에 적용 -> slice(), splice()의 비용
    const target = res.slice(startIndex, endIndex + 1).reverse();
    res.splice(startIndex, target.length, ...target);
  });

  return res.join(" ");
}

function solve_2(input) {
  const res = Array.from({ length: input[0][0] }, (v, i) => i + 1);
  const cmds = input.slice(1);

  cmds.forEach(([i, j]) => {
    let startIndex = i - 1;
    let endIndex = j - 1;

    // 인덱스 접근을 통해 반전되는 요소 직접 교환 -> 보다 효율적이고 O(1)의 공간 사용
    while (startIndex < endIndex) {
      [res[startIndex], res[endIndex]] = [res[endIndex], res[startIndex]];
      startIndex++;
      endIndex--;
    }
  });

  return res.join(" ");
}

test_funcs([input], [solve_1, solve_2]);

// 단순한 구현 vs 최적화된 로직
// js로 문제를 해결하는 과정에서 익숙한 배열 메소드를 활용하는 경우가 많다.
// 이 경우, 메소드 사용에 동반되는 비용을 고려하지 않는 경우가 곧잘 있다.
// 메소드를 사용하는 경우, 구현 과정을 단순화하고(크게 고민하지 않고..) 가독성이 좋다는 장점이 있다는데...
// 솔직히 swap 연산을 하는 로직도 별도 함수로 추상화할 수도 있고 그렇게 복잡한 코드라는 생각은 잘 안든다...

// "Premature optimization is the root of all evi" - 조기 최적화는 모든 악의 근원이다.
// 위와 같은 말이 있듯이... 너무 복잡한 최적화는 처음에 고려하지 말자.
// 배열 메소드 대신 swap 연산을 사용하는 것은 비용을 많이 요구하지 않지만 아닌 경우도 있다.
