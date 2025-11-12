<template>

    <div class="interaction scroll-y w-full h-full flex flex-column gap-xlg">

        <CardOverview
            :background="getSelectedCard?.background"
            :display="getSelectedCard?.display"
        />

        <div class="interaction-basic-information w-full flex bg-color-brand-two rounded-md p-md gap-lg">
            <MiscTierDisplay
                :tier="getSelectedCard?.tier || 0"
            />
            <div class="flex flex-column">
                <p class="font-lg">{{ getSelectedCard?.name }}</p>
                <p class="font-sm o-3-4">{{ getSelectedCard?.author }}</p>
            </div>
        </div>

    </div>

</template>

<script>

import { useExplorationStore } from "@/stores/exploration.js"

import * as Button from "@/components/Button"
import * as Misc from "@/components/Misc"
import * as Card from "@/components/Card"

export default {
    data(){
        return{
        }
    },
    components: {
        ...Misc,
        ...Card,
        ...Button
    },
    methods: {
    },
    computed: {
        getSelectedCard(){
            return useExplorationStore().getSelectedCard
        }
    },
    created(){
    }
}

</script>

<style lang="scss">


</style>
