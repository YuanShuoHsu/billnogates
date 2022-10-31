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
                        grandNav: "巧手織布-企鵝鵝子",
                        grandLink: "penguin",
                    },
                    {
                        grandId: 2,
                        grandNav: "巧手織布-迷你織框",
                        grandLink: "wovenFrame",
                    },
                    {
                        grandId: 3,
                        grandNav: "巧手織布-喬喬貓貓織板",
                        grandLink: "JoJo",
                    },
                    {
                        grandId: 4,
                        grandNav: "巧手織布-恐龍",
                        grandLink: "dinosaur",
                    },
                    {
                        grandId: 5,
                        grandNav: "漫時編織",
                        grandLink: "wanderlust",
                    }
                ]
            },
            {
                subId: 3,
                subNav: "Old'K系列",
                subLink: "old'K",
                subLayers: [
                    {
                        grandId: 1,
                        grandNav: "鉤針小花T(長袖)",
                        grandLink: "penguin",
                    },
                    {
                        grandId: 2,
                        grandNav: "鉤針小花T(短袖)",
                        grandLink: "wovenFrame",
                    },
                    {
                        grandId: 3,
                        grandNav: "漫時編織",
                        grandLink: "wanderlust",
                    }
                ]
            },
            {
                subId: 4,
                subNav: "聯名合作",
                subLink: "co-branding",
                subLayers: [
                    {
                        grandId: 1,
                        grandNav: "印花聯名の小物＿運動小人刺繡片",
                        grandLink: "athletes",
                    },
                    {
                        grandId: 2,
                        grandNav: "印花聯名の帽子＿花椰菜菜子裡的小白蟲先生",
                        grandLink: "cauliflower",
                    },
                    {
                        grandId: 3,
                        grandNav: "印花聯名の帽子＿掉了草的牛番茄",
                        grandLink: "beefTomato",
                    },
                    {
                        grandId: 4,
                        grandNav: "印花聯名の帽子＿跟著腦袋跑操場",
                        grandLink: "runningBrain",
                    },
                    {
                        grandId: 5,
                        grandNav: "印花聯名の帽子__滑倒的秋葵弟弟",
                        grandLink: "slippingOkra",
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        nav: "部落格",
        link: "blog"
    },
    {
        id: 4,
        nav: "小比足跡",
        link: "footprint"
    }
]

export default NAVS