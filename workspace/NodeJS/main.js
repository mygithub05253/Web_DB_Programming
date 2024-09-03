// require : 외부에 있는 모듈을 객체화해서 import 하는 함수

// 웹서버 기능의 모듈
// http 웹 서버와 관련된 모든 기능을 담은 모듈
var http = require("http");

// 파일 처리 모듈
var fs = require("fs");

// 웹 서버 생성
// 서버 생성을 위해 createServer()와 listen() 메서드 필요
// createServer() 메서드 : 웹 서버 객체 생성
var app = http.createServer(function(request, response) { // callback 함수 : 반드시 2개의 파라미터(request, response)를 가지고 있어야 함
  // request를 듣고 해야하는 작업들을 정의
  // 즉, 클라이언트의 요청을 받아서 URL을 분류하고 URL에 따른 controller에 해당하는 로직 작성

  // request : 획득한 정보들을 저장하는 곳
  // response : 보낼 정보들을 저장하는 곳
  // 즉, 웹 서버는 request 객체로 받아서 response 객체로 보내는 형태
  
  var url = request.url; // 요청된 url 정보 획득
  if(request.url == "/") {
    url = "/index.html";
  }
  if(request.url == "/favicon.ico") {
    return response.writeHead(404);
  }

  response.writeHead(200);
  console.log(__dirname + url);

  // 웹 브라우저가 요청한 파일의 경로를 콘솔에 출력
  // end : 응답하는 액션에 해당하는 메서드
  response.end(fs.readFileSync(__dirname + url));
});

// request를 듣기 위한 코드
// listen() 메서드 : 클라이언트의 웹 요청을 기다리는 상태
// 웹 요청이 들어올 경우 createServer의 callback 함수를 실행
app.listen(3000);