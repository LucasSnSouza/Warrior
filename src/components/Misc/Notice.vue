<template>
    <div 
        class="notice-wrapper rounded-md p-lg flex gap-md y-center"
        style="
            border: 1px solid var(--color-brand-four);
        "
    >
        <MiscIcon
            icon="lamp-icon"
            class="bg-color-brand-three"
            :size="[24,24]"
        />
        <p class="font-md o-half">{{ information }}</p>
    </div>
</template>

<script>

import MiscIcon from "./Icon.vue"

export default{
    data(){
        return{

        }
    },
    props: {
        information: {
            type: String
        }
    },
    components: {
        MiscIcon
    }
}

</script>

<style lang="scss" scoped>

</style>