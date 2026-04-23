export const raw = [
    {
        uid: "57b97065-0b06-4c68-a57c-1a8184049cd2",
        name: "Minério Estanho",
        author: "World",
        description: "Um minério leve e versátil para a produção de ferramentas baratas e eficientes.",
        type: "metal",
        tier: 1,
        visuals: {
            background: "/Images/Tiers/tier-1.png",
            display: "/Images/Resources/tin-ingot.png"
        },
        attributes: [
            {
                internal: "weight",
                name: "Peso",
                value: 1
            }
        ],
        settings: {
            isStackable: true,
        }
    },
    {
        uid: "ffc42446-110b-4076-b58c-8ee1d97eb447",
        name: "Minério Cobre",
        description: "Um dos minérios mais usadas para a produção de ferramentas em massa",
        type: "metal",
        tier: 2,
        visuals: {
            background: "/Images/Tiers/tier-1.png",
            display: "/Images/Resources/tin-ingot.png"
        },
        attributes: [
            {
                internal: "weight",
                name: "Peso",
                value: 1
            }
        ],
        settings: {
            isStackable: true,
        }
    },
    {
        uid: "18d31b13-279d-4e5b-af67-686506333aba",
        name: "Minério Ferro",
        description: "A excelência das ferramentas começa a subir por aqui: alta resistência e muito valor.",
        type: "metal",
        tier: 3,
        visuals: {
            background: "/Images/Tiers/tier-1.png",
            display: "/Images/Resources/tin-ingot.png"
        },
        attributes: [
            {
                internal: "weight",
                name: "Peso",
                value: 1
            }
        ],
        settings: {
            isStackable: true,
        }
    },
    {
        uid: "4229f009-efb1-4c24-84bb-46fabf14ba27",
        name: "Minério Pedra",
        description: "",
        type: "stone",
        tier: 0,
        visuals: {
            background: "/Images/Tiers/tier-1.png",
            display: "/Images/Resources/tin-ingot.png"
        },
        attributes: [
            {
                internal: "weight",
                name: "Peso",
                value: 1
            }
        ],
        settings: {
            isStackable: true,
        }
    },
    {
        uid: "29902470-f2b0-492f-924f-f361c6488826",
        name: "Minério Arenito",
        description: "",
        type: "stone",
        tier: 1,
        visuals: {
            background: "/Images/Tiers/tier-1.png",
            display: "/Images/Resources/tin-ingot.png"
        },
        attributes: [
            {
                internal: "weight",
                name: "Peso",
                value: 1
            }
        ],
        settings: {
            isStackable: true,
        }
    },
    {
        uid: "02684c5c-afa3-4dcd-bf62-6f8e10db5845",
        name: "Minério Xisto",
        description: "",
        type: "stone",
        tier: 2,
        visuals: {
            background: "/Images/Tiers/tier-1.png",
            display: "/Images/Resources/tin-ingot.png"
        },
        attributes: [
            {
                internal: "weight",
                name: "Peso",
                value: 1
            }
        ],
        settings: {
            isStackable: true,
        }
    },
    {
        uid: "71c05bcf-d492-44b5-9db2-28fbfd7e42d4",
        name: "Minério Dolomita",
        description: "",
        type: "stone",
        tier: 3,
        visuals: {
            background: "/Images/Tiers/tier-1.png",
            display: "/Images/Resources/tin-ingot.png"
        },
        attributes: [
            {
                internal: "weight",
                name: "Peso",
                value: 1
            }
        ],
        settings: {
            isStackable: true,
        }
    },
    {
        uid: "93d9edaa-37e1-43bb-981f-4693a6a856b0",
        name: "Minério Obsidiana",
        description: "",
        type: "stone",
        tier: 4,
        visuals: {
            background: "/Images/Tiers/tier-1.png",
            display: "/Images/Resources/tin-ingot.png"
        },
        attributes: [
            {
                internal: "weight",
                name: "Peso",
                value: 1
            }
        ],
        settings: {
            isStackable: true,
        }
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
        name: "Barra de Cobre",
        description: "Um Metal duro porém menos resistente que o ferro, para barras intermediarias de qualidade",
        type: "metal",
        tier: 2,
        production_time: 10,
        visuals: {
            background: "/images/tiers/tier-2.png",
            display: "/images/resources/cooper-ingot.png"
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
            display: "/images/resources/iron-ingot.png"
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
            display: "/images/resources/iron-ingot.png"
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
            display: "/images/resources/sandstone-brick.png"
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
            display: "/images/resources/shale-brick.png"
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
            display: "/images/resources/dolomite-brick.png"
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
            display: "/images/resources/obsidian-brick.png"
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