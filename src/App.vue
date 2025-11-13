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

    </div>

</template>

<script>

import { RouterLink, RouterView } from 'vue-router'
import { useSystemStore } from '@/stores/system.js'

import * as Button from "@/components/Button"
import * as Misc from "@/components/Misc"

export default {
    data(){
        return{
        }
    },
    components: {
        ...Button,
        ...Misc
    },
    methods: {
    },
    computed: {
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
