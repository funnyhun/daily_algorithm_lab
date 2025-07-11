const colors = ["\x1b[34m", "\x1b[32m", "\x1b[36m", "\x1b[35m", "\x1b[33m"];
const startEndColor = "\x1b[31m";
const resetColor = "\x1b[0m";

function applyColor(text, color) {
  return `${color}${text}${resetColor}`;
}

export function test_funcs(inputs, funcs) {
  console.log(applyColor("--- Test Start ! ---", startEndColor));

  funcs.forEach((func, i) => {
    const step1 = i + 1;
    const currentColor = colors[i % colors.length];

    // solve func의 실행 결과를 출력 기준으로 설정
    let outputBuffer = [];

    outputBuffer.push(applyColor(`--- Solve func ${step1} start ---`, currentColor));

    inputs.forEach((input, j) => {
      const step2 = j + 1;
      outputBuffer.push(applyColor(`--- input ${step2} start ---`, currentColor));
      outputBuffer.push(applyColor(func(input), currentColor));
      outputBuffer.push(applyColor(`--- input ${step2} end ---`, currentColor));
    });

    outputBuffer.push(applyColor(`--- Solve func ${step1} end ---`, currentColor));

    console.log(outputBuffer.join("\n"));
  });

  console.log(applyColor("--- Test End ! ---", startEndColor));
}
