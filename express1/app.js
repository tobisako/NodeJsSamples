var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Express World!');
});

const port = 3000;
app.listen(port, function() {
  console.log('Listening on port ' + port);
});
