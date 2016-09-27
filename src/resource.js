var res = {
  cat0_png: "res/S/cat0.png", //猫さん
  cat1_png: "res/S/cat1.png", //猫さん
  cat2_png: "res/S/cat2.png", //猫さん
  cat3_png: "res/S/cat3.png", //猫さん

  basket0_png: "res/S/basket0.png",
  basket1_png: "res/S/basket1.png",
  basket2_png: "res/S/basket2.png",
  basket3_png: "res/S/basket3.png",
  basket4_png: "res/S/basket4.png",

  bug_png: "res/S/bug.png", //虫
  apple_png: "res/S/apple.png", //リンゴ
  background_png: "res/background.png", //背景
  touchorigin_png: "res/touchorigin.png", //バーチャルパッド(下)
  touchend_png: "res/touchend.png"　//バーチャルパッド(上)
};

var g_resources = [];
for (var i in res) {
  g_resources.push(res[i]);
}
