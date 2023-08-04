// 商品圖片大小建議 72dpi 1440 x 1080 = 4 : 3 .jpg
const products = [
  {
    id: 1,
    image: require("../images/product/photo/聯名合作/連衣連・扭扭運動好蔬活/印花帽子/花椰菜菜子裡的小白蟲先生/花椰菜菜子裡的小白蟲先生1.jpg"),
    name: "花椰菜菜子裡的小白蟲先生1｛ 深/淺 ｝",
    dimensions: {
      S: 180,
      M: 1080,
      L: 880,
    },
    color: [
      {
        subId: 1,
        name: "深色",
        rgb: "#000",
      },
      {
        subId: 2,
        name: "淺色",
        rgb: "#ccc",
      },
    ],
    gallery: [
      {
        subId: 1,
        image: require("../images/product/photo/聯名合作/連衣連・扭扭運動好蔬活/印花帽子/花椰菜菜子裡的小白蟲先生/花椰菜菜子裡的小白蟲先生1.jpg"),
        name: "花椰菜帽1",
      },
      {
        subId: 2,
        image: require("../images/product/photo/聯名合作/連衣連・扭扭運動好蔬活/印花帽子/花椰菜菜子裡的小白蟲先生/花椰菜菜子裡的小白蟲先生2.jpg"),
        name: "花椰菜帽2",
      },
      {
        subId: 3,
        image: require("../images/product/photo/聯名合作/連衣連・扭扭運動好蔬活/印花帽子/花椰菜菜子裡的小白蟲先生/花椰菜菜子裡的小白蟲先生3.jpg"),
        name: "花椰菜帽3",
      },
      {
        subId: 4,
        image: require("../images/product/photo/聯名合作/連衣連・扭扭運動好蔬活/印花帽子/花椰菜菜子裡的小白蟲先生/花椰菜菜子裡的小白蟲先生4.jpg"),
        name: "花椰菜帽4",
      },
    ],
    description: [
      {
        subId: 1,
        text: "有天看著碗裡的蔬菜們，腦中跑出一幕幕畫面，如果沒有農藥的花椰菜會不會因為菜蟲在他的頭上而想抓癢呢？如果番茄蒂頭被風吹走了他會追得到嗎？秋葵會不會因為笑到流口水被自己的黏液弄到滑倒，如果這一切都有可能發生，是不是生活中不敢吃的菜菜們都會變得可愛，來跟可愛的菜菜們當朋友吧！",
      },
      {
        subId: 2,
        vertical: require("../images/product/description/聯名合作/連衣連・扭扭運動好蔬活/印花帽子/花椰菜菜子裡的小白蟲先生/花椰菜菜子裡的小白蟲先生1.jpg"),
        name: "花椰菜帽1",
      },
      {
        subId: 3,
        horizontal: require("../images/product/description/聯名合作/連衣連・扭扭運動好蔬活/印花帽子/花椰菜菜子裡的小白蟲先生/花椰菜菜子裡的小白蟲先生2.jpg"),
        name: "花椰菜帽2",
      },
      {
        subId: 4,
        vertical: require("../images/product/description/聯名合作/連衣連・扭扭運動好蔬活/印花帽子/花椰菜菜子裡的小白蟲先生/花椰菜菜子裡的小白蟲先生3.jpg"),
        name: "花椰菜帽3",
      },
      {
        subId: 5,
        horizontal: require("../images/product/description/聯名合作/連衣連・扭扭運動好蔬活/印花帽子/花椰菜菜子裡的小白蟲先生/花椰菜菜子裡的小白蟲先生4.jpg"),
        name: "花椰菜帽4",
      },
      {
        subId: 6,
        horizontal: require("../images/product/description/聯名合作/連衣連・扭扭運動好蔬活/印花帽子/花椰菜菜子裡的小白蟲先生/花椰菜菜子裡的小白蟲先生5.jpg"),
        name: "花椰菜帽5",
      },
      {
        subId: 7,
        horizontal: require("../images/product/description/聯名合作/連衣連・扭扭運動好蔬活/印花帽子/花椰菜菜子裡的小白蟲先生/花椰菜菜子裡的小白蟲先生6.jpg"),
        name: "花椰菜帽6",
      },
      {
        subId: 8,
        text: "| 雙面帽特色 |\n＃兩面都能戴\n超強雙面帽！兩面都能戴的可可愛愛！\n一面刺繡，一面印花\n印花裡有細節魔鬼哦！\n每頂都有隱藏版聯名腦袋人偶，找找看他在花椰菜園幹嘛～～\n＃不怕風吹的掛繩\n每頂皆附掛繩～不怕被風吹\n好好的扭扭運動出門去交遊\n一年四季皆可戴",
      },
      {
        subId: 9,
        horizontal: require("../images/product/description/聯名合作/連衣連・扭扭運動好蔬活/印花帽子/花椰菜菜子裡的小白蟲先生/花椰菜菜子裡的小白蟲先生5.jpg"),
        name: "花椰菜帽5",
      },
      {
        subId: 10,
        text: "（淺色雙面實戴）",
      },
      {
        subId: 11,
        horizontal: require("../images/product/description/聯名合作/連衣連・扭扭運動好蔬活/印花帽子/花椰菜菜子裡的小白蟲先生/花椰菜菜子裡的小白蟲先生6.jpg"),
        name: "花椰菜帽6",
      },
      {
        subId: 12,
        text: "（深色雙面實戴）",
      },
    ],
    information: [
      {
        subId: 1,
        text: "材質 | 棉布\n尺寸 | 頭圍適合52~54cm",
      },
    ],
  },
];

export default products;
