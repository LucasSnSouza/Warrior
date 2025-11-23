<template>

    <div class="card relative w-full flex flex-column x-center">

        <div class="card-amount"></div>
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

.card{

    .card-amount{
        position: absolute;
        top: -10px;
        width: 90%;
        height: 100%;
        background: white;
        opacity: 0.5;
        transform: translateX(-50%);
        left: 50%;
        border-radius: var(--scale-brand-xlg);
    }
    
    .card-wrapper{

        height: 355px;
        width: 100%;
        border-radius: var(--scale-brand-xlg);
        scroll-snap-align: center;
        background-size: 105%;
        background-position: center;
        border: var(--scale-brand-md) solid white;
        z-index: 1;
        animation: swap 0.5s;
        
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

@keyframes swap {
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(0.9);
    }
    100%{
        transform: scale(1);
    }
}

</style>