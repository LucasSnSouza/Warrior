<template>

    <div class="profile flex flex-column gap-xlg">

        <div 
            class="flex flex-column gap-sm color-brand-two"
            style="padding-top: var(--scale-brand-xlg);"
        >
            <p 
                class="w-half"
                style="
                    font-size: 60px;
                    font-weight: bold;
                "
            >
                {{ game_name }}
            </p>
            <p class="font-md o-3-4">Bem vindo! junte-se a nós nessa aventura e desbravamento do novo mundo.</p>
        </div>

        <div 
            class="profiles-controller-buttons hidden bg-color-brand-two rounded-lg p-md flex flex-column y-center"
            style="box-shadow: 4px 4px 10px #00000022;"
        >

            <ButtonBasic
                class="flex justify-between p-lg w-full bg-none color-brand-one gap-md y-center"
            >
                <MiscIcon
                    icon="crown-icon"
                    class="bg-color-brand-three"
                    :size="[20,20]"
                />
                <p class="text-start w-full">Atualizar para o Premium</p>
                <MiscIcon
                    icon="styled-arrow-icon"
                    class="bg-color-brand-one o-1-4"
                    :size="[12,12]"
                />
            </ButtonBasic>

            <ButtonBasic
                class="flex justify-between p-lg w-full bg-none color-brand-one gap-md y-center"
                @click="$router.push({ path: '/profile-creator' })"
            >
                <MiscIcon
                    icon="fire-icon"
                    class="bg-color-brand-three"
                    :size="[18,18]"
                />
                <p class="text-start w-full">Criar novo personagem</p>
                <MiscIcon
                    icon="styled-arrow-icon"
                    class="bg-color-brand-one o-1-4"
                    :size="[12,12]"
                />
            </ButtonBasic>

            <ButtonBasic
                class="flex justify-between p-lg w-full bg-none color-brand-one gap-md y-center"
                @click="$router.push({ path: '/world-creator' })"
            >
                <MiscIcon
                    icon="place-icon"
                    class="bg-color-brand-three"
                    :size="[18,18]"
                />
                <p class="text-start w-full">Criar novo mundo</p>
                <MiscIcon
                    icon="styled-arrow-icon"
                    class="bg-color-brand-one o-1-4"
                    :size="[12,12]"
                />
            </ButtonBasic>

        </div>

        <div 
            class="profiles-controller-buttons hidden bg-color-brand-two rounded-lg p-md flex flex-column y-center"
            style="box-shadow: 4px 4px 10px #00000022;"
        >
            <div 
                v-if="list_profiles.length == 0"
                class="w-full flex flex-column gap-md y-center p-lg"
            >
                <img 
                    class="w-half"
                    src="/arts/warning-no-profiles.png">
                </img>
                <p class="o-half font-sm text-center">
                    Infelizmente não encontramos nenhuma conta vinculado a este dispositivo, crie uma agora e embarque nessa aventura.
                </p>
                <ButtonBasic
                    class="bg-color-brand-three p-lg rounded-md color-brand-two w-full"
                    @click="$router.push({ path: '/profile-creator' })"
                >
                    <p>criar conta</p>
                </ButtonBasic>
            </div>
            <div
                v-else
                class="buttons-accounts w-full flex flex-column gap-md"
            >
                <div
                    v-for="(profile, profile_index) in list_profiles"
                    class="flex flex-column y-center"
                    :index="profile_index"
                >
                    <ButtonBasic
                        class="flex justify-between p-md w-full bg-none color-brand-one rounded gap-md y-center"
                        @click="isWorldChoicesOpened = true, setSelectedProfile(profile)"
                    >
                        <MiscTierDisplay
                            :tier="profile.tier"
                            class="rounded-md"
                            style="
                                width: 50px;
                                border: 3px solid var(--color-brand-four);
                            "
                        />
                        <p class="font-md text-start w-full">{{ profile.name }}</p>
                        <MiscIcon
                            icon="styled-arrow-icon"
                            class="bg-color-brand-one o-1-4"
                            :size="[12,12]"
                        />
                    </ButtonBasic>
                </div>
            </div>        
        </div>

        <div class="modals">

            <ModalBasic
                v-if="isWorldChoicesOpened"
                cancel-button="Voltar"
                @cancel-action="isWorldChoicesOpened = false"
            >
                <div>
                    <h1 class="font-lg color-brand-three">Mundos</h1>
                    <p class="font-md o-half">Escolha o mundo em que deseja vincular seu personagem</p>
                </div>
                <div class="flex flex-column gap-md w-full">
                    <div
                        v-for="(item, index) in list_worlds"
                        class="p-lg rounded-md"
                        style="
                            border: 1px solid var(--color-brand-four);
                        "
                        :index="index"
                        @click="$router.push({ path: '/exploration' })"
                    >
                        <p class="font-md">{{ item.name }}</p>
                    </div>
                </div>                
            </ModalBasic>

        </div>

    </div>

</template>

<script>

import { useSystemStore } from '@/stores/system.js'
import { useGameStore } from '@/stores/game.js'

import { Storage } from "@/scripts/storage.js"

import * as Button from "@/components/Button"
import * as Misc from "@/components/Misc"
import * as Modal from "@/components/Modal"

export default{
    data(){
        return{
            list_profiles: [],
            list_worlds: [],
            isWorldChoicesOpened: false,
            game_name: import.meta.env.VITE_GAME_NAME
        }
    },
    components: {
        ...Button,
        ...Misc,
        ...Modal
    },
    methods: {
        toggleTheme(){
            useSystemStore().toggleTheme()
        },
        setSelectedProfile(profile){
            useGameStore().setSelectedProfile(profile)
        }
    },
    created(){
        this.list_profiles = Storage.get("game-system").data.profiles
        this.list_worlds = Storage.get("game-system").data.worlds
    }
}

</script>

<style lang="scss">

</style>