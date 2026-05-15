export const nodes_types = [
    {
        name: "Arvore de Carvalho",
        tier: 0,
        author: "World",
        type: "wood",
        biomes: ["plain", "florest"],
        storage: [],
        queue: [],
        available: true,
        visuals: {
            default: "/Images/Nodes/oak-tree.png",
            depleted: "/Images/Nodes/Depleted/depleted-oak-tree.png"
        },
        interaction: {
            type: "hold",
        },
        drops: [
            {
                uid: "976d3dc4-fed5-468d-ab86-491019089313",
                weight: 80
            }
        ]
    },
    {
        name: "Rocha",
        tier: 0,
        author: "World",
        type: "stone",
        biomes: ["plain", "florest"],
        storage: [],
        queue: [],
        available: true,
        visuals: {
            default: "/Images/Nodes/stone-geode.png",
            depleted: "/Images/Nodes/Depleted/depleted-stone-geode.png"
        },
        interaction: {
            type: "hold",
        },
        drops: [
            {
                uid: "9ffbb22a-5b09-4e81-8b68-1d27668fcf99",
                weight: 80
            }
        ]
    }
]