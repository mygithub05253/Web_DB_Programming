// 모듈
// 특정한 기능을 하는 함수나 변수들의 집합

// require 함수 : 외부 모듈을 객체로 반환
const { odd, even } = require("./W01-2-var");
const mtest = require("./W01-2-var");
function checkOddOrEven(num) {
  if(num % 2) {
    return odd;
  }
  return even;
}

console.log(checkOddOrEven(5));

function checkOddOrEven2(num) {
  if(num % 2) {
    return mtest.odd;
  }
  return mtest.even;
}

console.log(checkOddOrEven(8));