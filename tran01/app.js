const express = require('express')
const session = require('express-session')
const app = express()

app.set("view engine", "ejs")
//app.set('views', __dirname + '/views'); // 無くてもviews参照する

// https://qiita.com/moomooya/items/00f89e425a3034b8ea14
app.use(session({
  secret: 'zakuzaku',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 180000
  }
}))

app.use("/shop", require("./router.js"))

app.get('/', (req, res) => {
  res.render("top")
})

app.get('/admin', (req, res) => {
  var data = {
    items: [
        {name: "<h1>リンゴ</h1>"},
        {name: "<h2>バナナ</h2>"},
        {name: "<h3>スイカ</h3>"}
    ]
  }
  res.render("admin", data)
})

app.get('/admin2', (req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"})
  res.end("admin2")
})

app.listen(3000, () => console.log('listening on port 3000'))
