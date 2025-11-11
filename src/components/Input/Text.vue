<template>
    <div 
        class="input-text-basic-wrapper"
        :class="class"
    >
        <textarea 
            :class="inputClass"
            :value="value"
            :placeholder="placeholder"
            @input="(data) => { $emit('update:modelValue', data.target.value); }"
        ></textarea>
        <slot/>
    </div>
</template>

<script>

export default{
    data(){
        return{

        }
    },
    props:{
        class: {
            type: String,
            default: ""
        },
        inputClass: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: ""
        },
        length: {
            type: Number,
            default: 0
        },
        value: {
            type: [String, Number],
            default: null
        },
    },
    watch:{

    }
}

</script>

<style lang="scss" scoped>

.input-text-basic-wrapper{

    textarea{
        width: 100%;
        height: 100%;
        border: none;
        background: none;
        outline: none;
    }

}

</style>