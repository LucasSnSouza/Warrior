<template>
    
    <div class="control-wrapper w-full flex x-center">
        <div class="control-panel bg-color-brand-one flex shadow-sm">
            <div class="w-full flex x-center y-center">
                <p class="color-brand-two font-sm">{{ this.$route.meta?.title }}</p>
            </div>
            <div class="flex gap-md p-md">
                <button class="control-buttons minimize rounded-sm pointer"></button>
                <button class="control-buttons close rounded-sm pointer"></button>
            </div>
        </div>
    </div>

</template>

<script>

import { useSystemStore } from '@/stores/system.js'

import * as Button from '@/components/Button'
import Icon from "./Icon.vue"

export default{
    data(){
        return{

        }
    },
    components:{
        ...Button,
        Icon
    },
    computed: {
        theme() {
            return useSystemStore().getTheme;
        },
    },
}

</script>

<style lang="scss" scoped>

.control-wrapper{
    min-height: 26px;

    .control-panel{
        width: calc(100% - 46px);
        border-bottom-left-radius: var(--scale-brand-lg);
        border-bottom-right-radius: var(--scale-brand-lg);

        .control-buttons{
            width: 14px;
            height: 14px;
            border: none;
            outline: none;

            &.close{
                background: rgb(252, 76, 76);
            }

            &.minimize{
                background: rgb(255, 140, 74);
            }

        }
    }
}

</style>