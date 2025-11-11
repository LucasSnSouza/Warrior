<template>

    <button
        :class="this.class"
    >
        <slot/>
    </button>

</template>

<script>

export default{
    data(){
        return{
            
        }
    },
    props: {
        class: {
            type: String,
            default: ""
        }
    }
}

</script>

<style lang="scss" scoped>

button{
    border: none;

    &.ghost{
        background: none;
        border: 2px solid currentColor;
    }
}

</style>