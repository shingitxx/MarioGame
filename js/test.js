"use strict";

const GAME_FPS = 1000 / 60; //FPS フレームの秒速
const SCREEN_SIZE_W = 256; //canの幅のサイズpx
const SCREEN_SIZE_H = 224; //canの高さpx

let vcan = document.createElement("canvas"); //vcanにcanvasを作成
let vcon = vcan.getContext("2d"); //vconの中にvcanいれる

let can = document.getElementById("can"); //ID取得 canに代入
let con = can.getContext("2d"); //conの中にcan(2d)をいれる

vcan.width = SCREEN_SIZE_W; //canの幅のサイズpx
vcan.height = SCREEN_SIZE_H; //canの高さpx

can.width = SCREEN_SIZE_W * 2;
can.height = SCREEN_SIZE_H * 2;

vcon.mozimageSmoothingEnabled = false;
vcon.msimageSmoothingEnabled = false;
vcon.webkitimageSmoothingEnabled = false;
vcon.imageSmoothingEnabled = false;

//フレームレート維持
let frameCount = 0; //描画処置の確認
let startTime; //スタートタイム

let chImg = new Image(); //Imageをnewで新しく作る オブジェクトを作成してchImgに代入
chImg.src = "sprite.png"; //srcに挿入すると自然に画像を読み始める
// chImg.onload = draw; //画像を読み込み終わったらonloadに入ってるdrawを呼ぶ

//更新処理
function update() {}

//描画処理
function draw() {
  vcon.fillStyle = "#66AAFF"; //fillStyleに沿ってメソッドを書く(色とか)
  vcon.fillRect(0, 0, SCREEN_SIZE_W, SCREEN_SIZE_H); //fillRect 四角を書くメソッド
  vcon.drawImage(chImg, 0, 0, 16, 32, 50, 10, 16, 32);
  //1番目がpngのX Y 横 縦の順 2番目が配置場所
  //2番目が配置 drawImageキャラに必須
  vcon.font = "20px 'Impact'"; //fillTextの文字のサイズ
  vcon.fillStyle = "white"; //fillStyleに沿ってメソッドを書く(色とか) fillText
  vcon.fillText("FRAME:" + frameCount, 10, 20); //テキストを描画してくれる

  con.drawImage(
    vcan,
    0,
    0,
    SCREEN_SIZE_W,
    SCREEN_SIZE_H,
    0,
    0,
    SCREEN_SIZE_W * 2,
    SCREEN_SIZE_H * 2
  );
}
// setInterval(mainLoop, 1000 / 60); //一定の間隔で(16.666ミリ秒)mainLoopを呼ぶ

//HTMLを呼びおわったらonloadの中に入ってるfunctionが呼び出される ループ開始
window.onload = function () {
  startTime = performance.now(); //ms時間の取得
  mainLoop(); //mainLoopを一回呼ぶ
};

//メインの処理 メインループ 60FPS毎に更新される
function mainLoop() {
  let nowTime = performance.now(); //nowTimeに代入 ms時間の取得
  let nowFrame = (nowTime - startTime) / GAME_FPS; //1000 / 60  16.666以上ならnowFrameに1入る

  //フレーム60以上の場合宣言する
  if (nowFrame > frameCount) {
    let c = 0;
    while (nowFrame > frameCount) {
      frameCount++; //描画処理の確認 更新するたびにフレームを1足していく
      update(); //更新処理
      if (++c >= 4) break;
    }
    draw(); //描画処理の実行
  }
  requestAnimationFrame(mainLoop); //ブラウザにタイミングで表示する
}
