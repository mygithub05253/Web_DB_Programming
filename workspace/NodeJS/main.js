// require : 외부에 있는 모듈을 객체화해서 import 하는 함수
// require는 import와 동일한 기능을 수행

// 웹서버 기능의 모듈
// http 웹 서버와 관련된 모든 기능을 담은 모듈
// var http = require("http");

// 외부 IP Address 할당
// const host = "192.168.0.5";

// 파일 처리 모듈
// 파일과 관련된 작업을 수행
// 파일 시스템을 import하기 위해서 선언
// var fs = require("fs");

// url 모듈 요청
// url 모듈에 담긴 기능 사용 가능
// const urlm = require("url");

// 웹 서버 생성
// 서버 생성을 위해 createServer()와 listen() 메서드 필요
// createServer() 메서드 : 웹 서버 객체 생성
// var app = http.createServer(
//   // callback 함수 : 반드시 2개의 파라미터(request, response)를 가지고 있어야 함
//   function(request, response) {
//   // request를 듣고 해야하는 작업들을 정의
//   // 즉, 클라이언트의 요청을 받아서 URL을 분류하고 URL에 따른 controller에 해당하는 로직 작성

//   // request : 획득한 정보들을 저장하는 곳
//   // 객체로써 웹 서버에 클라이언트의 요청이 들어오면 요청과 관련된 정보가 저장되는 곳

//   // response : 보낼 정보들을 저장하는 곳
//   // 객체로써 클라이언트(웹브라우저)에 응답하기 위한 메소드 및 정보가 저장되는 곳

//   // 즉, 웹 서버는 request 객체로 받아서 response 객체로 보내는 형태
  
//   // 요청된 url 정보 획득
//   // 도메인을 제외한 나머지 경로명이 저장되어 있음
//   var _url = request.url;
//   console.log("요청받은 url : " + _url)

//   // url에서 querystring 문자열만 추출
//   // querystring 경로명이 저장됨
//   // var queryData = urlm.parse(_url).query;
//   var queryData = urlm.parse(_url, true).query;

//   // 도메인을 제외한 전체 경로를 path에 저장
//   // var queryData = urlm.parse(_url, true).path;

//   // querystring을 제외한 순수 요청 경로가 저장됨
//   // var queryData = urlm.parse(_url, true).pathname;
//   console.log(queryData)
//   // console.log(queryData.id)
//   // console.log(queryData.name)

//   var title = queryData.id;
  
//   // URL 분류기 : 요청이 들어온 URL에 따라서 처리
//   // request 객체의 url 속성에는 client가 요청한 url이 저장되어 있음
//   // URL 부분
//   if(request.url == "/") {
//     title = "Welcome 제목 수정";
//     // Controller 부분
//     // _url = "/index.html";
//   }

//   // 경로가 붙은 URL
//   // if(request.url == "/main/side") {
//   //   _url = "/index2.html";
//   // }
  
//   // /favicon.ico : browser가 서버에게 자동으로 요청하는 url
//   // 127.0.0.1:3000/favicon.ico
//   // 이미지가 있는 경우 이미지를 보내주면 됨
//   // 이미지가 없는 경우 단순하게 콜백 함수를 종료하고 다음 문장을 수행하면 됨
//   if(request.url == "/favicon.ico") {
//     // 응답 헤더에 상태 코드 추가
//     return response.writeHead(404);
//   }

//   // var template 추가
//   // ${}를 사용해서 html에서 변수 사용
//   var template = `
//     <!doctype html>
//     <html>
//       <head>
//         <title>WEB1 - ${queryData.id}</title>
//         <meta charset="utf-8">
//       </head>
//       <body>
//         <h1><a href="index.html">${title}</a></h1>
//         <ol>
//           <li><a href="/?id=HTML">HTML</a></li>
//           <li><a href="/?id=CSS">CSS</a></li>
//           <li><a href="/?id=JavaScript">JavaScript</a></li>
//         </ol>
//         <h2>${title}</h2>
//         <p>The World Wide Web (abbreviated WWW or the Web) is an information space where documents and other web resources are identified by Uniform Resource Locators (URLs), interlinked by hypertext links, and can be accessed via the Internet.[1] English scientist Tim Berners-Lee invented the World Wide Web in 1989. He wrote the first web browser computer program in 1990 while employed at CERN in Switzerland.[2][3] The Web browser was released outside of CERN in 1991, first to other research institutions starting in January 1991 and to the general public on the Internet in August 1991</p>
//       </body>
//     </html>
//   `

//   // 응답 헤더 작성
//   response.writeHead(200);
//   // console.log(__dirname + _url);
//   // console.log(queryData.id + " , " + queryData.name);

//   // 웹 브라우저가 요청한 파일의 경로를 콘솔에 출력
//   // end : 응답하는 액션에 해당하는 메서드
//   // readFileSync : 매개변수로 넘겨진 파일을 읽음
//   // fs.readFileSync() : 웹브라우저가 요청한 파일을 읽어서 응답하는 동기식 방식
//   // __dirname : __는 JS에서 기본적으로 정의된 변수 앞에 연결
//   // 즉, 현재 파일이 위치한 폴더의 절대 경로를 저장

