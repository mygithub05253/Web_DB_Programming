// 이벤트 기반 예제 코드
function run() {
  console.log("3초 후 실행");
}

console.log("시작");
setTimeout(run, 3000);
console.log("끝");

// 논 블로킹 예제 코드
function longRunningTask() {
  console.log("작업 끝");
}
console.log("시작")
longRunningTask();
console.log("다음 작업")

// 블로킹 예제 코드
console.log("시작")
setTimeout(longRunningTask, 0);
console.log("다음 작업")

// 블록 스코드 예제 코드
if(true) {
  // var : 전체 영역에서 사용 가능
  var x = 3;
}
console.log(x);

if(true) {
  // const : 중괄호 내에서만 사용 가능
  // const로 정의된 변수의 값은 변경 불가 => 상수 취급
  const y = 3;
  console.log(y);
}
// 오류 발생
// console.log(y);