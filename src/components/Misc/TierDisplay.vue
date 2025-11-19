<template>

    <div 
        class="tier-display-wrapper aspect-ratio p-sm rounded-sm x-center y-center h-full"
        :class="this.class"
        :style="{ backgroundImage: `url(${tiers_background_types[tier]})` }"
    >
        <p class="color-brand-two text-center">{{ getTierByNumber(tier) }}</p>
    </div>

</template>

<script>

export default{
    data(){
        return{
            tiers_letters_types: [
                "I",
                "II",
                "III",
                "IV",
                "V"
            ],
            tiers_background_types: [
                "/images/tiers/tier-0.png",
                "/images/tiers/tier-1.png",
                "/images/tiers/tier-2.png",
                "/images/tiers/tier-3.png",
                "/images/tiers/tier-4.png"
            ]
        }
    },
    props: {
        class:{
            type: String,
            default: ""
        },
        tier: {
            type: Number,
            default: 0
        }
    },
    methods:{
        getTierByNumber(tier){
            return this.tiers_letters_types[tier]
        }
    }
}

</script>

<style lang="scss">

.tier-display-wrapper{
    background-size: cover;
    background-position: center;
}

</style>