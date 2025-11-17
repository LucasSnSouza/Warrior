<template>

    <div class="refine-wrapper w-full flex flex-column gap-md">
        <p class="color-brand-two font-md">Refinamento</p>
        <div class="flex flex-column w-full gap-md">

            <ButtonItem
                v-for="(item, index) in refines_list"
                :name="item.name"
                :description="item?.description"
                :tier="item.tier"
                :visuals="item.visuals"
                :requeries="item.requires"
                :panel="item.panel"
                :index="index"
                @click="item.panel = !item.panel"
            />

        </div>        
    </div>

</template>

<script>

import { raw, refined } from "@/assets/items/resources.js"

import * as Button from "@/components/Button"
import * as Misc from "@/components/Misc"

export default{
    data(){
        return{
            refines_list: []
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