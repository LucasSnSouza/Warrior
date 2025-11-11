<template>

    <div class="app h-full">
        
        <div class="app-information h-full p-xlg">
            <RouterView/>
        </div>
    </div>

</template>

<script>

import { RouterLink, RouterView } from 'vue-router'
import { useSystemStore } from '@/stores/system.js'

export default {
    data(){
        return{
        }
    },
    components: {
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

</style>
