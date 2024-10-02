var mysql = require("mysql");

var connection = mysql.createConnection({
  // 데이터베이스 서버가 있는 주소
  // Node.js와 같은 서버에 있으므로 localhost로 지정
  host : "localhost",

  // 데이터베이스에 접근하기 위한 ID
  user : "root",

  // 데이터베이스에 접근하기 위한 Password
  // 비밀번호는 해당 Workbench 혹은 user의 비밀번호와 반드시 일치해야 함 
  password : "dongwon0525!",

  // 접근하고자 하는 데이터베이스의 이름
  database : "webdb2024"
});

// 위의 정보를 가지고 데이터베이스와 연결
connection.connect();

connection.query("SELECT * from topic", (error, results, fields) => {
  // 에러가 발생한 경우 넘겨 받을 에러 메시지 작성
  if(error) {
    console.log(error)
  }

  // results에는 DB에서 하나의 레코드가 객체로 저장됨
  // 객체들이 배열로 저장되어 있음
  console.log(results)

  // 콜백함수 세 번째 인자에는 필드들의 상세 정보가 저장되어 있음
  // console.log(fields)

  console.log(results[1].title);
  console.log(results[1].descrpt);
});

connection.end();