<template>

    <div class="navigation default-side-padding scroll-y w-full h-full flex flex-column gap-lg">

        <div class="w-full flex flex-column gap-md">
            
            <ButtonBasic
                v-for="(region, region_index) in getWorld?.locations"
                class="p-sm rounded-md gap-md bg-color-brand-two w-full flex justify-between"
                style="
                    border: 1px solid var(--color-brand-four);
                    height: 50px;
                "
                :index="region_index"
                @click="setSelectedRegion(region), $router.push({ path: '/exploration' })"
            >
                <div class="flex gap-md y-center">
                    <div class="h-full aspect-ratio">
                        <MiscTierDisplay
                            :tier="region?.tier"
                            class="rounded-md"
                            style="
                                border: 2px solid var(--color-brand-four);
                                width: 100%;
                            "
                        />
                    </div>
                    <div
                        class="rounded"
                        style="
                            padding: 2px;
                            height: 50%;
                            border: 1px solid var(--color-brand-four);
                        "
                        :style="{
                            backgroundColor: `color-mix(in srgb, ${getRegionDangerousTypes[region.danger]?.color} 25%, transparent)`
                        }"
                    >
                        <div
                            class="rounded h-full"
                            style="
                                padding: 2px;
                            "
                            :style="{
                                backgroundColor: getRegionDangerousTypes[region.danger]?.color
                            }"
                        >
    
                        </div>
                    </div>
                    <div class="flex flex-column gap-sm x-center">
                        <p class="font-md">{{ region.name }}</p>
                    </div>
                </div>
                <div>
                    <MiscIcon
                        icon="external-link-icon"
                        class="bg-color-brand-one o-half"
                        style="margin-top: 5px;margin-right: 5px;"
                        :size="[12,12]"
                    />
                </div>
            </ButtonBasic>

        </div>

    </div>

</template>

<script>

import { regions_dangerous_types } from "@/assets/types/regions.js"

import { useExplorationStore } from "@/stores/exploration.store.js"
import { useSystemStore } from '@/stores/system.store.js'
import { useWorldStore } from '@/stores/world.store.js'
import { useInteractionStore } from '@/stores/interaction.store.js'
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
        },
        getRegionDangerousTypes(){
            return regions_dangerous_types
        }
    },
    created(){
    }
}

</script>

<style lang="scss">

</style>
