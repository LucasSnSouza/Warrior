export const weapons = [
    {
        name: "Espada Iniciante",
        description: "",
        types: ["weapon", "sword"],
        tier: 0,
        equipped: false,
        visuals: {
            background: "/Images/Tiers/tier-0.png",
            display: "/Images/Resources/oak-wood.png"
        },
        attributes: [
            {
                type: "weight",
                name: "Peso",
                value: 5
            },
            {
                type: "modifier",
                modifier: "damage",
                name: "Dano",
                value: 20
            },
            {
                type: "modifier",
                modifier: "agility",
                name: "Agilidade",
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
                amount: 1
            },
            {
                uid: "9ffbb22a-5b09-4e81-8b68-1d27668fcf99",
                amount: 1
            }
        ]
    },
    {
        name: "Arco Iniciante",
        description: "",
        types: ["weapon", "bow"],
        tier: 0,
        equipped: false,
        visuals: {
            background: "/Images/Tiers/tier-0.png",
            display: "/Images/Resources/oak-wood.png"
        },
        attributes: [
            {
                type: "weight",
                name: "Peso",
                value: 5
            },
            {
                type: "modifier",
                modifier: "damage",
                name: "Dano",
                value: 10
            },
            {
                type: "modifier",
                modifier: "agility",
                name: "Agilidade",
                value: 10
            }
        ],
        settings: {
            isStackable: false,
            isEquippable: true,
        },
        requires: [
            {
                uid: "976d3dc4-fed5-468d-ab86-491019089313",
                amount: 1
            },
            {
                uid: "9ffbb22a-5b09-4e81-8b68-1d27668fcf99",
                amount: 1
            }
        ]
    }
]