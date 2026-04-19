<template>

    <div 
        class="tier-display-wrapper aspect-ratio p-sm flex x-center y-center h-full w-full"
        :class="this.class"
        :style="{ backgroundImage: `url(${tiers_background_types[tier]})` }"
    >
        <MiscIcon
            :icon="getTierByNumber(tier).reference"
            class="bg-color-brand-two"
            :size="getTierByNumber(tier).size"
            :key="tier"
        />
    </div>

</template>

<script>

import MiscIcon from "./Icon.vue"

export default{
    data(){
        return{
            tiers_icons_registry: [
                {
                    reference: "tierA-icon",
                    size: [12,12]
                },
                {
                    reference: "tierB-icon",
                    size: [12,12]
                },
                {
                    reference: "tierC-icon",
                    size: [16,16]
                },
                {
                    reference: "tierD-icon",
                    size: [16,16]
                },
                {
                    reference: "tierE-icon",
                    size: [14,14]
                },
            ],
            tiers_background_types: [
                "/Images/Tiers/tier-0.png",
                "/Images/Tiers/tier-1.png",
                "/Images/Tiers/tier-2.png",
                "/Images/Tiers/tier-3.png",
                "/Images/Tiers/tier-4.png"
            ]
        }
    },
    components: {
        MiscIcon
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
            return this.tiers_icons_registry[tier]
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