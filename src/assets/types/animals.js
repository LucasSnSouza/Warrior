export const animals_types = [
    {
        name: "Veyra",
        tier: 0,
        author: "World",
        classification: "canine",
        types: ["animal", "neutral"],
        biomes: ["plain", "florest"],
        storage: [],
        queue: [],
        available: true,
        visuals: {
            default: "/Images/Animals/animal-fox.png",
            depleted: "/Images/Animals/Depleted/depleted-animal-fox.png"
        },
        sounds: {
            default: "",
            attack: "",
            damage: ""
        },
        attributes: {
            health: 30,
            armor: 5,
            damage: 6,
            agility: 25
        },
        interaction: {
            type: "duel",
        },
        drops: [
            {
                uid: "976d3dc4-fed5-468d-ab86-491019089313",
                weight: 80
            }
        ]
    }
]