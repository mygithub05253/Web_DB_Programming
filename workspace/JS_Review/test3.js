// 화살표 함수(콜백함수) 예제
// 기존 함수도 사용 가능

// 평범한 함수
function add1(x, y) {
  return x + y;
}

// 화살표 함수 사용
const add2 = (x, y) => {
  return x + y;
}

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

// 평범한 함수
function not1(x) {
  return !x;
}

// 화살표 함수 사용
const not1 = x => !x;