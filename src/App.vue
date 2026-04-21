<template>

    <div 
        class="app h-full flex flex-column bg-color-brand-two"
    >

        <div class="app-root hidden flex y-center w-full h-full">

            <div 
                class="app-navigation h-full hidden"
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
                class="app-container flex flex-column h-full shadow-sm"
                style="
                    min-width: 100%;
                "
                :class="[getTheme, $route.meta.background, { 'shifted ': getComplementary }]"
            >
                <div class="app-header">
                    <div
                        v-if="$route.meta.header"
                        class="flex p-xlg gap-sm"
                        style="
                            justify-content: space-between;
                        "
                    >
                        <div class="flex gap-md">
                            <ButtonBasic
                                class="bg-color-brand-two p-lg rounded-lg shadow-sm"
                                style="
                                    border: 1px solid var(--color-brand-four);
                                "
                                @click="$router.back()"
                            >
                                <MiscIcon
                                    icon="styled-arrow-icon"
                                    class="bg-color-brand-three"
                                    style="
                                        transform: scaleX(-1);
                                    "
                                    :size="[16,16]"
                                />
                            </ButtonBasic>
                            
                            <ButtonBasic
                                class="bg-color-brand-two p-lg rounded-lg shadow-sm"
                                style="
                                    border: 1px solid var(--color-brand-four);
                                "
                                @click="toggleComplementary()"
                            >
                                <MiscIcon
                                    icon="others-apps-icon"
                                    class="bg-color-brand-three"
                                    :size="[16,16]"
                                />
                            </ButtonBasic>
                        </div>


                    </div>
                </div>
                <div class="app-information h-full scroll-y">
                    <RouterView/>
                </div>
                <div 
                    v-if="$route.meta.header && !getComplementary"
                    class="app-actions w-full p-xlg"
                    style="
                        bottom: 0;
                        left: 0;
                    "
                >
                    <div 
                        class="frame-actions bg-color-brand-two rounded-lg x-center y-center flex shadow-sm"
                        style="
                            justify-content: space-between;
                            border: 1px solid var(--color-brand-four);
                            padding: 8px;
                            gap: 40px;
                        "
                    >
                        <div 
                            v-for="(item, index) in navigations"
                            class="action flex relative x-center y-center"
                            :class="{ 'selected': item?.selected}"
                            :index="index"
                            @click="toggleSelectedAction(index), $router.push({ 'path': item.redirect })"
                        >
                            <MiscIcon
                                :icon="item.icon"
                                class="action-icon bg-color-brand-one"
                                :size="[26,26]"
                            />
                            <p 
                                class="action-title absolute font-md rounded bg-color-brand-three color-brand-two"
                                style="
                                    padding: 1px;
                                    padding-left: 12px;
                                    padding-right: 12px;
                                "
                            >{{ item.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>


    </div>

</template>

<script>

import { RouterLink, RouterView } from 'vue-router'

import { useSystemStore } from '@/stores/system.store.js'
import { useItemStore } from '@/stores/item.store.js'
import { useGameStore } from '@/stores/game.store.js'

import { Storage } from '@/scripts/storage.js'

import * as Button from "@/components/Button"
import * as Modal from "@/components/Modal"
import * as Card from "@/components/Card"
import * as Misc from "@/components/Misc"
import * as View from "@/components/View"

export default {
    data(){
        return{
            navigations: [
                {
                    name: "Exploração",
                    icon: "foots-icon",
                    redirect: "/exploration",
                    selected: true
                },
                {
                    name: "Navegação",
                    icon: "foots-icon",
                    redirect: "/navigation",
                    selected: false
                },
                {
                    name: "Inventario",
                    icon: "inventory-icon",
                    redirect: "/inventory",
                    selected: false
                },
                {
                    name: "Construção",
                    icon: "hammer-icon",
                    redirect: "/building",
                    selected: false
                }
            ]
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
        },
        toggleSelectedAction(selected_index){
            this.navigations.forEach((item, index) => {
                item.selected = index === selected_index;
            });
        }
    },
    computed: {
        getTheme(){
            return useSystemStore().getTheme
        },
        getComplementary(){
            return useSystemStore().getComplementary
        },
        getGame(){
            return useGameStore().getGame
        }
    },
    mounted(){
        // When game created
        useGameStore().setGame();

        setInterval(() => {
            Storage
            .get('game-system')
            .replace(
                this.getGame
            )
            .save()
        }, 1000);

        setInterval(() => {
            Storage
            .get('game-system')
            .replace(
                this.getGame
            )
            .save()
        }, 60000);

        // When game exit
        // window.addEventListener("beforeunload", () => {
        //     Storage
        //     .get('game-system')
        //     .replace(
        //         this.getGame
        //     )
        //     .save()
        // });        
    },
    created(){
        if(!Storage.exists("game-system")){
            Storage
            .create("game-system")
            .merge({
                game: import.meta.env.VITE_GAME_NAME,
                version: import.meta.env.VITE_GAME_VERSION,
                last_profile: "",
                profiles: [],
                worlds: []
            })
            .save()
        }
    }
}

</script>

<style lang="scss">

.app{

    .app-navigation{
        transition: 0.25s;
        min-width: 0%;

        &.shifted {
            min-width: 70%;
            padding: var(--scale-brand-xlg);
            overflow: hidden;
        }
    }

    .app-container{
        transition: .25s;

        &.shifted {
            border: 1px solid var(--color-brand-four);
            border-top-left-radius: var(--scale-brand-xlg);
            border-bottom-left-radius: var(--scale-brand-xlg);
            transform: translateY(var(--scale-brand-xlg));
            height: 85%;
        }

        .app-actions{

            .frame-actions{

                .action{

                    transition: .25s;

                    background-color: var(--color-brand-three);
                    padding: var(--scale-brand-md);
                    border-radius: var(--scale-brand-md);

                    .action-icon{
                        transition: .25s;
                        transform: translateY(0%);
                        background-color: var(--color-brand-two);
                    }

                    .action-title{
                        transition: .25s;
                        transform: translateY(0%);
                        opacity: 0;
                    }

                    &.selected{

                        background-color: var(--color-brand-two);

                        .action-icon{
                            transform: translateY(-20%);
                            background-color: var(--color-brand-three);
                        }

                        .action-title{
                            transform: translateY(110%);
                            box-shadow: 2px 2px 12px #00000022;
                            border: 2px solid var(--color-brand-two);
                            opacity: 1;
                        }

                    }

                }

            }

        }

    }

}

</style>
