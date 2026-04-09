<template>

    <div class="flex x-center">
        <CardOverview
            :background="item?.visuals.background"
            :display="item?.visuals.display"
            style="
                width: 30%;
                margin-top: -15%;
                box-shadow: 2px 2px 4px #00000011;
            "
        />
    </div>
    <div class="flex flex-column">
        <p class="font-lg text-center color-brand-three">
            {{ item?.name }}
        </p>
        <p class="font-md text-center color-brand-one o-half">
            {{ item?.description }}
        </p>
    </div>
    <MiscDivision/>
    <div class="flex gap-md">
        <ButtonBasic
            class="p-lg bg-color-brand-three rounded-md aspect-ratio h-full"
            @click="amount--"
        >
            <MiscIcon
                icon="minus-icon"
                class="bg-color-brand-two"
                :size="[16,16]"
            />
        </ButtonBasic>
        <InputBasic
            v-model="amount"
            class="font-md rounded-md p-md w-full"
            input-class="text-center"
            type="number"
            style="
                border: 1px solid var(--color-brand-three);
                box-shadow: 2px 2px 8px #00000022;
            "
            :value="amount"
        />
        <ButtonBasic
            class="p-lg bg-color-brand-three rounded-md aspect-ratio h-full"
            @click="amount++"
        >
            <MiscIcon
                icon="plus-icon"
                class="bg-color-brand-two"
                :size="[16,16]"
            />
        </ButtonBasic>
    </div>

</template>

<script>

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
    emits: [
        "amount-change"
    ],
    watch: {
        amount(newValue) {
            this.$emit('amount-change', newValue)
        }
    },
    components: {
        ...Card,
        ...Misc,
        ...Button,
        ...Input
    }
}

</script>

<style lang="scss">


</style>