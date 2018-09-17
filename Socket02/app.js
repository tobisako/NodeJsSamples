var app = require('express')();
const socket = require('socket.io');
const http = require('http').Server(app);
var io = socket(http);
const RandLib = require('./lib/RandLib');
var rnd = new RandLib();

app.use(require('express').static('./public'));

// io 
io.on('connection', (socket) => {
  console.log('CONNECTED');
  // タイマスタート。
  socket.on('start', (msg) => {
    start();
  });
  // リセット
  socket.on('reset', (msg) => {
    reset();
  });
  // 準備OK
  message('init server.');
});

// 変数
var prog = [];
var iid = [];

// スタート
function start() {
  for(var i = 0; i < 3; i++) {
    var spd = rnd.getRnd(300) + 1;
    prog[i] = 0;
    //iid[i] = setInterval(function(){countup(i)}, spd);
    setfunc(i, spd);
    progress(i, prog[i]);
    message(`[${i}] timer START! ${spd}.`);
  }
}
// 何故かfor内部だとcb引数が全て3になる対策
function setfunc(fnum, spd) {
  iid[fnum] = setInterval(function(){countup(fnum)}, spd);
}

// リセット
function reset() {
  message(`recieve RESET.`);
  for(var i = 0; i < 3; i++) {
    clearInterval(iid[i]);
    progress(i, 0);
  }
}

// callback
var countup = function(cbnum) {
  //console.log(`${cbnum}`);
  prog[cbnum] = prog[cbnum] + 1;
  message(`[${cbnum}] count up! prog=${prog[cbnum]}.`);
  progress(cbnum, prog[cbnum]);
  if ( prog[cbnum] > 100) {
    message(`[${cbnum}] done!.`);
    clearInterval(iid[cbnum]);
  }
}

function message(msg) {
  io.emit('message', msg);
}

function progress(num, val) {
  jmsg = `{"num":"${num}","val":"${val}"}`;
  io.emit('progress', jmsg);
}

// sleep tool
function sleep(time) {
  const d1 = new Date();
  while(true) {
    const d2 = new Date();
    if (d2 - d1 > time) {
      return;
    }
  }
}

http.listen(3000, () => {
  console.log('listen 3000');
});
