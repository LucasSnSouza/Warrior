<template>

    <div class="inventory default-side-padding scroll-y w-full h-full flex flex-column gap-lg">

        <div
            class="w-full flex flex-column gap-md"
        >

            <MiscNotice
                information="Uma lista com todos os itens no seu inventario pessoal"
            />

            <div 
                class="flex x-start y-center gap-lg"
                @click="equiped_status = !equiped_status"
            >
                <p 
                    class="color-brand-three font-md"
                    style="
                        letter-spacing: 2px;
                    "
                >
                    Equipados
                </p>
                <MiscIcon
                    icon="styled-arrow-icon"
                    class="bg-color-brand-three"
                    style="margin-top: 4px;"
                    :style="{
                        transform: equiped_status ? 'rotate(-90deg)' : 'rotate(90deg)'
                    }"
                    :size="[12,12]"
                />
            </div>

            <div 
                v-if="equiped_status"
                class="flex flex-column gap-md"
            >
                <ButtonItem
                    v-for="(item, index) in getEquipedInventory"
                    :item="item"
                    :index="index"
                    @click="setSelectedItem(item)"
                />
            </div>

        </div>

        <div
            class="w-full flex flex-column gap-md"
        >

            <div 
                class="flex x-start y-center gap-lg"
                @click="inventory_status = !inventory_status"
            >
                <p 
                    class="color-brand-three font-md"
                    style="
                        letter-spacing: 2px;
                    "
                >
                    Inventario
                </p>
                <MiscIcon
                    icon="styled-arrow-icon"
                    class="bg-color-brand-three"
                    style="margin-top: 4px;"
                    :style="{
                        transform: inventory_status ? 'rotate(-90deg)' : 'rotate(90deg)'
                    }"
                    :size="[12,12]"
                />
            </div>

            <div 
                v-if="inventory_status"
                class="flex flex-column gap-md"
            >
                <ButtonItem
                    v-for="(item, index) in getNotEquipedInventory"
                    :item="item"
                    :index="index"
                    @click="setSelectedItem(item)"
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
            <div 
                v-if="getSelectedItem.settings?.isEquippable"
            >
                <ButtonBasic
                    v-if="!getSelectedItem.equipped"
                    class="bg-color-brand-two p-md rounded-md w-full"
                    style="
                        border: 1px solid var(--color-brand-four);
                    "
                    @click="getSelectedItem.equipped = true, removeSelectedItem()"
                >
                    <p class="color-brand-three font-md">Equipar</p>
                </ButtonBasic>
                <ButtonBasic
                    v-else
                    class="bg-color-brand-two p-md rounded-md w-full"
                    style="
                        border: 1px solid var(--color-brand-four);
                    "
                    @click="getSelectedItem.equipped = false, removeSelectedItem()"
                >
                    <p class="color-brand-three font-md">Desequipar</p>
                </ButtonBasic>
            </div>
        </ModalBasic>

    </div>

</template>

<script>

import { useSystemStore } from '@/stores/system.store.js'
import { useProfileStore } from '@/stores/profile.store.js'
import { useInteractionStore } from '@/stores/interaction.store.js'

import * as Button from "@/components/Button"
import * as Misc from "@/components/Misc"
import * as Card from "@/components/Card"
import * as Action from "@/components/Action"
import * as Modal from "@/components/Modal"
import * as View from "@/components/View"

export default {
    data(){
        return{
            equiped_status: true,
            inventory_status: true,
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
        setSelectedItem(item){
            useInteractionStore().setSelectedItem(item);
        },
        removeSelectedItem(){
            useInteractionStore().removeSelectedItem();
        }
    },
    computed: {
        getSelectedItem(){
            return useInteractionStore().getSelectedItem
        },
        getInventory(){
            return useProfileStore().getInventory
        },
        getEquipedInventory(){
            return useProfileStore().getEquipedInventory
        },
        getNotEquipedInventory(){
            return useProfileStore().getNotEquipedInventory
        }
    },
    created(){
    }
}

</script>

<style lang="scss">

</style>
