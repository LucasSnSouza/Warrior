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

        <ModalBasic
            v-if="selectedItem?.display == 'details'"
            cancel-button="Voltar"
            @cancel-action="removeSelectedItemOnStorage"
        >
            <ViewModalDetails
                :item="selectedItem"
            />
        </ModalBasic>

        <ModalBasic
            v-if="selectedItem?.display == 'crafting'"
            cancel-button="Voltar"
            confirm-button="Criar"
            @cancel-action="removeSelectedItemOnStorage"
            @confirm-action="addItemTodo(selectedItem, amount_craft_item)"
        >
            <ViewModalCraft
                :item="selectedItem"
                @amount-change="amount_craft_item = $event"
            />
        </ModalBasic>

    </div>

</template>

<script>

import { useExplorationStore } from "@/stores/exploration.js"
import { useSystemStore } from '@/stores/system.js'
import { useItemsStore } from '@/stores/items.js'
import { useGameStore } from '@/stores/game.js'

import * as Button from "@/components/Button"
import * as Misc from "@/components/Misc"
import * as Card from "@/components/Card"
import * as Action from "@/components/Action"
import * as Modal from "@/components/Modal"
import * as View from "@/components/View"

export default {
    data(){
        return{
            amount_craft_item: 0
        }
    },
    components: {
        ...Misc,
        ...Card,
        ...Button,
        ...Action,
        ...Modal,
        ...View
    },
    methods: {
        removeSelectedItemOnStorage(){
            useItemsStore().removeSelectedItem()
        },
        addItemTodo(item, amount){
            const data = {
                ...item,
                uid: crypto.randomUUID(),
                amount: amount,
                author: useGameStore().getSelectedProfile?.name,
                createdAt: Date.now(),
                readyAt: this.generateCraftingTime(amount, item?.tier, item?.production_time),
            }
            useGameStore().addCraftQueue(data)
        },
        generateCraftingTime(amount, tier, production_time){
            const createdAt = Date.now()
            return createdAt + ((production_time * amount * tier) * 1000)
        }
    },
    computed: {
        getSelectedCard(){
            return useExplorationStore().getSelectedCard
        },
        selectedItem(){
            return useItemsStore().getSelectedItem
        },
        getCraftQueue(){
            return useGameStore().getCraftQueue
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
