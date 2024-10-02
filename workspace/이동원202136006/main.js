// 이름 - 이동원
// 학번 - 202136006

const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

var mysql = require("mysql");
var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "dongwon0525!",
  database : "webdb2024"
});

connection.connect();

app.get("/", (req, res) => {
  const studentNumber = "202136006";
  const studentName = "이동원";
  const header = "webdb2024에 생성된 테이블 목록";

  res.render("home", {
    number : studentNumber,
    name : studentName,
    header : header
  });
});

app.get("/TOPIC", (req, res) => {
  connection.query("SELECT * FROM topic", (error, results) => {
    var lists = "<ol type='1'>";
    results.forEach(result => {
      lists += `<li><a href="#">${result.title}</a></li>`;
    });
    lists += "</ol>";
    res.render("topic", { list: lists });
  });
});

app.get("/AUTHOR", (req, res) => {
  res.render("author");
})

app.listen(3000, () => {
  console.log("서버 실행 중")
})