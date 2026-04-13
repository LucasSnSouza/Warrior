<template>

    <button
        class="button-item w-full flex flex-column gap-md bg-none"
    >
        <div 
            class="flex bg-color-brand-two rounded-lg p-sm gap-md"
            style="
                border: 1px solid var(--color-brand-four);
                height: 52px;
            "
        >
            <div class="flex w-full gap-md">
                <div 
                    class="h-full aspect-ratio hidden rounded-md"
                    style="
                        border: 4px solid var(--color-brand-four);
                    "
                >
                    <MiscTierDisplay
                        :tier="item?.tier"
                    />
                </div>
                <div class="h-full w-3-4 flex flex-column x-center y-start">
                    <p class="font-md">{{ item?.name }}</p>
                    <p v-if="item?.author" class="font-sm o-3-4">{{ item?.author }}</p>
                </div>
            </div>
            <div 
                class="flex gap-md x-end"
                @click="setItemInStorage(item, 'details')"
            >
                <MiscIcon
                    icon="external-link-icon"
                    class="bg-color-brand-one o-half"
                    style="margin-top: 5px;margin-right: 5px;"
                    :size="[12,12]"
                />
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
        allowedActions: {
            type: Array,
            default: () => []
        }
    },
    components: {
        ...Misc,
        ...Card
    },
    methods:{
        setItemInStorage(item, display_reference){
            useItemsStore().setSelectedItem({
                ...item,
                display: display_reference
            })
        }
    }
}

</script>

<style lang="scss" scoped>

.button-item{
    border: none;
}

</style>