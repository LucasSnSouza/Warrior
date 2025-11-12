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

        <div class="interaction-information w-full gap-md">

            <div 
                v-if="getSelectedCard?.damage"
                class="information-container flex x-start y-center color-brand-two gap-md"
            >
                <div class="information-icon p-lg bg-color-brand-two rounded-md">
                    <MiscIcon
                        icon="sword-icon"
                        class="bg-color-brand-three"
                        :size="[16,16]"
                    />
                </div>
                <p>00</p>
            </div>

            <div 
                v-if="getSelectedCard?.defense"
                class="information-container flex x-start y-center color-brand-two gap-md"
            >
                <div class="information-icon p-lg bg-color-brand-two rounded-md">
                    <MiscIcon
                        icon="shield-icon"
                        class="bg-color-brand-three"
                        :size="[16,16]"
                    />
                </div>
                <p>00</p>
            </div>

            <div 
                v-if="getSelectedCard?.durability"
                class="information-container flex x-start y-center color-brand-two gap-md"
            >
                <div class="information-icon p-lg bg-color-brand-two rounded-md">
                    <MiscIcon
                        icon="heart-icon"
                        class="bg-color-brand-three"
                        :size="[16,16]"
                    />
                </div>
                <p>00</p>
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

.interaction{

    .interaction-information{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }

}


</style>
