<template>

    <div class="modal-basic-wrapper p-xlg absolute w-full h-full y-center flex">

        <div class="modal-basic-panel w-full">
            <div class="modal-basic-informations flex flex-column h-full p-md">
                <slot/>
            </div>
            <div class="modal-basic-actions flex gap-md p-md">
    
                <ButtonBasic
                    class="w-full p-lg rounded-md color-brand-three bg-none"
                    @click="$emit('cancel-action')"
                >
                    <p>Cancelar</p>
                </ButtonBasic>
    
                <ButtonBasic
                    class="w-full p-lg rounded-md bg-color-brand-three color-brand-two"
                    @click="$emit('confirm-action')"
                >
                    <p>Confirmar</p>
                </ButtonBasic>
                
            </div>
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
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 5;

    .modal-basic-panel{

        .modal-basic-informations{
            background: white;
            border-top-left-radius: var(--scale-brand-md);
            border-top-right-radius: var(--scale-brand-md);
        }

        .modal-basic-actions{
            background: rgb(245, 245, 245);
            border-bottom-left-radius: var(--scale-brand-md);
            border-bottom-right-radius: var(--scale-brand-md);
        }

    }
}

</style>