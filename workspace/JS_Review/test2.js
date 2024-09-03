// 템플릿 문자열 예제
var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 + " 더하기 " + num2 + "는 \'" + result + "\'";
console.log(string1);

// 백틱 ``으로 감싸는 문자열을 템플릿 문자열이라 함
// 백틱 안에 ${변수명}과 같이 변수 불러오기 가능
var string2 = `${num1} 더하기 ${num2}는 '${result}'`;
console.log(string2);
