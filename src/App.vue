<template>

    <div 
        class="app h-full flex flex-column"
        :class="getTheme, $route.meta.background"
    >
        <div class="app-header">

            <div
                v-if="$route.meta.header"
                class="flex p-xlg"
                style="justify-content: space-between;"
            >
                <div 
                    class="bg-color-brand-two rounded-lg p-lg"
                    style="box-shadow: 2px 2px 8px #00000022;"
                >
                    <MiscIcon
                        icon="styled-arrow-icon"
                        class="bg-color-brand-three o-3-4"
                        style="transform: scaleX(-1);"
                        :size="[18,18]"
                        @click="$router.back()"
                    />
                </div>
            </div>

        </div>
        
        <div class="app-information scroll-y h-full p-xlg">
            <RouterView/>
        </div>

        <ModalBasic
            v-if="selectedItem?.display == 'details'"
            cancel-button="Voltar"
            @cancel-action="removeSelectedItemOnStorage"
        >
            <ViewModalDetails
                :item="selectedItem"
            />
        </ModalBasic>

        <ModalBasic
            v-if="selectedItem?.display == 'crafting'"
            cancel-button="Voltar"
            confirm-button="Criar"
            @cancel-action="removeSelectedItemOnStorage"
        >
            <ViewModalCraft
                :item="selectedItem"
            />
        </ModalBasic>

    </div>

</template>

<script>

import { RouterLink, RouterView } from 'vue-router'
import { useSystemStore } from '@/stores/system.js'
import { useItemsStore } from '@/stores/items.js'

import { Storage } from '@/utils/storage.js'

import * as Button from "@/components/Button"
import * as Modal from "@/components/Modal"
import * as Card from "@/components/Card"
import * as Misc from "@/components/Misc"
import * as View from "@/components/View"

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
        removeSelectedItemOnStorage(){
            useItemsStore().removeSelectedItem()
        }
    },
    computed: {
        selectedItem(){
            return useItemsStore().getSelectedItem
        },
        getTheme(){
            return useSystemStore().getTheme
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
    }
}

</script>

<style lang="scss">

.app{

    .app-information{
        padding-top: 0px;
        padding-bottom: 0px;
    }

}

</style>
