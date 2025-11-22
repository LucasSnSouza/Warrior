<template>
    <div 
        class="input-basic-wrapper"
        :class="class"
    >
        <slot name="start"/>
        <input 
            :type="type"
            :class="inputClass"
            :disabled="disabled"
            :value="value"
            :placeholder="placeholder"
            @input="(data) => { $emit('update:modelValue', data.target.value); }"
        >
        <slot name="end"/>
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
        disabled: {
            type: Boolean,
            default: false
        },
        length: {
            type: Number,
            default: 0
        },
        value: {
            type: [String, Number],
            default: null
        },
        type: {
            type: String,
            default: "text",
            example: ['text', 'number']
        }
    },
    watch:{

    }
}

</script>

<style lang="scss" scoped>

.input-basic-wrapper{

    input{
        width: 100%;
        height: 100%;
        border: none;
        background: none;
        outline: none;
    }

    input:disabled{
        background: rgba(206, 206, 206, 0.2);
    }

}

</style>