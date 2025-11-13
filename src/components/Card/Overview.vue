<template>

    <div class="card-overview relative w-full flex flex-column x-center">
        <div 
            class="card-wrapper flex relative bg-color-brand-three"
            :style="{ backgroundImage: `url(${background})` }"
        >
            <div class="card-information flex x-center y-center w-full">
                <img 
                    class="h-3-4"
                    :src="display"
                >
                </img>
            </div>
        </div>
        <div class="card-shadow"></div>
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

.card-overview{
    
    .card-wrapper{

        height: 355px;
        width: 100%;
        border-radius: var(--scale-brand-md);
        scroll-snap-align: center;
        background-size: 105%;
        background-position: top;
        border: var(--scale-brand-md) solid white;
        z-index: 1;
        
        .card-information{
            z-index: 2;    
        }

    }

    .card-shadow{
        position: absolute;
        bottom: -10px;
        width: 100%;
        height: 10px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        filter: blur(10px);
    }


}

</style>