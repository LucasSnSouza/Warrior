<template>

    <div class="refine-wrapper w-full flex flex-column gap-md">
        <div
            v-if="refines_list.length > 0"
            class="w-full flex flex-column gap-lg"
        >
            <div 
                class="flex x-start y-center gap-lg"
                @click="refine_list_status = !refine_list_status"
            >
                <p 
                    class="color-brand-three font-md"
                    style="
                        letter-spacing: 2px;
                    "
                >
                    Refinamento
                </p>
                <MiscIcon
                    icon="styled-arrow-icon"
                    class="bg-color-brand-three"
                    style="margin-top: 4px;"
                    :style="{
                        transform: refine_list_status ? 'rotate(-90deg)' : 'rotate(90deg)'
                    }"
                    :size="[12,12]"
                />
            </div>
            <div 
                v-if="refine_list_status"
                class="flex flex-column w-full gap-md"
            >
                <ButtonItem
                    v-for="(item, index) in refines_list"
                    :item="item"
                    :allowed-actions="['craft', 'details']"
                    :index="index"
                />
            </div>
        </div>
        <div
            v-if="getCraftQueue.length > 0"
            class="w-full flex flex-column gap-md"
        >
            <div 
                class="flex x-start y-center gap-lg"
                @click="process_queue_status = !process_queue_status"
            >
                <p 
                    class="color-brand-three font-md"
                    style="
                        letter-spacing: 2px;
                    "
                >
                    Refinamento
                </p>
                <MiscIcon
                    icon="styled-arrow-icon"
                    class="bg-color-brand-three"
                    style="margin-top: 4px;"
                    :style="{
                        transform: process_queue_status ? 'rotate(-90deg)' : 'rotate(90deg)'
                    }"
                    :size="[12,12]"
                />
            </div>
            <div 
                v-if="process_queue_status"
                class="flex flex-column w-full gap-md"
            >
                <ButtonItem
                    v-for="(item, index) in getCraftQueue"
                    :item="item"
                    :allowed-actions="['details']"
                    :index="index"
                />
                
                    <!--<div class="flex gap-md">
                        <p class="font-sm o-half">{{ new Date(item.readyAt).toLocaleString("pt-br") }}</p>
                    </div>-->
            </div>  
        </div>
    </div>

</template>

<script>

import { raw, refined } from "@/assets/items/resources.js"

import { useGameStore } from '@/stores/game.js'

import * as Button from "@/components/Button"
import * as Misc from "@/components/Misc"

export default{
    data(){
        return{
            refines_list: [],
            refine_list_status: true,
            process_queue_status: false,
        }
    },
    props: {
        refineTier: {
            type: Number,
            default: 0
        },
        refineTypes: {
            type: Array,
            default: () => []
        }
    },
    components:{
        ...Button,
        ...Misc,
    },
    computed: {
        getCraftQueue(){
            let craftQueaeFiltered = useGameStore().getCraftQueue
            .filter(item => this.refineTypes.includes(item.type))
            return craftQueaeFiltered
        }
    },
    mounted(){
        this.refines_list = refined
        .filter(item => this.refineTypes.includes(item.type) && item.tier <= this.refineTier)
        .map((item, index) => (
            {
                ...item,
                panel: false
            }
        ))
    }
}

</script>

<style lang="scss">

</style>