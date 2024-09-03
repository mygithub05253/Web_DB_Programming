// 구조 분해 할당 예제

var candyMachine = {
  status : {
    name : "node",
    count : 5,
  },
  getCandy : function() {
    this.status.count--;
    return this.status.count;
  },
};

// 일반적인 코드
// var getCandy = candyMachine.getCandy;
// var count = candyMachine.status.count;

// console.log(count);
// t = getCandy();
// console.log(count);
// console.log(t);

// 구조 분해 할당 코드
const { getCandy, status : {count} } = candyMachine;
console.log(count);
t = getCandy();
console.log(count);
console.log(t);