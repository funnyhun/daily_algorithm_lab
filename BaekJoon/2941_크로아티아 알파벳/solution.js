import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt");

const croaAlphabet = ["dz=", "c=", "c-", "d-", "lj", "nj", "s=", "z="];

// 문제 해결을 위해 고민해야 하는 부분
// 1. 정해진 문자열 패턴을 토대로 문자열을 변환하거나 단일 문자열로 인식해야 한다.
// 2. 문자열의 개수를 요구했으므로, 카운트 과정에서 중복을 제거해야 한다.
// 3. 문자열을 누적하는 과정에서 크로아 알파벳으로 변환되기 이전에 쌓이는 문자열을 고려해야 한다.
// 4. 변환되지 않고 문자열이 누적된 채로 종료된 경우를 고려해야 한다.

// NOTE: 이 풀이는 문제의 요구사항(알파벳의 '총 개수' 카운트)을 잘못 이해하여
// '고유한' 알파벳의 개수를 세는 방식으로 구현되었습니다. (예: 'c=c=' -> 1)
function solve_1(input) {
  let mapping = new Set(); // Set은 중복을 허용하지 않으므로 이 문제에는 적합하지 않습니다.
  let tmp = "";
  for (let c of input) {
    let idx = -1;
    tmp += c;

    // tmp 내 문자열 패턴을 확인해야 하므로 indexOf() 사용
    let cursor = croaAlphabet.find((e) => {
      idx = tmp.indexOf(e);
      return idx !== -1;
    });

    if (cursor) {
      // 결과를 토대로 일반 알파벳과 크로아 알파벳 분리
      let alphabet = tmp.slice(0, idx);
      let croa = tmp.slice(idx);
      for (let a of alphabet) mapping.add(a);
      mapping.add(croa);
      tmp = "";
      idx = -1;
    }
  }

  // 누적된 일반 알파벳 처리
  if (tmp.length > 0) for (let c of tmp) mapping.add(c);

  return mapping.size;
}

// 크로아 알파벳으로 치환한 뒤 문자열 길이를 구하면 된다..
// 이전 풀이와는 다르게 문자열 전체를 한번에 치환하므로, 'dz=' 'z='과 같은 동일 패턴에 대한 우선 순위 고려가 필요
function solve_2(input) {
  let resultString = input;

  for (const alphabet of croaAlphabet) {
    // split() 사용 시 구분자는 제거되고 join을 통해 #으로 변경
    resultString = resultString.split(alphabet).join("#");
  }

  return resultString.length;
}

test_funcs(input, [solve_1, solve_2]);
