<template>

    <div class="exploration default-side-padding w-full h-full flex flex-column gap-xlg">

        <div 
            v-if="getSelectedRegion"
            class="exploration-card relative w-full gap-md flex scroll-x"
        >

            <div 
                v-if="!getAwait"
                class="exploration-card-controls flex w-3-4 absolute gap-sm y-center"
            >

                <ButtonBasic
                    class="bg-color-brand-two p-lg rounded-lg aspect-ratio h-full"
                    style="
                        transform: scaleX(-1);
                        margin-left: -15px;
                    "
                    @click="previousPlace()"
                >
                    <MiscIcon
                        icon="styled-arrow-icon"
                        class="bg-color-brand-three"
                        :size="[18,18]"
                    />
                </ButtonBasic>

                <div class="w-full p-md bg-color-brand-two rounded-lg flex gap-md y-center">

                    <MiscTierDisplay
                        :tier="exploration_cards[exploration_index]?.tier"
                        class="rounded-md"
                        style="
                            border: 2px solid var(--color-brand-four);
                            width: 34px;
                        "
                    />
                    <div class="flex flex-column">
                        <p class="font-md">{{ getSelectedRegion.places[getPlaceIndex].nodes[getNodeIndex].name }}</p>
                        <p class="font-sm o-half">{{ getSelectedRegion.places[getPlaceIndex].name }}</p>
                    </div>
                    
                </div>

                <ButtonBasic
                    class="bg-color-brand-two p-lg rounded-lg aspect-ratio h-full"
                    style="
                        margin-right: -15px;
                    "
                    @click="nextPlace()"
                >
                    <MiscIcon
                        icon="styled-arrow-icon"
                        class="bg-color-brand-three"
                        :size="[18,18]"
                    />
                </ButtonBasic>

            </div>

            <CardBasic
                style="margin-top: 10px;"
                :background="getSelectedRegion.places[getPlaceIndex].background"
                :display="getSelectedRegion.places[getPlaceIndex].nodes[getNodeIndex].image"
                :key="getPlaceIndex"
                @click="$router.push( { path: '/interaction' } ), storeSelectedNode(getSelectedRegion.places[getPlaceIndex].nodes[getNodeIndex])"
            />

        </div>

    </div>

</template>

<script>

import { useExplorationStore } from "@/stores/exploration.store.js"
import { useWorldStore } from "@/stores/world.store.js"
import { useSystemStore } from "@/stores/system.store.js"

import { sleep } from "@/scripts/time.js"

import * as Button from "@/components/Button"
import * as Misc from "@/components/Misc"
import * as Card from "@/components/Card"

export default {
    data(){
        return{
            exploration_index: 0,
            exploration_cards: []
        }
    },
    components: {
        ...Misc,
        ...Card,
        ...Button
    },
    methods: {
        nextPlace(){
            useWorldStore().nextPlace();
        },
        previousPlace(){
            useWorldStore().previousPlace();
        },
        storeSelectedNode(node){
            useExplorationStore().setSelectedNode(node)
        }
    },
    computed: {
        getAwait(){
            return useSystemStore().getAwait
        },
        getSelectedRegion(){
            return useWorldStore().getSelectedRegion
        },
        getPlaceIndex(){
            return useWorldStore().getPlaceIndex
        },
        getNodeIndex(){
            return useWorldStore().getNodeIndex
        }
    },
    created(){
        
    },
    async mounted(){
        if(!this.getSelectedRegion){
            this.$router.push({ path: '/navigation' })
        }
    }
}

</script>

<style lang="scss">

.exploration{

    .exploration-card{
        scroll-snap-type: x mandatory;
        overflow: visible;

        .exploration-card-controls{
            justify-content: space-between;
            bottom: -12%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
            animation: fade-in .5s ease;
        }
    }

}

@keyframes fade-in {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

</style>
