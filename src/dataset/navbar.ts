const NAVS = [
    {
        id: 1,
        nav: "品牌故事",
        link: "story"
    },
    {
        id: 2,
        nav: "商店",
        link: "store",
        layers: [
            {
                subId: 1,
                subNav: "生活玩藝",
                subLink: "lifeArt",
            },
            {
                subId: 2,
                subNav: "手作材料組",
                subLink: "handmade",
                subLayers: [
                    {
                        grandId: 1,
                        grandNav: "巧手織布",
                        grandLink: "weaving",
                    },
                    {
                        grandId: 2,
                        grandNav: "巧心編織",
                        grandLink: "knitting",
                    },
                ]
            },
            {
                subId: 3,
                subNav: "阿嬤系少女",
                subLink: "grandmaStyle",
                subLayers: [
                    {
                        grandId: 1,
                        grandNav: "阿嬤的鉤針",
                        grandLink: "grandmaHook",
                    },
                ]
            },
            {
                subId: 4,
                subNav: "聯名合作",
                subLink: "co-branding",
                subLayers: [
                    {
                        grandId: 1,
                        grandNav: "連衣連・扭扭運動好蔬活",
                        grandLink: "lian1lian",
                    },
                ]
            }
        ]
    },
    // {
    //     id: 3,
    //     nav: "部落格",
    //     link: "blog"
    // },
    // {
    //     id: 4,
    //     nav: "小比足跡",
    //     link: "footprint"
    // }
]

export default NAVS