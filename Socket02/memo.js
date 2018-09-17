// async dummy
const asyncDummy = (inp1) => {
  console.log(`call asyncDummy ${inp1}.`);
  return new Promise((resolve) => {
    // ダミーウェイト。
    sleep(3000);
    io.emit('message', "111");
    sleep(3000);
    io.emit('message', "222111");
    sleep(3000);
    io.emit('message', "333111");
    resolve('abcde');
  });
}

var cntt = function(num) {
  console.log(`test ${num}`);
}

var id0 = setInterval(function(){cntt(1)}, 500);
var id1 = setInterval(function(){cntt(2)}, 600);
var id2 = setInterval(function(){cntt(3)}, 700);
