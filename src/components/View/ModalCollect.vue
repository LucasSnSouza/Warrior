<template>
    <div class="flex gap-md x-center y-center">
        <ButtonBasic
            class="bg-color-brand-two p-md rounded-md w-full"
            style="
                border: 1px solid var(--color-brand-four);
            "
            @click="addItem()"
        >
            <p class="color-brand-three font-md">Coletar</p>
        </ButtonBasic>
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