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
