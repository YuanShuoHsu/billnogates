// 商品圖片大小建議 72dpi 1440 x 1080 = 4 : 3 .jpg
const products = [
  {
    id: 1,
    name: "花椰菜菜子裡的小白蟲先生1｛ 深/淺 ｝",
    dimensions: {
      S: 180,
      M: 1080,
      L: 880,
    },
    colors: {
      深色: "#000",
      淺色: "#ccc",
    },
    images: {
      main: require("../images/product/photo/聯名合作/連衣連・扭扭運動好蔬活/印花帽子/花椰菜菜子裡的小白蟲先生/花椰菜菜子裡的小白蟲先生1.jpg"),
      gallery: [
        {
          image: require("../images/product/photo/聯名合作/連衣連・扭扭運動好蔬活/印花帽子/花椰菜菜子裡的小白蟲先生/花椰菜菜子裡的小白蟲先生1.jpg"),
          name: "花椰菜帽1",
        },
        {
          image: require("../images/product/photo/聯名合作/連衣連・扭扭運動好蔬活/印花帽子/花椰菜菜子裡的小白蟲先生/花椰菜菜子裡的小白蟲先生2.jpg"),
          name: "花椰菜帽2",
        },
        {
          image: require("../images/product/photo/聯名合作/連衣連・扭扭運動好蔬活/印花帽子/花椰菜菜子裡的小白蟲先生/花椰菜菜子裡的小白蟲先生3.jpg"),
          name: "花椰菜帽3",
        },
        {
          image: require("../images/product/photo/聯名合作/連衣連・扭扭運動好蔬活/印花帽子/花椰菜菜子裡的小白蟲先生/花椰菜菜子裡的小白蟲先生4.jpg"),
          name: "花椰菜帽4",
        },
      ],
      description: [
        {
          image: require("../images/product/photo/聯名合作/連衣連・扭扭運動好蔬活/印花帽子/花椰菜菜子裡的小白蟲先生/花椰菜菜子裡的小白蟲先生1.jpg"),
          name: "花椰菜帽1",
        },
      ],
      information: [
        {
          image: require("../images/product/photo/聯名合作/連衣連・扭扭運動好蔬活/印花帽子/花椰菜菜子裡的小白蟲先生/花椰菜菜子裡的小白蟲先生2.jpg"),
          name: "花椰菜帽2",
        },
      ],
    },
  },
];

export default products;
