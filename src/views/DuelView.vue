<template>

    <div class="duel default-side-padding scroll-y w-full h-full flex flex-column gap-lg relative">

        <div 
            class="flex gap-md"
            style="
                margin-top: var(--scale-brand-xlg);
            "
        >

            <ButtonBasic
                class="w-half p-md rounded bg-color-brand-two"
                style="
                    border: 1px solid var(--color-brand-four);
                "
            >
                <p>Consumiveis</p>
            </ButtonBasic>

            <ButtonBasic
                class="w-half p-md rounded bg-color-brand-two"
                style="
                    border: 1px solid var(--color-brand-four);
                "
            >
                <p>Bestiario</p>
            </ButtonBasic>

        </div>

        <div 
            class="w-full relative rounded-lg shadow-sm flex x-center y-end relative p-lg"
            style="
                background-color: color-mix(in srgb, var(--color-brand-three) 15%, transparent);
                height: 160px;
            "
        >
            <img
                class="absolute"
                style="
                    width: 60%;
                    transform: translateY(-15px);
                "
                :src="getSelectedNode.image"
            />
            <div class="w-full flex flex-column gap-sm">
                <div>
                    <p class="font-md bold">{{ getSelectedNode.name }}</p>
                </div>
                <div class="flex gap-md o-half">

                    <div class="flex gap-sm y-center">
                        <MiscIcon
                            icon="heart-icon"
                            class="bg-color-brand-one"
                            :size="[12,12]"
                        />
                        <p class="font-sm">{{ getSelectedNode.attributes.health }}</p>
                    </div>

                    <div class="flex gap-sm y-center">
                        <MiscIcon
                            icon="shield-icon"
                            class="bg-color-brand-one"
                            :size="[12,12]"
                        />
                        <p class="font-sm">{{ getSelectedNode.attributes.armor }}</p>
                    </div>

                </div>
            </div>
            <div 
                v-if="getDefeated"
                class="absolute w-full h-full rounded-lg flex x-center y-center"
                style="
                    top: 0px;
                    left: 0px;
                    background-color: color-mix(in srgb, var(--color-brand-three) 95%, transparent);
                "
            >
                <p class="font-md color-brand-two">Inimigo derrotado</p>
            </div>
        </div>

        <div class="w-full flex gap-md x-end y-center">
            <div class="flex flex-column gap-sm x-center y-start w-full">
                <div class="flex gap-sm y-end">
                    <h1 class="font-lg">{{ getTime }}</h1>
                    <p class="font-sm o-half">/ Segundos</p>
                </div>
                <p class="font-sm o-half">Tempo até o proximo combate</p>
            </div>
            <ButtonBasic
                class="p-md rounded"
                style="
                    padding-left: 30px;
                    padding-right: 30px;
                    background-color: color-mix(in srgb, darkred 15%, transparent);
                "
            >
                <p class="font-md" style="color: darkred;">Abandonar</p>
            </ButtonBasic>
        </div>

        <div class="w-full flex y-center x-start gap-md wrap">
            <div
                v-for="(item, index) in getSteps"
                class="aspect-ratio rounded-lg flex x-center y-center bg-color-brand-two"
                style="
                    border: 1px solid var(--color-brand-four);
                    height: 42px;
                "
                :index="index"
            >
                <MiscIcon
                    v-if="item.player == 'defend'"
                    icon="shield-icon"
                    class="bg-color-brand-three"
                    :size="[20,20]"
                />
                <MiscIcon
                    v-else-if="item.player == 'attack'"
                    icon="sword-icon"
                    class="bg-color-brand-three"
                    :size="[20,20]"
                />
                <MiscIcon
                    v-else
                    icon="theme-icon"
                    class="bg-color-brand-three"
                    :size="[20,20]"
                />            
            </div>
        </div>

        <MiscDivision style="opacity: 0.05;"/>

        <div 
            class="w-full absolute default-side-padding"
            style="
                bottom: 10px;
                left: 0px;
            "
        >
            <div 
                class="rounded default-side-padding"
                style="
                    height: 20px;
                    border: 1px solid var(--color-brand-four);
                    background-color: color-mix(in srgb, var(--color-brand-three) 15%, transparent);
                "
            >
                <div 
                    class="flex gap-md"
                    style="
                        transform: translateY(-25px);
                    "
                >
                    <ButtonBasic
                        class="w-full rounded-md p-md bg-color-brand-two"
                        style="
                            border: 1px solid var(--color-brand-four);
                        "
                        @click="addStepAction('attack'), addStep()"
                    >
                        <MiscIcon
                            icon="sword-icon"
                            class="bg-color-brand-three"
                            :size="[20,20]"
                        />
                    </ButtonBasic>
        
                    <ButtonBasic
                        class="w-full rounded-md p-md bg-color-brand-two"
                        style="
                            border: 1px solid var(--color-brand-four);
                        "
                        @click="addStepAction('defend'), addStep()"
                    >
                        <MiscIcon
                            icon="shield-icon"
                            class="bg-color-brand-three"
                            :size="[20,20]"
                        />
                    </ButtonBasic>
                </div>
            </div>
        </div>

        <MiscNotice
            information="Você deve escolher uma seleção de ataques e defesas antes que o tempo se encerre, após a vitoria você pode coletar sua recompensa."
        />

        <div
            class="w-full flex flex-column gap-md"
        >
            <div 
                class="flex x-start y-center gap-lg"
                @click="drops_status = !drops_status"
            >
                <p 
                    class="color-brand-three font-md"
                    style="
                        letter-spacing: 2px;
                    "
                >
                    Coletaveis
                </p>
                <MiscIcon
                    icon="styled-arrow-icon"
                    class="bg-color-brand-three"
                    style="margin-top: 4px;"
                    :style="{
                        transform: drops_status ? 'rotate(-90deg)' : 'rotate(90deg)'
                    }"
                    :size="[12,12]"
                />
            </div>
            <div
                v-if="drops_status"
                class="flex flex-column gap-sm"
            >
                <ButtonItem
                    v-for="(item, index) in getSelectedNode.storage"
                    :item="item"
                    :index="index"
                    @click="setSelectedItem(item)"
                />
            </div>

        </div>

    </div>

