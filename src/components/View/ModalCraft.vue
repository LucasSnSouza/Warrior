<template>

    <div class="w-full flex flex-column gap-md">

        <p class="font-md text-center" >Requisitos</p>

        <div 
            v-if="item?.requires"
            class="flex gap-xlg x-center"
        >

            <div
                v-for="(item, index) in getProcessedItems"
                class="bg-color-brand-three color-brand-two rounded-md flex x-start y-center gap-md"
                style="
                    height: 38px;
                    padding: 3px;
                    padding-right: 12px;
                "
                :index="index"
            >
                <div
                    class="aspect-ratio bg-color-brand-two rounded-md flex y-center x-center shadow-sm"
                    style="
                        margin-left: -18px;
                        border: 1px solid var(--color-brand-four);
                        height: 100%;
                    "
                >
                    <p class="font-sm color-brand-one" style="margin-top: -2px;">{{ item.require_amount }}</p>
                </div>
                <p class="font-sm">{{ item.name }}</p>        
            </div>

        </div>

        <ButtonBasic
            class="bg-color-brand-two p-md rounded-md w-full"
            style="
                border: 1px solid var(--color-brand-four);
            "
            @click="createSelectedItem()"
        >
            <p class="color-brand-three font-md">Criar</p>
        </ButtonBasic>

    </div>

</template>

<script>

import { raw, refined } from "@/assets/types/resources.js"

import utils from "@/scripts/utilities.js"

import { useInteractionStore } from '@/stores/interaction.store.js'

import * as Card from "@/components/Card"
import * as Misc from "@/components/Misc"
import * as Button from "@/components/Button"
import * as Input from "@/components/Input"

export default{
    data(){
        return{
            amount: 0
        }
    },
    props:{
        item: {
            type: Object,
            default: () => {}
        }
    },
    components: {
        ...Card,
        ...Misc,
        ...Button,
        ...Input
    },
    computed: {
        getProcessedItems() {
            return this.item.requires.map(require => {
                let itemFound = utils.get_item_by_uid(raw, require.uid)

                if (!itemFound) {
                    itemFound = utils.get_item_by_uid(refined, require.uid)
                }

                if (!itemFound) {
                    return null
                }
                return {
                    ...itemFound,
                    require_amount: require.amount
                }
            }).filter(Boolean)
        }
    },
    methods: {
        createSelectedItem(){
            useInteractionStore().createSelectedItem();
        }
    }
}

</script>

<style lang="scss">


</style>