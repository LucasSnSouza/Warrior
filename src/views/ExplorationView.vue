<template>

    <div class="exploration w-full h-full flex flex-column gap-xlg">

        <div class="exploration-card relative w-full gap-md flex scroll-x">

            <div class="exploration-card-controls flex w-full absolute">

                <ButtonBasic
                    class="p-lg rounded-md"
                    style="
                        transform: scaleX(-1);
                        margin-left: -15px;
                    "
                    @click="previousCard()"
                >
                    <MiscIcon
                        icon="styled-arrow-icon"
                        class="bg-color-brand-three"
                        :size="[16,16]"
                    />
                </ButtonBasic>

                <ButtonBasic
                    class="p-lg rounded-md"
                    style="
                        margin-right: -15px;
                    "
                    @click="nextCard()"
                >
                    <MiscIcon
                        icon="styled-arrow-icon"
                        class="bg-color-brand-three"
                        :size="[16,16]"
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
        nextCard() {
            this.exploration_index++;
            if (this.exploration_index >= this.exploration_cards.length) {
                this.exploration_index = 0;
            }
        },
        previousCard() {
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
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
        }
    }

}

</style>
