<template>

    <div class="app h-full flex flex-column bg-color-brand-three">

        <div class="app-header flex p-xlg">

            <ButtonBasic
                v-if="$route.meta.goback"
                class="p-lg rounded-md aspect-ratio"
                style="
                    transform: scaleX(-1);
                "
                @click="$router.back()"
            >
                <MiscIcon
                    icon="styled-arrow-icon"
                    class="bg-color-brand-three"
                    :size="[24,24]"
                />
            </ButtonBasic>

            <div class="h-full x-center y-center flex flex-column gap-md">
                <p class="font-lg color-brand-two">Exploration</p>
            </div>

            <div class="flex gap-md">

                <ButtonBasic
                    class="p-lg rounded-md aspect-ratio"
                >
                    <MiscIcon
                        icon="market-icon"
                        class="bg-color-brand-three"
                        :size="[24,24]"
                    />
                </ButtonBasic>

                <ButtonBasic
                    class="p-lg rounded-md aspect-ratio"
                >
                    <MiscIcon
                        icon="settings-icon"
                        class="bg-color-brand-three"
                        :size="[24,24]"
                    />
                </ButtonBasic>

            </div>

        </div>
        
        <div class="app-information scroll-y h-full p-xlg">
            <RouterView/>
        </div>

        <div class="app-navigation flex gap-md x-center p-xlg">

            <ButtonBasic
                class="p-lg rounded-md"
                style="
                    transform: scaleX(-1);
                "
            >
                <MiscIcon
                    icon="home-icon"
                    class="bg-color-brand-three"
                    :size="[24,24]"
                />
            </ButtonBasic>

            <ButtonBasic
                class="p-lg rounded-md"
                style="
                    transform: scaleX(-1);
                "
            >
                <MiscIcon
                    icon="inventory-icon"
                    class="bg-color-brand-three"
                    :size="[24,24]"
                />
            </ButtonBasic>

            <ButtonBasic
                class="p-lg rounded-md"
                style="
                    transform: scaleX(-1);
                "
            >
                <MiscIcon
                    icon="action-icon"
                    class="bg-color-brand-three"
                    :size="[24,24]"
                />
            </ButtonBasic>

        </div>

        <ModalBasic
            v-if="selectedItem"
            @cancel-action="removeSelectedItemOnStorage"
        >
            <div class="flex x-center">
                <CardOverview
                    :background="selectedItem?.visuals.background"
                    :display="selectedItem?.visuals.display"
                    style="
                        width: 30%;
                        margin-top: -15%;
                        box-shadow: 2px 2px 4px #00000011;
                    "
                />
            </div>
        </ModalBasic>

    </div>

</template>

<script>

import { RouterLink, RouterView } from 'vue-router'
import { useSystemStore } from '@/stores/system.js'
import { useItemsStore } from '@/stores/items.js'

import * as Button from "@/components/Button"
import * as Modal from "@/components/Modal"
import * as Card from "@/components/Card"
import * as Misc from "@/components/Misc"

export default {
    data(){
        return{
        }
    },
    components: {
        ...Button,
        ...Misc,
        ...Modal,
        ...Card
    },
    methods: {
        removeSelectedItemOnStorage(){
            useItemsStore().removeSelectedItem()
        }
    },
    computed: {
        selectedItem(){
            return useItemsStore().getSelectedItem
        }
    },
    created(){
    }
}

</script>

<style lang="scss">

.app{

    .app-header{
        justify-content: space-between;
    }

    .app-information{
        padding-top: 0px;
        padding-bottom: 0px;
    }

}

</style>