</template>

<script>

import { useExplorationStore } from "@/stores/exploration.store.js"
import { useWorldStore } from "@/stores/world.store.js"
import { useDuelStore } from "@/stores/duel.store.js"
import { useSystemStore } from '@/stores/system.store.js'

import * as Button from "@/components/Button"
import * as Misc from "@/components/Misc"
import * as Card from "@/components/Card"
import * as Action from "@/components/Action"
import * as Modal from "@/components/Modal"
import * as View from "@/components/View"

export default {
    data(){
        return{
            drops_status: false,
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
        createSteps(){
            useDuelStore().createSteps(Math.floor(Math.random() * 6));
        },
        cleanupSteps(){
            useDuelStore().cleanupSteps();
        },
        addStepAction(step_action){
            useDuelStore().addAction(this.getStep, step_action)
        },
        addStep(){
            useDuelStore().addStep();
        },
        setPreparation(){
            useDuelStore().setPreparation();
        },
        cleanupInterval(){
            useDuelStore().cleanupInterval();
        }
    },
    computed: {
        getSelectedNode(){
            return useExplorationStore().getSelectedNode
        },
        getSelectedRegion(){
            return useWorldStore().getSelectedRegion
        },
        getPlaceIndex(){
            return useWorldStore().getPlaceIndex
        },
        getNodeIndex(){
            return useWorldStore().getNodeIndex
        },
        getSteps(){
            return useDuelStore().getSteps
        },
        getRound(){
            return useDuelStore().getRound
        },
        getStep(){
            return useDuelStore().getStep
        },
        getTime(){
            return useDuelStore().getTime
        },
        getDefeated(){
            return useDuelStore().getDefeated
        }
    },
    created(){
        this.cleanupSteps()
        this.createSteps()
        this.setPreparation()
    },
    beforeUnmount(){
        this.cleanupInterval()
    }
}

</script>

<style lang="scss">

</style>
