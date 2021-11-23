var mysql = require('mysql');
var express = require('express')
const app = express();
const port = 8080;

var con = mysql.createConnection({
    host: "host.docker.internal",
    user: "root",
    password: "louis"
  });

con.connect(function(err) {console.log(err)});

con.query("CREATE DATABSE data_eng;", function (err, result, fields) {
    console.log(result);
});

con.query("USE data_eng;", function (err, result, fields) {
    console.log(result);
});

con.query("CREATE TABLE IF NOT EXISTS count (number INT);", function (err, result, fields) {
    console.log(result);
});

con.query("INSERT INTO count VALUES (0);", function (err, result, fields) {
    console.log(result);
});

con.query("SET SQL_SAFE_UPDATES = 0;", function (err, result, fields) {
    console.log(result);
});

app.get('/', function (req, res) {
    con.query("UPDATE count SET number = number + 1", function (err, result, fields) {
        con.query("SELECT number FROM count", function (err, result, fields) {
            var count = result[0]['number'];
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(count.toString());
            console.log()
        });
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})