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
                internal: "weight",
                name: "Peso",
                value: 5
            }
        ],
        settings: {
            isStackable: false,
            isEquippable: true,
        }
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
                internal: "weight",
                name: "Peso",
                value: 5
            }
        ],
        settings: {
            isStackable: false,
            isEquippable: true,
        }
    }
]