const NAVS = [
    {
        id: 1,
        nav: "品牌故事",
        link: "story",
    },
    {
        id: 2,
        nav: "商店",
        link: "store",
        layers: [
            {
                subId: 1,
                subNav: "2-1",
                subLink: "2-1",
                subLayers: [
                    {
                        grandId: 1,
                        grandNav: "2-1-1",
                        grandLink: "2-1-1",
                    },
                    {
                        grandId: 2,
                        grandNav: "2-1-2",
                        grandLink: "2-1-2",
                    }
                ]
            },
            {
                subId: 2,
                subNav: "2-2",
                subLink: "2-2"
            },
            {
                subId: 3,
                subNav: "2-3",
                subLink: "2-3"
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
        link: "footprint",
        layers: [
            {
                subId: 1,
                subNav: "4-1",
                subLink: "4-1",
                subLayers: [
                    {
                        grandId: 1,
                        grandNav: "4-1-1",
                        grandLink: "4-1-1",
                    },
                    {
                        grandId: 2,
                        grandNav: "4-1-2",
                        grandLink: "4-1-2",
                    },
                    {
                        grandId: 3,
                        grandNav: "4-1-3",
                        grandLink: "4-1-3",
                    }
                ]
            },
            {
                subId: 2,
                subNav: "4-2",
                subLink: "4-2"
            },
            {
                subId: 3,
                subNav: "4-3",
                subLink: "4-3",
                subLayers: [
                    {
                        grandId: 1,
                        grandNav: "4-3-1",
                        grandLink: "4-3-1",
                    },
                    {
                        grandId: 2,
                        grandNav: "4-3-2",
                        grandLink: "4-3-2",
                    }
                ]
            },
            {
                subId: 4,
                subNav: "4-4",
                subLink: "4-4"
            }
        ]
    }
]

export default NAVS