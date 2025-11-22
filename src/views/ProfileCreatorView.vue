<template>

    <div class="profile-creator flex flex-column x-end gap-lg">


        <div 
            class="flex flex-column gap-sm color-brand-two"
        >
            <p class="font-xlg">Novo Perfil</p>
            <p class="font-md o-3-4">Precisamos de algumas informações para criar seu perfil.</p>
        </div>

        <div class="w-full flex flex-column y-center">
            <InputSelect
            />
        </div>

        <div class="w-full flex flex-column y-center">
            <ButtonBasic
                class="p-lg w-full bg-color-brand-two font-md text-start rounded-md"
                style="box-shadow: 2px 2px 8px #00000022; z-index: 2;"
                @click="profile_form.usePassword = !profile_form.usePassword"
            >
                <p>Usar proteção de PIN</p>
            </ButtonBasic>
            <div
                style="width: 90%;"
                v-if="profile_form.usePassword"
            >
                <InputBasic
                    class="w-full bg-color-brand-two p-lg"
                    style="
                        border-bottom-left-radius: var(--scale-brand-lg);
                        border-bottom-right-radius: var(--scale-brand-lg);
                    "
                    placeholder="Insira um pin de 6 Digitos"
                />
            </div>
        </div>

    </div>

</template>

<script>

import { Storage } from "@/utils/storage.js"

import * as Button from "@/components/Button"
import * as Input from "@/components/Input"
import * as Misc from "@/components/Misc"

export default{
    data(){
        return{
            profile_form: {
                usePassword: false 
            },
            list_profiles: [],
            game_name: import.meta.env.VITE_GAME_NAME
        }
    },
    components: {
        ...Button,
        ...Misc,
        ...Input
    },
    created(){
        this.list_profiles = Storage.get("game-system").data.profiles
    }
}

</script>

<style lang="scss">

</style>