<template>

    <button
        class="button-item w-full flex flex-column gap-md bg-none"
    >
        <div class="flex bg-color-brand-two rounded-md p-md gap-md">
            <div class="">
                <MiscTierDisplay
                    :tier="item?.tier"
                />
            </div>
            <div class="w-full flex flex-column x-center y-start">
                <p class="font-lg">{{ item?.name }}</p>
                <p v-if="item?.author" class="font-sm o-3-4">{{ item?.author }}</p>
            </div>
            <div class="flex gap-md">
                <div 
                    class="bg-color-brand-three p-md rounded-sm h-full aspect-ratio flex x-center y-center"
                    @click="setItemInStorage(item)"
                >
                    <MiscIcon
                        icon="details-icon"
                        class="bg-color-brand-two"
                        :size="[20,20]"
                    />
                </div>
                <div class="bg-color-brand-three p-md rounded-sm h-full aspect-ratio flex x-center y-center">
                    <MiscIcon
                        icon="fire-icon"
                        class="bg-color-brand-two"
                        :size="[20,20]"
                    />
                </div>
            </div>
        </div>
    </button>

</template>

<script>

import { useItemsStore } from '@/stores/items.js'

import * as Misc from "@/components/Misc"
import * as Card from "@/components/Card"

export default{
    data(){
        return{

        }
    },
    props: {
        item: {
            type: Object,
            default: () => {}
        },
    },
    components: {
        ...Misc,
        ...Card
    },
    methods:{
        setItemInStorage(item){
            useItemsStore().setSelectedItem(item)
        }
    }
}

</script>

<style lang="scss">

.button-item{
    border: none;
}

</style>