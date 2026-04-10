<template>

    <div 
        class="app h-full flex flex-column bg-color-brand-two"
    >

        <div class="app-root hidden flex y-center w-full h-full">

            <div 
                class="app-navigation h-full"
                :class="{ 'shifted ': getComplementary }"
            >

                <ButtonBasic 
                    class="bg-color-brand-two rounded-lg p-lg"
                    style="box-shadow: 2px 2px 8px #00000022;"
                    @click="toggleComplementary()"
                >
                    <MiscIcon
                        icon="others-apps-icon"
                        class="bg-color-brand-three o-3-4"
                        :size="[18,18]"
                    />
                </ButtonBasic>

            </div>

            <div
                class="app-container h-full scroll-y shadow-sm"
                style="
                    min-width: 100%;
                "
                :class="[getTheme, $route.meta.background, { 'shifted ': getComplementary }]"
            >
                <div class="app-header">
                    <div
                        v-if="$route.meta.header"
                        class="flex p-xlg"
                        style="justify-content: space-between;"
                    >
                        <div class="flex gap-md y-center">
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
                            <div class="flex y-center h-full">
                                <MiscTierDisplay
                                    :tier="0"
                                    class="rounded-lg aspect-ratio shadow-sm"
                                    style="
                                        height: 100%;
                                        border: 4px solid var(--color-brand-two);
                                    "
                                />
                                <div 
                                    class="flex y-center bg-color-brand-two"
                                    style="
                                        border-top-right-radius: var(--scale-brand-lg);
                                        border-bottom-right-radius: var(--scale-brand-lg);
                                        height: 65%;
                                        padding-left: 12px;
                                        margin-left: -2px;
                                        width: 128px;
                                    "
                                >
                                    <p class="font-md">Region Name</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ButtonBasic 
                                class="bg-color-brand-two rounded-lg p-lg"
                                style="box-shadow: 2px 2px 8px #00000022;"
                                @click="toggleComplementary()"
                            >
                                <MiscIcon
                                    icon="others-apps-icon"
                                    class="bg-color-brand-three o-3-4"
                                    :size="[18,18]"
                                />
                            </ButtonBasic>
                        </div>
                    </div>
                </div>
                <div class="app-information p-xlg">
                    <RouterView/>
                </div>
            </div>
            
        </div>


    </div>

</template>

<script>

import { RouterLink, RouterView } from 'vue-router'

import { useSystemStore } from '@/stores/system.js'
import { useItemsStore } from '@/stores/items.js'
import { useGameStore } from '@/stores/game.js'

import { Storage } from '@/scripts/storage.js'

import * as Button from "@/components/Button"
import * as Modal from "@/components/Modal"
import * as Card from "@/components/Card"
import * as Misc from "@/components/Misc"
import * as View from "@/components/View"
import { h } from 'vue'

export default {
    data(){
        return{
        }
    },
    components: {
        ...Button,
        ...Misc,
        ...Modal,
        ...Card,
        ...View
    },
    methods: {
        toggleComplementary(){
            useSystemStore().toggleComplementary()
        }
    },
    computed: {
        getTheme(){
            return useSystemStore().getTheme
        },
        getComplementary(){
            return useSystemStore().getComplementary
        }
    },
    mounted(){
        if(!Storage.exists("game-system")){
            Storage
            .create("game-system")
            .merge({
                game: import.meta.env.VITE_GAME_NAME,
                version: import.meta.env.VITE_GAME_VERSION,
                last_profile: "",
                profiles: []
            })
            .save()
        }
    },
    created(){
        // Every 1 Second
        window.setInterval(() => {
            if(useGameStore().getCraftQueue.length > 0){
                useGameStore().getCraftQueue.forEach((item, index) => {
                    if(Date.now() >= item.readyAt){
                        useGameStore().completeCraftQueueItem(
                            { 
                                ...item, 
                                equiped: false 
                            }
                        )
                    }
                })
            }
        }, 1000);
        // When game exit
        window.addEventListener("beforeunload", () => {
            Storage
                .get('game-system')
                .replaceInList(
                    "profiles", 
                    "uid", 
                    useGameStore().getSelectedProfile.uid,
                    useGameStore().getSelectedProfile
                )
                .save()
        });
    }
}

</script>

<style lang="scss">

.app{

    .app-navigation{
        transition: 0.5s;
        min-width: 0%;

        &.shifted {
            min-width: 70%;
            padding: var(--scale-brand-xlg);
            overflow: hidden;
        }
    }

    .app-container{
        transition: .5s;

        &.shifted {
            border-top-left-radius: var(--scale-brand-xlg);
            border-bottom-left-radius: var(--scale-brand-xlg);
            transform: translateY(var(--scale-brand-xlg));
            height: 85%;
        }

    }

    .app-information{
        padding-top: 0px;
        padding-bottom: 0px;
    }

}

</style>
