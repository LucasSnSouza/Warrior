export const raw = [
    {
        uid: "976d3dc4-fed5-468d-ab86-491019089313",
        name: "Carvalho",
        author: "World",
        description: "Um recurso abundante em todas as regiões e escencial para a produção das primeiras ferramentas.",
        types: ["resource", "wood"],
        tier: 0,
        equipped: false,
        visuals: {
            default: "/Images/Resources/oak-wood.png"
        },
        attributes: [
            {
                type: "weight",
                name: "Peso",
                value: 1
            }
        ],
        settings: {
            isStackable: true,
            isEquippable: false,
        }
    },
    {
        uid: "9ffbb22a-5b09-4e81-8b68-1d27668fcf99",
        name: "Pedra",
        author: "World",
        description: "Um recurso abundante em todas as regiões e escencial para a produção das primeiras ferramentas.",
        types: ["resource", "stone"],
        tier: 0,
        equipped: false,
        visuals: {
            default: "/Images/Resources/stone-rock.png"
        },
        attributes: [
            {
                type: "weight",
                name: "Peso",
                value: 1
            }
        ],
        settings: {
            isStackable: true,
            isEquippable: false,
        }
    },
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
            default: "/images/resources/tin-ingot.png"
        },
        attributes: [
            {
                type: "weight",
                name: "Peso",
                value: 2
            }
        ],
        requires: [
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
            default: "/images/resources/cooper-ingot.png"
        },
        attributes: [
            {
                internal: "weight",
                name: "Peso",
                value: 2
            }
        ],
        requires: [
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
            default: "/images/resources/iron-ingot.png"
        },
        attributes: [
            {
                internal: "weight",
                name: "Peso",
                value: 2
            }
        ],
        requires: [
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
            default: "/images/resources/iron-ingot.png"
        },
        attributes: [
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
            default: "/images/resources/sandstone-brick.png"
        },
        attributes: [
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
            default: "/images/resources/shale-brick.png"
        },
        attributes: [
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
            default: "/images/resources/dolomite-brick.png"
        },
        attributes: [
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
            default: "/images/resources/obsidian-brick.png"
        },
        attributes: [
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