const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// var mysql = require("mysql");
// var connection = mysql.createConnection({
//   host : "localhost",
//   user : "root", 
//   password : "dongwon0525!",
//   database : "webdb2024"
// });

// connection.connect();

// DB 관련 line들 대신 db 모듈을 import하는 코드
var db = require("./lib/db.js");

const topic = require("./lib/topic.js");

app.get("/", (request, response) => {
  topic.home(request, response);
});

app.get("/home/test", (request, response) => {
  var context = {
    title: "Test입니다."
  };

  response.render("test", context, (error, html) => {
    response.end(html)
  })
});

app.get("/page/:pageID", (request, response) => {
  topic.page(request, response);
})

app.get("/create", (request, response) => {
  topic.create(request, response);
})

app.post("/create_process", (request, response) => {
  topic.create_process(request, response);
})

app.get("/update/:pageID", (request, response) => {
  topic.update(request, response);
})

app.post("/update_process", (request, response) => {
  topic.update_process(request, response);
})

app.get("/delete/:pageID", (request, response) => {
  topic.delete_process(request, response);
})

app.get("/favicon.ico", (request, response) => response.writeHead(404));
app.listen(3000, () => console.log("Example app listening on port 3000"));