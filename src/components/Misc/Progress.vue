<template>

    <progress class="progress-wrapper" :value="value" :max="max"></progress>

</template>

<script>

export default{
    data(){
        return{

        }
    },
    props: {
        max: {
            type: Number,
            default: 100
        },
        value: {
            type: Number
        }
    }
}

</script>

<style lang="scss" scoped>

.progress-wrapper{
    color: red;
}

</style>