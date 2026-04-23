<template>

    <div class="interaction default-side-padding scroll-y w-full h-full flex flex-column gap-lg">

        <div 
            class="interaction-basic-information w-full flex bg-color-brand-three color-brand-two rounded-lg p-md gap-lg"
            style="
                border: 1px solid var(--color-brand-four);
                height: 60px;
            "
        >
            <div class="flex h-full aspect-ratio">
                <MiscTierDisplay
                    :tier="getSelectedNode?.tier"
                    class="rounded-md"
                    style="
                        border: 3px solid var(--color-brand-two);
                    "
                />
            </div>
            <div class="flex flex-column">
                <p class="font-lg">{{ getSelectedNode?.name }}</p>
                <p class="font-sm o-3-4">{{ getSelectedNode?.author }}</p>
            </div>
        </div>

        <ActionTravel
            v-if="getSelectedNode?.interaction?.type === 'travel'"
        />

        <ActionRefine
            v-if="getSelectedNode?.interaction?.type === 'refine'"
            :refineTier="getSelectedNode?.tier"
            :refineTypes="getSelectedNode?.refine_types || []"
        />

        <ActionCraft
            v-if="getSelectedNode?.interaction?.type === 'craft'"
        />

        <GameHold
            v-if="getSelectedNode?.interaction?.type === 'hold'"
        />

        <ModalBasic
            v-if="getSelectedItem"
            cancel-button="Voltar"
            @cancel-action="removeSelectedItem()"
        >
            <ViewModalDetails
                v-if="getSelectedItem.display_types.includes('overview')"
                :item="getSelectedItem"
            />
            <ViewModalCollect
                v-if="getSelectedItem.display_types.includes('collect')"
                :item="getSelectedItem"
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
import * as Game from "@/components/Game"

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
        ...View,
        ...Game
    },
    methods: {
        removeSelectedItem(){
            return useInteractionStore().removeSelectedItem();
        }
    },
    computed: {
        getSelectedNode(){
            return useExplorationStore().getSelectedNode
        },
        getSelectedItem(){
            return useInteractionStore().getSelectedItem
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
