const express = require("express");
const app = express();

// ejs 엔진을 사용하기 위한 코드
// app.set(key, value) : set은 settings라는 json에 필드를 추가
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
console.log(app)

app.get("/", (request, response) => {
  var context = {
    title: "Welcome ejs world!",
    name : "이동원"
  };

  response.render("home", context, (error, html) => {
    // 변환한 파일을 브라우저로 전달하는 역할 수행
    // 즉, response 객체의 end 메서드를 호출하여 HTML 문서를 브라우저에 전송
    response.end(html)
  })
});

app.get("/:id", (request, response) => {
  var id = request.params.id;
  
  // node 프로그램에서 html로 변수의 값을 전달하므로 변수의 이름과 개수가 일치해야 함
  // id가 HTML이라 가정하고 context 객체의 title 멤버 변수에 HTML을 저장
  var context = {
    title: id,
    name : "이동원"
  };
  
  // response.render(view, [, locals] [, callback])
  // 여기서 view는 ejs 파일명
  // 변환한 ejs 파일, 즉 생성된 html 문서를 두 번째 인자로 세 번째 인자인 callback 함수에 파라미터로 전달
  // locals 위치에 있는 자료를 view에 넘겨주고 view를 html로 만들어서 클라이언트에 보내주는 함수
  // 랜더링(rendering) : ejs 같은 템플릿 파일들을 html로 전환해주는 작업
  // 즉, ejs 파일에 변수들의 값이나 프로그램들을 모두 컴파일하여 완전한 html 문서로 만들어주는 작업
  // render() 메서드를 통해 랜더링을 수행
  response.render("home", context, (error, html) => {
    response.end(html)
  })
});

app.get("/favicon.ico", (request, response) => response.writeHead(404));
app.listen(3000, () => console.log("Example app listening on port 3000"));