<template>

    <div class="navigation scroll-y w-full h-full flex flex-column gap-lg">

        <div class="w-full flex flex-column gap-md">
            
            <ButtonBasic
                v-for="(region, region_index) in getWorld?.locations"
                class="p-sm rounded-md gap-md bg-color-brand-two w-full flex x-start"
                style="
                    border: 1px solid var(--color-brand-four);
                    height: 50px;
                "
                :index="region_index"
                @click="setSelectedRegion(region), $router.push({ path: '/exploration' })"
            >
                <div class="flex gap-md y-center">
                    <div
                        class="rounded"
                        style="
                            margin-left: 5px;
                            padding: 2px;
                            height: 50%;
                            background-color: color-mix(in srgb, red 50%, transparent);
                        " 
                    >
                        <div
                            class="rounded h-full"
                            style="
                                padding: 2px;
                                background-color: red;
                            "
                        >
    
                        </div>
                    </div>
                    <div class="flex flex-column gap-sm x-center">
                        <p class="font-md">{{ region.name }}</p>
                    </div>
                </div>
                <div>

                </div>
            </ButtonBasic>

        </div>

    </div>

</template>

<script>

import { useExplorationStore } from "@/stores/exploration.store.js"
import { useSystemStore } from '@/stores/system.store.js'
import { useWorldStore } from '@/stores/world.store.js'
import { useItemStore } from '@/stores/item.store.js'
import { useGameStore } from '@/stores/game.store.js'

import * as Button from "@/components/Button"
import * as Misc from "@/components/Misc"
import * as Card from "@/components/Card"
import * as Action from "@/components/Action"
import * as Modal from "@/components/Modal"
import * as View from "@/components/View"

export default {
    data(){
        return{
        }
    },
    components: {
        ...Misc,
        ...Card,
        ...Button,
        ...Action,
        ...Modal,
        ...View
    },
    methods: {
        setSelectedRegion(region){
            useWorldStore().setSelectedRegion(region)
        }
    },
    computed: {
        getWorld(){
            return useWorldStore().getWorld
        }
    },
    created(){
    }
}

</script>

<style lang="scss">

</style>
