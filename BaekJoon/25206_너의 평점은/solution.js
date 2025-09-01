/* eslint-disable no-unused-vars */
import { local_input } from "../../util/input.js";
import { test_funcs } from "../../util/test.js";

const input = local_input("./input.txt").map((e) => e.split(" "));

const pointMap = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

// 전공 평점 계산하는 문제
function solve_1(input) {
  let totalScore = 0;
  let sumScore = 0;

  for (const [, score, grade] of input) {
    if (grade === "P") continue;

    // (학점 x 과목 평점) / 총 학점
    const point = pointMap[grade];
    totalScore += parseFloat(score) * point;
    sumScore += parseFloat(score);
  }

  return totalScore / sumScore;
}

test_funcs([input], [solve_1]);
