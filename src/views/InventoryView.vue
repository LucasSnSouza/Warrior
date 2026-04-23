<template>

    <div class="inventory default-side-padding scroll-y w-full h-full flex flex-column gap-lg">

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
import { useInteractionStore } from '@/stores/interaction.store.js'
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
    },
    computed: {
    },
    created(){
    }
}

</script>

<style lang="scss">

</style>
