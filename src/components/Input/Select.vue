<template>
    <div 
        class="input-select-wrapper"
        :class="class"
    >
        <div 
            class="input-value"
            @click="options_tab_opened = !options_tab_opened"
        >
            <p class="o-half" v-if="!selected">{{ placeholder }}</p>
            <p class="" v-else>{{ selected[reference] }}</p>
        </div>
        <div 
            v-if="options_tab_opened"
            class="input-options absolute"
            :class="inputOptionsClass" 
        >
            <div 
                v-for="(item, index) in items"
                :key="index"
            >
                <slot :item="item"></slot>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return{
            selected: null,
            options_tab_opened: false,
        }
    },
    props:{
        class: {
            type: String,
            default: ""
        },
        inputOptionsClass:{
            type: String,
            default: ""
        },  
        placeholder: {
            type: String,
            default: ""
        },
        items: {
            type: Array,
            default: () => []
        },
        reference: {
            type: String,
            default: "label"
        },
        value: {
            type: [String, Number, Object],
            default: null
        },
    },
    methods: {
    },
    watch:{
        value(newValue){
            this.selected = newValue;
            this.options_tab_opened = false;
            this.$emit('change', this.selected);
        }
    }
}

</script>

<style lang="scss" scoped>

.input-select-wrapper{

    position: relative;

    .input-options{
        width: 100%;
        top: 50px;
        left: 0px;
    }

}

</style>