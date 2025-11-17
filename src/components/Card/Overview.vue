<template>

    <div 
        :class="this.class"
        class="card-overview relative w-full flex aspect-ratio flex-column x-center"
    >
        <div 
            class="card-wrapper h-full flex relative bg-color-brand-three"
            :style="{ backgroundImage: `url(${background})` }"
        >
            <div class="card-information flex x-center y-center w-full">
                <img 
                    class="h-half"
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
        class: {
            type: String,
            default: ""
        },  
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
        width: 100%;
        border-radius: var(--scale-brand-md);
        scroll-snap-align: center;
        background-size: 100% 100%;
        background-position: top;
        border: var(--scale-brand-md) solid white;
        z-index: 1;
        
        .card-information{
            z-index: 2;

            img{
                filter: drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.2));
            }

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