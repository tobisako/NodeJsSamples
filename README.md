# NodeJsSamples
node.js + express

## Post01
HTMLのbuttonでPOST送信時、```console.log(req.body);```でbodyが正しくパースされなくなった。

解決方法
```
app.use(bodyParser.urlencoded({ extended: true }));
```

実行：
http://localhost:3000/memo.html

### 原因
express4のバージョンアップの為。
以下に詳しい。
https://mmiyauchi.com/?p=333

express4 - github
https://github.com/expressjs/body-parser

## Socket01
socket.io実験。ソケット通信によるクライアント・サーバー簡易チャット機能。

参考：
https://qiita.com/n0bisuke/items/bbdf9c57de617d052012
