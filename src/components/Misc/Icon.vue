<template>
    <div 
        class="misc-icon"
        :class="this.class"
        :style="{ 
            width: `${this.size[0]}px`, 
            height: `${this.size[1]}px`,
            maskImage: `url(${module})`,
        }"
    >
    </div>
</template>

<script>

export default {
    data() {
        return {
            module: `/svg/${this.icon}.svg`
        }
    },
    props:{
        icon: {
            type: String,
            required: true
        },
        class: {
            type: String,
            default: ""
        },
        size: {
            type: Array,
            default: () => [16, 16]
        }
    },
	methods: {
	}
}

</script>

<style scoped>

.misc-icon{
    mask-size: 100% 100%;
    mask-repeat: no-repeat;
}

</style>