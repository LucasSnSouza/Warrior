export const raw = [
    {
        name: "Estanho",
        description: "",
        type: "metal",
        tier: 1,
    },
    {
        name: "Cobre",
        description: "",
        type: "metal",
        tier: 2,
    },
    {
        name: "Ferro",
        description: "",
        type: "metal",
        tier: 3,
    },
    {
        name: "Pedra Bruta",
        description: "",
        type: "stone",
        tier: 0,
    },
    {
        name: "Arenito",
        description: "",
        type: "stone",
        tier: 1,
    },
    {
        name: "Xisto",
        description: "",
        type: "stone",
        tier: 2,
    },
    {
        name: "Dolomita",
        description: "",
        type: "stone",
        tier: 3,
    },
    {
        name: "Obsidiana",
        description: "",
        type: "stone",
        tier: 4,
    }
]

export const refined = [
    {
        internal: "iron-ingot",
        name: "Barra de Estanho",
        description: "Metal facilmente maleavel e em abundancia torna essa Barra barata de se produzir.",
        type: "metal",
        tier: 1,
        production_time: 5,
        visuals: {
            background: "/images/tiers/tier-1.png",
            display: "/images/resources/tin-ingot.png"
        },
        stats: [
            {
                internal: "weight",
                name: "Peso",
                value: 2
            }
        ],
        skills: [],
        specials: [],
        requires: [
            {
                name: "Carvão",
                amount: 5,
            },
            {
                name: "Minerio de Estanho",
                amount: 10,
            }
        ]
    },
    {
        name: "Barra de Cobre",
        description: "Um Metal duro porém menos resistente que o ferro, para barras intermediarias de qualidade",
        type: "metal",
        tier: 2,
        production_time: 10,
        visuals: {
            background: "/images/tiers/tier-2.png",
            display: "/images/resources/cooper-ingot.png"
        },
        stats: [
            {
                internal: "weight",
                name: "Peso",
                value: 2
            }
        ],
        skills: [],
        specials: [],
        requires: [
            {
                name: "Carvão",
                amount: 25,
            },
            {
                name: "Barra de Estanho",
                amount: 5,
            },
            {
                name: "Minerio de Cobre",
                amount: 10,
            }
        ]
    },
    {
        name: "Barra de Ferro",
        description: "Reconhecido por muitos por sua resistencia incrivel e durabilidade.",
        type: "metal",
        tier: 3,
        production_time: 15,
        visuals: {
            background: "/images/tiers/tier-3.png",
            display: "/images/resources/iron-ingot.png"
        },
        stats: [
            {
                internal: "weight",
                name: "Peso",
                value: 2
            }
        ],
        skills: [],
        specials: [],
        requires: [
            {
                name: "Carvão",
                amount: 50,
            },
            {
                name: "Barra de Estanho",
                amount: 5,
            },
            {
                name: "Minerio de Ferro",
                amount: 10,
            }
        ]
    },
    {
        name: "Barra de Damasco",
        description: "",
        type: "metal",
        tier: 4,
        production_time: 20,
        visuals: {
            background: "/images/tiers/tier-4.png",
            display: "/images/resources/iron-ingot.png"
        },
        stats: [
            {
                internal: "weight",
                name: "Peso",
                value: 2
            }
        ],
        skills: [],
        specials: [],
        requires: []
    },
    {
        name: "Bloco de Arenito",
        description: "",
        type: "stone",
        tier: 1,
        visuals: {
            background: "/images/tiers/tier-1.png",
            display: "/images/resources/sandstone-brick.png"
        },
        stats: [
            {
                internal: "weight",
                name: "Peso",
                value: 2
            }
        ],
        skills: [],
        specials: [],
        requires: []
    },
    {
        name: "Bloco de Xisto",
        description: "",
        type: "stone",
        tier: 2,
        visuals: {
            background: "/images/tiers/tier-2.png",
            display: "/images/resources/shale-brick.png"
        },
        stats: [
            {
                internal: "weight",
                name: "Peso",
                value: 2
            }
        ],
        skills: [],
        specials: [],
        requires: []
    },
    {
        name: "Bloco de Dolomita",
        description: "",
        type: "stone",
        tier: 3,
        visuals: {
            background: "/images/tiers/tier-3.png",
            display: "/images/resources/dolomite-brick.png"
        },
        stats: [
            {
                internal: "weight",
                name: "Peso",
                value: 2
            }
        ],
        skills: [],
        specials: [],
        requires: []
    },
    {
        name: "Bloco de Obsidiana",
        description: "",
        type: "stone",
        tier: 4,
        visuals: {
            background: "/images/tiers/tier-4.png",
            display: "/images/resources/obsidian-brick.png"
        },
        stats: [
            {
                internal: "weight",
                name: "Peso",
                value: 2
            }
        ],
        skills: [],
        specials: [],
        requires: []
    },
]