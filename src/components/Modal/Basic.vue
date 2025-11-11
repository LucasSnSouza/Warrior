<template>

    <div class="modal-basic-wrapper absolute w-full p-lg bg-color-brand-three flex flex-column justify-between">
        <div 
            v-if="title"
            class="modal-basic-title flex flex-column color-brand-one"
        >
            <h1 class="font-md">{{ title }}</h1>
        </div>
        <div class="modal-basic-contents h-full">
            <slot/>
        </div>
        <div class="modal-basic-buttons flex gap-md">

            <ButtonBasic
                class="w-full p-lg rounded-md bg-color-brand-one"
            >
                <p>Cancel</p>
            </ButtonBasic>

            <ButtonBasic
                class="w-full p-lg rounded-md bg-color-brand-one"
            >
                <p>Submit</p>
            </ButtonBasic>
            
        </div>
    </div>

</template>

<script>

import * as Button from "@/components/Button"

export default{
    data(){
        return{

        }
    },
    components: {
        ...Button
    },
    props: {
        title: {
            type: String,
            default: null
        }
    }
}

</script>

<style lang="scss">

.modal-basic-wrapper{
    height: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 5;
    animation: fade-in 0.1s linear forwards;
}

@keyframes fade-in {
    from{
        height: 0px;
    }to{
        height: calc(50%);
    }
}

</style>