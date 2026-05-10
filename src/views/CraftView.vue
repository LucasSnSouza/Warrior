<template>

    <div class="craft default-side-padding scroll-y w-full h-full flex flex-column gap-lg">

        <MiscNotice
            information="Aqui você pode criar material basico em suas viagens ou descidir sua proxima construção."
        />

        <div class="buttons-tool flex gap-md">

            <ButtonBasic
                class="button-tool bg-color-brand-three p-md flex x-center y-center aspect-ratio rounded-md"
                @click="queue_status = true"
            >
                <MiscIcon
                    icon="time-icon"
                    class="bg-color-brand-two"
                    :size="[16,16]"
                />
            </ButtonBasic>

        </div>

        <div
            class="w-full flex flex-column gap-md"
        >

            <div 
                class="flex x-start y-center gap-lg"
                @click="tools_status = !tools_status"
            >
                <p 
                    class="color-brand-three font-md"
                    style="
                        letter-spacing: 2px;
                    "
                >
                    Ferramentas
                </p>
                <MiscIcon
                    icon="styled-arrow-icon"
                    class="bg-color-brand-three"
                    style="margin-top: 4px;"
                    :style="{
                        transform: tools_status ? 'rotate(-90deg)' : 'rotate(90deg)'
                    }"
                    :size="[12,12]"
                />
            </div>

            <div 
                v-if="tools_status"
                class="flex flex-column gap-md"
            >
                <ButtonItem
                    v-for="(tool, tool_index) in getTools"
                    :item="tool"
                    :index="tool_index"
                    @click="setSelectedItem(tool)"
                />
            </div>

        </div>

        <div
            class="w-full flex flex-column gap-md"
        >

            <div 
                class="flex x-start y-center gap-lg"
                @click="weapons_status = !weapons_status"
            >
                <p 
                    class="color-brand-three font-md"
                    style="
                        letter-spacing: 2px;
                    "
                >
                    Armas
                </p>
                <MiscIcon
                    icon="styled-arrow-icon"
                    class="bg-color-brand-three"
                    style="margin-top: 4px;"
                    :style="{
                        transform: weapons_status ? 'rotate(-90deg)' : 'rotate(90deg)'
                    }"
                    :size="[12,12]"
                />
            </div>

            <div 
                v-if="weapons_status"
                class="flex flex-column gap-md"
            >
                <ButtonItem
                    v-for="(weapon, weapon_index) in getWeapons"
                    :item="weapon"
                    :index="weapon_index"
                    @click="setSelectedItem(weapon)"
                />
            </div>

        </div>

        <ModalBasic 
            v-if="getSelectedItem"
            cancel-button="Voltar"
            @cancel-action="removeSelectedItem()"
        >
            <ViewModalDetails
                :item="getSelectedItem"
            />
            <ViewModalCraft
                :item="getSelectedItem"
            />
        </ModalBasic>

        <ModalBasic 
            v-if="queue_status"
            cancel-button="Voltar"
            @cancel-action="queue_status = false"
        >
            <ButtonItem
                v-for="(queue_item, queue_index) in getQueue"
                :item="queue_item"
                :index="queue_index"
            >
                <p class="font-sm o-half">{{ getComputedData(new Date(queue_item.craftedAt)) }}</p>
            </ButtonItem>            
        </ModalBasic>

    </div>

</template>

<script>

import { tools } from "@/assets/types/tools.js"
import { weapons } from "@/assets/types/weapons.js"

import { item_types } from "@/assets/types/types.js"

import { useSystemStore } from '@/stores/system.store.js'
import { useInteractionStore } from '@/stores/interaction.store.js'
import { useProfileStore } from '@/stores/profile.store.js'

import * as Button from "@/components/Button"
import * as Input from "@/components/Input"
import * as Misc from "@/components/Misc"
import * as Card from "@/components/Card"
import * as Action from "@/components/Action"
import * as Modal from "@/components/Modal"
import * as View from "@/components/View"

export default {
    data(){
        return{
            queue_status: false,
            tools_status: true,
            weapons_status: true,
        }
    },
    components: {
        ...Misc,
        ...Card,
        ...Button,
        ...Action,
        ...Modal,
        ...Input,
        ...View
    },
    methods: {
        setSelectedItem(item){
            useInteractionStore().setSelectedItem(item);
        },
        removeSelectedItem(){
            useInteractionStore().removeSelectedItem();
        },
        getComputedData(date){
            return date.toLocaleString('pt-BR', {
                dateStyle: 'short',
                timeStyle: 'medium'
            });
        }
    },
    computed: {
        getSelectedItem(){
            return useInteractionStore().getSelectedItem
        },
        getTools(){
            return tools.filter(tool => tool.tier === 0)
        },
        getWeapons(){
            return weapons.filter(tool => tool.tier === 0)
        },
        getItemTypes(){
            return item_types
        },
        getQueue(){
            return useProfileStore().getQueue
        }
    },
    created(){
    }
}

</script>

<style lang="scss">

.buttons-tool{

    .button-tool{
        height: 40px;
    }

}

</style>
