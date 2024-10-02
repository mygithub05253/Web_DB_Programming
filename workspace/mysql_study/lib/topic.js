var db = require("./db.js");
var qs = require("querystring");

// topic = {
//   home : (request, response) => {
//     db.query("SELECT * from topic", (error, results) => {

//       var lists = "<ol type='1'>";
//       var i = 0;
//       while(i < results.length) {
//         lists = lists + `<li><a href="#">${results[i].title}</a></li>`;
//         i++;
//       }
//       lists = lists + "</ol>";
    
//       var context = {
//         list: lists,
//         title: "Welcome"
//       };
    
//       response.render("home", context, (error, html) => {
//         response.end(html)
//       })
//     });
    
//     db.end();
//   }
// }

module.exports = {
  home : (request, response) => {
    db.query("SELECT * from topic", (error, topics) => {

      var m = "<a href='/create'>create</a>";
      var b = "<h2>Welcome</h2><p>Node.js Start Page</p>";

      var context = {
        list: topics,
        menu: m,
        body: b
      };
    
      response.render("home", context, (error, html) => {
        response.end(html)
      }) // render 메소드 종료
    }); // query 메소드 종료
  },

  page : (request, response) => {
    //  "/page/<%list[i].id%>" 요청 시 글 번호가 pageID에 저장
    // 이후 req.params,pageID로 읽는 행위 가능
    var id = request.params.pageID;
    // 글 목록을 위한 query
    db.query("SELECT * FROM topic", (error, topics) => {
      if(error) {
        throw error;
      }
      // 선택된 글의 descrpt 필드를 읽기 위한 query
      // where 절로 id가 url에 있는 id와 같다는 조건 부여
      db.query(`SELECT * FROM topic WHERE id = ${id}`, (error2, topic) => {
        if(error2) {
          throw error2;
        }
        // topic에는 클릭된 글 하나가 객체로 구성되어 리스트의 요소에 저장되어 있음
        // 0이라는 인덱스로 읽어야 함
        var m = 
        `<a href="/create">create</a>&nbsp;&nbsp;
        <a href="/update/${topic[0].id}">update</a>&nbsp;&nbsp;
        <a href="/delete/${topic[0].id}" onclick="if(confirm("정말로 삭제하시겠습니까?")==false { return false; }) >delete</a>`;

        var b = `<h2>${topic[0].title}</h2><p>${topic[0].descrpt}</p>`;

        var context = {
          list: topics,
          menu: m,
          body: b
        };

        response.app.render("home", context, (error, html) => {
          response.end(html)
        })
      }) // 2번째 query 메소드 종료
    }) // 1번째 query 메소드 종료
  },

  create : (request, response) => {
    db.query("SELECT * FROM topic", (error, topics) => {
      if(error) {
        throw error;
      }

      var b = 
      `<form action="/create_process" method="post">
        <p><input type="text" name="title" placeholder="title" /></p>
        <p><textarea name="description" placeholder="description"></textarea></p>
        <p><input type="submit" /></p>
      </form>`;

      var context = {
        list : topics,
        menu : "<a href='/create'>create</a>",
        body : b
      };

      response.render("home", context, (error, html) => {
        response.end(html);
      }); // render 종료
    });
  },

  create_process : (request, response) => {
    var body = "";
    request.on("data", (data) => {
      body = body + data;
    });
    request.on("end", () => {
      var post = qs.parse(body);
      db.query(`
        INSERT INTO topic (title, descrpt, created)
          VALUES(?, ?, NOW())`,
        [post.title, post.description], (error, result) => {
          if(error) {
            throw error;
          }
          response.writeHead(302, { Location: `/page/${result.insertId}` });
          response.end();
        }  
      );
    })
  },

  update : (request, response) => {
    var id = request.params.pageID;
    db.query("SELECT * FROM topic", (error, topics) => {
      if(error) {
        throw error;
      }
      db.query(`SELECT * FROM topic WHERE id = ${id}`, (error2, topic) => {
        if(error2) {
          throw error2;
        }
        var m = 
        `<a href="/create">create</a>&nbsp;&nbsp;
        <a href="/update/${topic[0].id}">update</a>&nbsp;&nbsp;
        <a href="#">delete</a>`;

        // 어떤 글이 update 되는 지 알려주기 위한 코드
        // update할 글은 id로 찾아야 하기 때문에 hidden으로 정보를 서버에 전달
        // 클라이언트가 서버에 자료를 보내는 방법은 form 태그와 querystring
        var b = 
        `<form action="/update_process" method="post">
          <input type="hidden" name="id" value="${topic[0].id}" placeholder="id" />
          <p><input type="text" name="title" placeholder="title" value="${topic[0].title}" /></p>
          <p><textarea name="description" placeholder="description">${topic[0].descrpt}</textarea></p>
          <p><input type="submit" /></p>
        </form>`;

        var context = {
          list : topics,
          menu : m,
          body : b
        };

        response.render("home", context, (error, html) => {
          response.end(html);
        }); // render 종료
      })
    })
  },

  update_process : (request, response) => {
    var body = "";
    request.on("data", (data) => {
      body += data;
    });
    request.on("end", () => {
      var post = qs.parse(body);
      db.query(`update topic set title = ?, descrpt = ? where id = ?`,
        [post.title, post.description, post.id], (error, result) => {
          if(error) {
            throw error;
          }
          response.writeHead(302, { Location: `/page/${post.id}` }); // redirection
          response.end();
      });  
    })
  },

  delete_process : (request, response) => {
    id = request.params.pageID;
    db.query("DELETE FROM topic WHERE id = ?", [id], (error, result) => {
      if(error) {
        throw error;
      }
      response.writeHead(302, { Location: "/" });
      response.end();
    })
  }
}