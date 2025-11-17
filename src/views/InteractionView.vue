<template>

    <div class="interaction scroll-y w-full h-full flex flex-column gap-xlg">

        <CardOverview
            v-if="false"
            :background="getSelectedCard?.internal.background"
            :display="getSelectedCard?.internal.display"
        />

        <div class="interaction-basic-information w-full flex bg-color-brand-two rounded-md p-md gap-lg">
            <MiscTierDisplay
                :tier="getSelectedCard?.tier"
            />
            <div class="flex flex-column">
                <p class="font-lg">{{ getSelectedCard?.name }}</p>
                <p class="font-sm o-3-4">{{ getSelectedCard?.author }}</p>
            </div>
        </div>

        <ActionTravel
            v-if="getSelectedCard?.interactions?.travel"
        />

        <ActionRefine
            v-if="getSelectedCard?.interactions?.refine"
            :refineTier="getSelectedCard?.tier"
            :refineTypes="getSelectedCard?.refine_types || []"
        />

        <ActionCraft
            v-if="getSelectedCard?.interactions?.craft"
        />

    </div>

</template>

<script>

import { useExplorationStore } from "@/stores/exploration.js"

import * as Button from "@/components/Button"
import * as Misc from "@/components/Misc"
import * as Card from "@/components/Card"
import * as Action from "@/components/Action"

export default {
    data(){
        return{
        }
    },
    components: {
        ...Misc,
        ...Card,
        ...Button,
        ...Action
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

.interaction{

    .interaction-information{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }

}


</style>
