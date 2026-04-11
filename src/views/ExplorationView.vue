<template>

    <div class="exploration w-full h-full flex flex-column gap-xlg">

        <div class="exploration-card relative w-full gap-md flex scroll-x">

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
                    @click="previousCard()"
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
                    <p class="font-md">{{ exploration_cards[exploration_index]?.name }}</p>
                    
                </div>

                <ButtonBasic
                    class="bg-color-brand-two p-lg rounded-lg aspect-ratio h-full"
                    style="
                        margin-right: -15px;
                    "
                    @click="nextCard()"
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
                :background="exploration_cards[exploration_index]?.external.background"
                :display="exploration_cards[exploration_index]?.external.display"
                :key="exploration_index"
                @click="$router.push( { path: '/interaction' } ), storeSelectedCard(exploration_cards[exploration_index])"
            />

        </div>

    </div>

</template>

<script>

import { useExplorationStore } from "@/stores/exploration.js"
import { useSystemStore } from "@/stores/system.js"

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
        async nextCard() {
            await sleep(1500);
            this.exploration_index++;
            if (this.exploration_index >= this.exploration_cards.length) {
                this.exploration_index = 0;
            }
        },
        async previousCard() {
            await sleep(1500);
            this.exploration_index--;
            if (this.exploration_index < 0) {
                this.exploration_index = this.exploration_cards.length - 1;
            }
        },
        storeSelectedCard(card){
            useExplorationStore().setSelectedCard(card)
        }
    },
    computed: {
        getAwait(){
            return useSystemStore().getAwait
        }
    },
    async mounted(){
        this.exploration_cards = await useExplorationStore().fetchRegion("granhelm")
        if(useExplorationStore().getSelectedCard){
            const selectedCard = useExplorationStore().getSelectedCard
            this.exploration_index = this.exploration_cards.findIndex(
                card => card.name === selectedCard.name
            )
        }
    },
    created(){
        
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
