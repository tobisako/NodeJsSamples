// Socket.io
const express = require('express');
const socket = require('socket.io');
var app = express();
const http = require('http').Server(app);
var io = socket(http);

console.log(`1 ${__dirname}`);

// ファイル送信（簡易、パス調整が不便）
//app.get('/', (req, res) => res.sendFile(__dirname + '/test.html'));
app.use(express.static('./public'));

// io
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    var m2 = msg + "!";
    io.emit('chat message', m2);
    console.log(`message: ${msg}`);
  });
});

http.listen(3000, () => {
  console.log('LISTEN');
});

