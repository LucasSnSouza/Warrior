<template>

    <div class="profile-creator flex flex-column x-end gap-lg">

        <div class="flex" style="padding-top: var(--scale-brand-xlg);">
            <ButtonBasic 
                class="bg-color-brand-two rounded-lg p-lg"
                style="box-shadow: 2px 2px 8px #00000022;"
                @click="$router.back()"
            >
                <MiscIcon
                    icon="styled-arrow-icon"
                    class="bg-color-brand-three o-3-4"
                    style="transform: scaleX(-1);"
                    :size="[18,18]"
                />
            </ButtonBasic>
        </div>

        <div 
            class="flex flex-column gap-sm color-brand-one"
        >
            <p class="font-xlg">Novo Perfil</p>
            <p class="font-md o-3-4 w-half">Precisamos de algumas informações para criar seu novo perfil.</p>
        </div>

        <div class="w-full flex flex-column y-center">
            <InputBasic
                v-model="profile_form['name']"
                class="p-lg w-full bg-color-brand-two color-brand-three ghost font-md text-start rounded-md flex"
                input-class="p-sm font-md"
                placeholder="Insira do personagem ..."
                :value="profile_form['name']"
            />
        </div>

        <div class="w-full flex flex-column y-center">
            <ButtonBasic
                class="p-lg w-full bg-color-brand-two font-md text-start rounded-md flex y-center gap-md"
                style="box-shadow: 2px 2px 8px #00000022; z-index: 2;"
                @click="profile_form.usePassword = !profile_form.usePassword"
            >
                <MiscIcon
                    icon="padlock-icon"
                    class="bg-color-brand-three"
                    :size="[16,16]"
                />
                <p class="p-sm" style="margin-top: 3px;">Usar proteção de PIN</p>
            </ButtonBasic>
            <div
                v-if="profile_form.usePassword"
                class="w-full"
                style=""
            >
                <InputBasic
                    v-model="profile_form['password']"
                    class="w-full bg-color-brand-three color-brand-one p-lg"
                    input-class="color-brand-two"
                    style="
                        border-bottom-left-radius: var(--scale-brand-lg);
                        border-bottom-right-radius: var(--scale-brand-lg);
                    "
                    :value="profile_form['password']"
                />
            </div>
        </div>

        <div class="w-full flex flex-column y-start">
            <ButtonBasic
                class="p-lg w-half bg-color-brand-three color-brand-two font-md text-start rounded-md flex y-center gap-md"
                style="box-shadow: 2px 2px 8px #00000022; z-index: 2;"
                @click="createAccount(), $router.push({ path: '/' })"
            >
                <p class="p-sm">Criar</p>
            </ButtonBasic>
        </div>

    </div>

</template>

<script>

import { Storage } from "@/scripts/storage.js"

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
            list_languages: [
                {
                    name: "Portugues",
                    shortname: "pt-br",
                },
                {
                    name: "English",
                    shortname: "us",
                }
            ],
            game_name: import.meta.env.VITE_GAME_NAME
        }
    },
    components: {
        ...Button,
        ...Misc,
        ...Input
    },
    methods: {
        createAccount(){
            Storage
            .get("game-system")
            .push("profiles", 
                {
                    ...this.profile_form,
                    uid: crypto.randomUUID(),
                    inventory: []
                })
            .save()
        }
    },  
    created(){
        this.list_profiles = Storage.get("game-system").data.profiles
    }
}

</script>

<style lang="scss">

</style>