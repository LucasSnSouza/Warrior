<template>
    <div class="flex gap-md x-center y-center">
        <ButtonBasic
            class="bg-color-brand-three p-md rounded-md w-half"
            @click="addItem()"
        >
            <p class="color-brand-two font-md">Coletar</p>
        </ButtonBasic>
        <p class="font-md o-half text-start">{{ getSelectedItem?.amount || 1 }} items na lista</p>
    </div>
</template>

<script>

import { useInteractionStore } from '@/stores/interaction.store.js'
import { useProfileStore } from '@/stores/profile.store.js'

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
        getSelectedItem(){
            return useInteractionStore().getSelectedItem
        }
    },
    methods: {
        addItem(){
            useProfileStore().addItemToInventory(this.getSelectedItem)
        }
    }
}

</script>

<style lang="scss">


</style>