//   // Template 부분
//   // 화면에 출력
//   // response.end(`<html><head></head><body><h1>egoing</h1></body></html>`);
//   // 현재 경로에 있는 파일의 내용을 읽어서 end 메서드의 인자로 넘겨줌
//   response.end(template);
//   // response.end(fs.readFileSync(__dirname + _url));
// });

// request를 듣기 위한 코드
// listen() 메서드 : 클라이언트의 웹 요청을 기다리는 상태
// listen 메서드를 작성해주어야 백그라운드에서 작동함
// 웹 요청이 들어올 경우 createServer의 callback 함수를 실행
// 웹 서버의 port 번호를 지정하는 작업
// app.listen(3000);

// 외부 IP 주소를 할당한 것을 함께 호출
// app.listen(3000, host);

// express 설치 후 실습 코드

// url 모듈 가져오기
var urlm = require("url");

// express 모듈을 import
// const에 의해 express 변수는 값이 변하지 않음
const express = require("express");

// express() 함수에 의해 Application 객체를 app에 저장
const app = express();

app.get("/main", (request, response) => {

  var _url = request.url;
  var queryData = urlm.parse(_url, true).query;

  if(queryData.id === undefined) {
    var tmp = `I entered in main, No query string`;
  } else {
    var tmp = `I entered in main, query string` + ` is ` + queryData.id;
  }

  response.send(tmp);

})

// /:id/:name => Semantic URL 사용 방식
// URL 패턴을 읽는다고 생각하면 됨
// / 뒤에 붙는 문자열을 전부 같은 URL로 취급
// 문자열들을 변수로 읽어서 작업을 수행하는 것도 가능
// app.get("/:tblnm/:kind", (request, response) => {

//   var _url = request.url;
//   // var queryData = urlm.parse(_url, true).query;

//   var tblnm = request.params.tblnm;
//   var kind = request.params.kind;

//   if(tblnm === `customer_tbl` && kind === `update`) {
//     sql = `update customer_tble set ~~~`;
//   }
//   else if(tblnm === `customer_tbl` && kind === `delete`) {
//     delete;
//   }

//   var tmp = `I entered in main, query string` + ` is ` + tblnm + ` , ` + kind;

//   response.send(tmp);

// })

// get(path, callback 함수) : 사용자가 해당 경로를 요청하면 callback 함수 실행
// get 메서드는 라우팅(url 분류기) 기능을 수행 => 요청된 경로마다 응답해주는 기능
// if else를 사용해서 url을 분류할 필요가 없음
// response.send 메서드 : express에서 response 객체에 send 메서드 추가 => end와 같은 기능
// 웹의 요청을 수신, 이벤트 루프

// app.get("/", (request, response) => {
//   var _url = request.url;
//   var title = "Welcome";
//   var queryData = urlm.parse(_url, true).query;
//   if(queryData.id === undefined) {
//     title = "Welcome";
//   } else {
//     title = queryData.id;
//   }

//   var template = `
//     <!doctype html>
//     <html>
//       <head>
//         <title>WEB1 - ${title}</title>
//         <meta charset="utf-8">
//       </head>
//       <body>
//         <h1><a href="/">WEB</a></h1>
//         <ol>
//           <li><a href="/?id=HTML">HTML</a></li>
//           <li><a href="/?id=CSS">CSS</a></li>
//           <li><a href="/?id=JavaScript">JavaScript</a></li>
//         </ol>
//         <h2>${title}</h2>
//         <p>Test</p>
//         <p>The World Wide Web (abbreviated WWW or the Web) is an information space where documents and other web resources are identified by Uniform Resource Locators (URLs), interlinked by hypertext links, and can be accessed via the Internet.[1] English scientist Tim Berners-Lee invented the World Wide Web in 1989. He wrote the first web browser computer program in 1990 while employed at CERN in Switzerland.[2][3] The Web browser was released outside of CERN in 1991, first to other research institutions starting in January 1991 and to the general public on the Internet in August 1991</p>
//       </body>
//     </html>
//   `

//   response.send(template);
// })

// Semantic URL을 사용하는 다른 예시 코드
// 물음표(?)가 붙은 querystring이 아닌 매개변수 개념으로 값을 서버에 전달
app.get("/:id", (request, response) => {
  // var _url = request.url;
  var id = request.params.id;
  // var queryData = urlm.parse(_url, true).query;
  console.log(id)
  var title = id;

  var template = `
    <!doctype html>
    <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ol>
        <h2>${title}</h2>
        <p>Test</p>
        <p>The World Wide Web (abbreviated WWW or the Web) is an information space where documents and other web resources are identified by Uniform Resource Locators (URLs), interlinked by hypertext links, and can be accessed via the Internet.[1] English scientist Tim Berners-Lee invented the World Wide Web in 1989. He wrote the first web browser computer program in 1990 while employed at CERN in Switzerland.[2][3] The Web browser was released outside of CERN in 1991, first to other research institutions starting in January 1991 and to the general public on the Internet in August 1991</p>
      </body>
    </html>
  `

  response.send(template);
})

app.get("/favicon.ico", (request, response) => response.writeHead(404))
app.listen(3000, () => console.log("Example app listening on port 3000"))