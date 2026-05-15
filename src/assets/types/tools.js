export const tools = [
    {
        name: "Machado Iniciante",
        description: "Um machado inicial para coletas basicas, com baixo custo e uma boa eficiencia.",
        types: ["tool", "axe"],
        crafting: 1,
        tier: 0,
        equipped: false,
        visuals: {
            default: "/Images/Resources/oak-wood.png"
        },
        attributes: [
            {
                type: "weight",
                name: "Peso",
                value: 5
            }
        ],
        settings: {
            isStackable: false,
            isEquippable: true,
        },
        requires: [
            {
                uid: "976d3dc4-fed5-468d-ab86-491019089313",
                amount: 10
            },
            {
                uid: "9ffbb22a-5b09-4e81-8b68-1d27668fcf99",
                amount: 5
            }
        ]
    },
    {
        name: "Picareta Iniciante",
        description: "A primeira picareta que um explorador conseguira, junta baixo custo e boa eficiencia.",
        types: ["tool", "pick"],
        crafting: 1,
        tier: 0,
        equipped: false,
        visuals: {
            default: "/Images/Resources/oak-wood.png"
        },
        attributes: [
            {
                type: "weight",
                name: "Peso",
                value: 5
            }
        ],
        settings: {
            isStackable: false,
            isEquippable: true,
        },
        requires: [
            {
                uid: "976d3dc4-fed5-468d-ab86-491019089313",
                amount: 10
            },
            {
                uid: "9ffbb22a-5b09-4e81-8b68-1d27668fcf99",
                amount: 10
            }
        ]
    },
    {
        name: "Foice Iniciante",
        description: "Barata e eficaz para a colheita de vegetações rasteiras.",
        types: ["tool", "sickle"],
        crafting: 1,
        tier: 0,
        equipped: false,
        visuals: {
            default: "/Images/Resources/oak-wood.png"
        },
        attributes: [
            {
                type: "weight",
                name: "Peso",
                value: 5
            }
        ],
        settings: {
            isStackable: false,
            isEquippable: true,
        },
        requires: [
            {
                uid: "976d3dc4-fed5-468d-ab86-491019089313",
                amount: 15
            },
            {
                uid: "9ffbb22a-5b09-4e81-8b68-1d27668fcf99",
                amount: 3
            }
        ]
    },
    {
        name: "Faca Iniciante",
        description: "Uma ferramenta basica para a coleta de pele e carne de animais.",
        types: ["tool", "knife"],
        crafting: 1,
        tier: 0,
        equipped: false,
        visuals: {
            default: "/Images/Resources/oak-wood.png"
        },
        attributes: [
            {
                type: "weight",
                name: "Peso",
                value: 5
            }
        ],
        settings: {
            isStackable: false,
            isEquippable: true,
        },
        requires: [
            {
                uid: "976d3dc4-fed5-468d-ab86-491019089313",
                amount: 5
            },
            {
                uid: "9ffbb22a-5b09-4e81-8b68-1d27668fcf99",
                amount: 5
            }
        ]
    }
]