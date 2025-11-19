<template>

    <div class="profile flex flex-column gap-xlg">

        <div 
            class="flex flex-column gap-sm color-brand-two"
            style="padding-top: var(--scale-brand-xlg);"
        >
            <p class="font-xlg">Profiles</p>
        </div>

        <div 
            class="profiles-controller-buttons hidden bg-color-brand-two rounded-lg p-md flex flex-column y-center"
            style="box-shadow: 4px 4px 10px #00000022;"
        >

            <ButtonBasic
                class="flex justify-between p-lg w-full bg-none gap-md y-center"
            >
                <MiscIcon
                    icon="crown-icon"
                    class="bg-color-brand-three"
                    :size="[20,20]"
                />
                <p class="text-start w-full">Atualizar para o Premium</p>
                <MiscIcon
                    icon="styled-arrow-icon"
                    class="bg-color-brand-one o-half"
                    :size="[15,15]"
                />
            </ButtonBasic>
            <MiscDivision class="w-3-4"/>
            <ButtonBasic
                class="flex justify-between p-lg w-full bg-none gap-md y-center"
                @click="$router.push({ path: '/profile-creator' })"
            >
                <MiscIcon
                    icon="fire-icon"
                    class="bg-color-brand-three"
                    :size="[20,20]"
                />
                <p class="text-start w-full">Criar nova conta</p>
                <MiscIcon
                    icon="styled-arrow-icon"
                    class="bg-color-brand-one o-half"
                    :size="[15,15]"
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
                class="w-full flex flex-column"
            >
                <ButtonBasic
                    v-for="(profile, profile_index) in list_profiles"
                    class="flex justify-between w-full bg-none gap-md y-center"
                    style="
                        padding-right: var(--scale-brand-md);
                    "
                    :index="profile_index"
                    @click="$router.push({ path: '/exploration' })"
                >
                    <MiscTierDisplay
                        :tier="profile.tier"
                        style="
                            width: 48px;
                        "
                    />
                    <p class="font-md text-start w-full">{{ profile.name }}</p>
                    <MiscIcon
                        icon="styled-arrow-icon"
                        class="bg-color-brand-one o-half"
                        :size="[15,15]"
                    />
                </ButtonBasic>
            </div>        
        </div>

    </div>

</template>

<script>

import { Storage } from "@/utils/storage.js"

import * as Button from "@/components/Button"
import * as Misc from "@/components/Misc"

export default{
    data(){
        return{
            list_profiles: [
                {
                    name: "Usario 00",
                    power: 300,
                    tier: 2
                }
            ],
            game_name: import.meta.env.VITE_GAME_NAME
        }
    },
    components: {
        ...Button,
        ...Misc
    },
    created(){
        //this.list_profiles = Storage.get("game-system").data.profiles
    }
}

</script>

<style lang="scss">

</style>