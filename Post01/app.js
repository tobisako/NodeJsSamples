const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./public'));

app.post('/memo/create', function(req, res) {
  console.log(req.body);
  // 表記1
  var s = `Title = ${req.body.memo.title}, body = ${req.body.memo.body}.`;
  // 表記2
  var memo = req.body['memo'];
  var s2 = 'Title = ' + memo['title'] + '<br>' +
           'Body = ' + memo['body'];
    res.send(s2);
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});
