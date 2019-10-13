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

## Socket02
socket.io実験２。サーバーからブラウザ上の３つのプログレスバーを制御するデモ。実行時、サーバー側乱数でプログレスバーの速度を決めて動かす。

```
[socket init]ボタン ... socket.io接続
[start]ボタン ... 3つのプログレスバー起動（サーバー主導で更新）
[reset]ボタン ... プログレスバー停止
```
![イメージ](./Socket02/image.png)

## Electron01
electronを使ったデスクトップアプリのひな型。node.jsの知識さえあればデスクトップアプリが創れるというコンセプトらしい。

### 準備
npm -g install electron-prebuilt

### 起動方法：
```
electron ../Electron01
```
※nodeは使わない。引数はフォルダ。


## tran01
express-routerとexpress-session使用画面遷移サンプル。


## conf1
conf(旧node-conf)
