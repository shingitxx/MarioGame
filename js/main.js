"use strict";

const SCREEN_SIZE_W = 256; //canの幅のサイズpx
const SCREEN_SIZE_H = 224; //canの高さpx

let can = document.getElementById("can"); //ID取得 canに代入
let con = can.getContext("2d"); //conの中にcan(2d)をいれる

con.width = SCREEN_SIZE_W; //canの幅のサイズpx
con.height = SCREEN_SIZE_H; //canの高さpx

//フレームレート維持を
let frameCount = 0; //描画処置の確認

let chImg = new Image(); //Imageをnewで新しく作る オブジェクトを作成してchImgに代入
chImg.src = "sprite.png"; //srcに挿入すると自然に画像を読み始める

//更新処理
function update() {}

//描画処理
function draw() {
  con.fillStyle = "#66AAFF"; //fillStyleに沿ってメソッドを書く(色とか)
  con.fillRect(0, 0, SCREEN_SIZE_W, SCREEN_SIZE_H); //fillRect 四角を書くメソッド
  con.drawImage(chImg, 16, 0, 16, 32, 50, 10, 16, 32);
  //1番目がpngのX Y 横 縦の順 2番目が配置場所
  //2番目が配置 drawImageキャラに必須
  con.font = "20px 'Impact'"; //fillTextの文字のサイズ
  con.fillStyle = "white"; //fillStyleに沿ってメソッドを書く(色とか) fillText
  con.fillText("FRAME:" + frameCount, 10, 20); //テキストを描画してくれる
}
setInterval(mainLoop, 1000 / 60); //一定の間隔で(16.666ミリ秒)mainLoopを呼ぶ

//メインの処理 メインループ 60FPS毎に更新される
function mainLoop() {
  //フレーム60以上の場合宣言する
  frameCount++; //描画処理の確認 更新するたびにフレームを1足していく
  update(); //更新処理
  draw(); //描画処理の実行
}
