<template>

    <div 
        class="card flex oclude relative bg-color-brand-three rounded-xlg"
        :style="{ backgroundImage: `url(${background})` }"
    >
        <div class="card-information flex x-center y-center w-full">
            <img 
                class="h-3-4"
                :src="display"
            />
        </div>
    </div>

</template>

<script>

export default {
    data(){
        return{
        }
    },
    props: {
        background: {
            type: String,
        },
        display: {
            type: String,
        },
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

.card{
    height: 355px;
    min-width: 90%;
    scroll-snap-align: center;
    background-size: 100%;
    background-position: center;

    .card-information{
        z-index: 2;
    }

}

</style>