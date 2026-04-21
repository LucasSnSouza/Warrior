<template>

    <div class="duel default-side-padding scroll-y w-full h-full flex flex-column gap-lg">

        <ModalBasic
            v-if="selectedItem?.display == 'details'"
            cancel-button="Voltar"
            @cancel-action="removeSelectedItemOnStorage"
        >
            <ViewModalDetails
                :item="selectedItem"
            />
        </ModalBasic>

    </div>

</template>

<script>

import { useExplorationStore } from "@/stores/exploration.store.js"
import { useSystemStore } from '@/stores/system.store.js'
import { useItemStore } from '@/stores/item.store.js'
import { useGameStore } from '@/stores/game.store.js'

import * as Button from "@/components/Button"
import * as Misc from "@/components/Misc"
import * as Card from "@/components/Card"
import * as Action from "@/components/Action"
import * as Modal from "@/components/Modal"
import * as View from "@/components/View"

export default {
    data(){
        return{
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
            useItemStore().removeSelectedItem()
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
            return useItemStore().getSelectedItem
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

</style>
