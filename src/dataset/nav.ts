const navs = [
  {
    id: 1,
    link: "story",
    nav: "品牌故事",
  },
  {
    id: 2,
    link: "store",
    nav: "商店",
    layers: [
      {
        subId: 1,
        subLink: "lifeArt",
        subNav: "生活玩藝",
      },
      {
        subId: 2,
        subLink: "handmade",
        subNav: "手作材料組",
        subLayers: [
          {
            grandId: 1,
            grandLink: "weaving",
            grandNav: "巧手織布",
          },
          {
            grandId: 2,
            grandLink: "knitting",
            grandNav: "巧心編織",
          },
        ],
      },
      {
        subId: 3,
        subLink: "grandmaStyle",
        subNav: "阿嬤系少女",
        subLayers: [
          {
            grandId: 1,
            grandLink: "grandmaHook",
            grandNav: "阿嬤的鉤針",
          },
        ],
      },
      {
        subId: 4,
        subLink: "co-branding",
        subNav: "聯名合作",
        subLayers: [
          {
            grandId: 1,
            grandLink: "lian1lian",
            grandNav: "連衣連・扭扭運動好蔬活",
          },
        ],
      },
    ],
  },
  // {
  //     id: 3,
  //     link: "blog"
  //     nav: "部落格",
  // },
  // {
  //     id: 4,
  //     link: "footprint"
  //     nav: "小比足跡",
  // }
];

export default navs;
