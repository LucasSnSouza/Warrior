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
            <p class="font-xlg">Novo mundo</p>
            <p class="font-md o-3-4 w-half">Você podera associar seus personagens a esse novo mundo.</p>
        </div>

        <div class="w-full flex flex-column y-center">
            <InputBasic
                v-model="world_form['name']"
                class="p-lg w-full bg-color-brand-two color-brand-three ghost font-md text-start rounded-md flex"
                input-class="p-sm font-md"
                placeholder="Insira o nome do mundo ..."
                :value="world_form['name']"
            />
        </div>

        <div class="w-full flex y-center">
            <ButtonBasic
                class="p-lg w-full bg-color-brand-two font-md text-start rounded-md flex y-center gap-md"
                :style="{
                    border: world_form?.useAging ? '3px solid var(--color-brand-three)' : '1px solid var(--color-brand-four)'
                }"
                @click="world_form.useAging = !world_form.useAging"
            >
                <MiscIcon
                    icon="padlock-icon"
                    class="bg-color-brand-three"
                    :size="[16,16]"
                />
                <div class="flex flex-column x-start">
                    <p
                        style="
                            margin-top: 3px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        "
                    >
                        Usar sistema de envelhecimento
                    </p>
                    <p class="font-sm o-half">Você morrera de velhice em 30 dias</p>
                </div>
            </ButtonBasic>
        </div>

        <div class="w-full flex flex-column y-start">
            <ButtonBasic
                class="p-lg w-half bg-color-brand-three color-brand-two font-md text-start rounded-md flex y-center gap-md"
                style="box-shadow: 2px 2px 8px #00000022; z-index: 2;"
                @click="createWorld()"
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
            world_form: {
            },
        }
    },
    components: {
        ...Button,
        ...Misc,
        ...Input
    },
    methods: {
        createWorld(){
            Storage
            .get("game-system")
            .push("worlds", 
                {
                    name: this.world_form.name,
                    uid: crypto.randomUUID(),
                    settings: {
                        useAging: this.world_form?.useAging || false
                    }
                })
            .save()
            this.$router.push({ path: '/' })
        }
    },  
    created(){
    }
}

</script>

<style lang="scss">

</style>