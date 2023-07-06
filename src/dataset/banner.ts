// 商品圖片大小建議 72dpi 1920 x 1080 = 16 : 9
interface Slide {
  id: number;
  image: string;
  name: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: require("../images/banner/slides/手創展.png"),
    name: "手創展",
  },
  {
    id: 2,
    image: require("../images/banner/slides/聯名漁夫帽.png"),
    name: "聯名漁夫帽",
  },
  {
    id: 3,
    image: require("../images/banner/slides/漫時編織預購.png"),
    name: "漫時編織預購",
  },
];

export interface Bullet {
  id: number;
  image: string;
  name: string;
}

const bullets: Bullet[] = [
  {
    id: 1,
    image: require("../images/banner/bullets/腦袋按鈕1.svg").default,
    name: "腦袋按鈕1",
  },
  {
    id: 2,
    image: require("../images/banner/bullets/腦袋按鈕2.svg").default,
    name: "腦袋按鈕2",
  },
  {
    id: 3,
    image: require("../images/banner/bullets/腦袋按鈕3.svg").default,
    name: "腦袋按鈕3",
  },
];

export { slides, bullets };
