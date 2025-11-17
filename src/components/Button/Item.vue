<template>

    <button
        class="button-item w-full flex flex-column gap-md bg-none"
    >
        <div class="flex bg-color-brand-two rounded-md p-md gap-md">
            <div class="">
                <MiscTierDisplay
                    :tier="tier"
                />
            </div>
            <div class="w-full flex flex-column x-center y-start">
                <p class="font-lg">{{ name }}</p>
                <p v-if="author" class="font-sm o-3-4">{{ author }}</p>
            </div>
            <div class="">
                <div class="bg-color-brand-three p-md rounded-sm h-full aspect-ratio flex x-center y-center">
                    <MiscIcon
                        icon="fire-icon"
                        class="bg-color-brand-two"
                        :size="[20,20]"
                    />
                </div>
            </div>
        </div>
        <div 
            v-if="panel"
            class="flex gap-md"
        >
            <div
                class="aspect-ratio"
                style="width: 128px;"
            >
                <CardOverview
                    :background="visuals?.background"
                    :display="visuals?.display"
                />       
            </div>
            <div class="w-full flex flex-column gap-md">
                <p class="text-start font-sm color-brand-two">{{ description }}</p>
                <MiscDivision/>
                <div
                    v-for="(require, require_index) in requeries"
                    class="bg-color-brand-two p-sm rounded-md flex gap-md y-center"
                >
                    <p 
                        class="bg-color-brand-three p-sm rounded-sm font-sm color-brand-two"
                        style="width: 20%;"
                    >
                        {{ require.amount }}
                    </p>
                    <p class="font-sm">{{ require.name }}</p>
                </div>
            </div>
        </div>
    </button>

</template>

<script>

import * as Misc from "@/components/Misc"
import * as Card from "@/components/Card"

export default{
    data(){
        return{

        }
    },
    props: {
        name: {
            type: String
        },
        description: {
            type: String,
            default: null
        },
        author: {
            type: String,
            default: null
        },
        tier: {
            type: Number
        },
        visuals: {
            type: Object,
            default: () => {}
        },
        requeries: {
            type: Array,
            default: []
        },
        panel: {
            type: Boolean
        }
    },
    components: {
        ...Misc,
        ...Card
    }
}

</script>

<style lang="scss">

.button-item{
    border: none;
}

</style>