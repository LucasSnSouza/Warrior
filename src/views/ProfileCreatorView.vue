<template>

    <div class="profile-creator flex flex-column gap-lg">

        <div 
            class="flex flex-column gap-sm color-brand-two"
            style="padding-top: var(--scale-brand-xlg);"
        >
            <div class="flex y-end gap-md">
                <div 
                    class="rounded-sm p-lg bg-color-brand-two"
                    style="transform: scaleX(-1);"
                    @click="$router.push({ path: '/' })"
                >
                    <MiscIcon
                        icon="styled-arrow-icon"
                        class="bg-color-brand-one"
                        :size="[16,16]"
                    />
                </div>
                <p class="font-xlg">Criador de Profile</p>
            </div>
            <p class="font-sm">Crie seu novo profile aqui, todas as contas criadas estão salvas neste dispositivos.</p>
        </div>

        <MiscDivision/>

        <InputBasic
            v-model="profile_datas['name']"
            class="w-full rounded-sm bg-color-brand-two p-lg"
            placeholder="Nome de Personagem"
            :value="profile_datas['name']"
        />

        <ButtonBasic
            class="w-half bg-color-brand-two rounded-sm color-brand-three p-lg"
        >
            <p>Criar</p>
        </ButtonBasic>

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
            profile_datas: {},
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