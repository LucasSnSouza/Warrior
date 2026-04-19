<template>

    <div class="card relative w-full flex flex-column x-center">

        <div class="card-amount"></div>
        <div 
            class="card-wrapper flex relative bg-color-brand-three aspect-ratio"
            style="
                overflow: hidden;
            "
            :style="{ backgroundImage: `url(${background})` }"
        >
            <div
                v-if="getAwait"
                class="walking-warning bg-color-brand-three w-full h-full flex flex-column gap-md y-center x-center"
            >
                <MiscIcon
                    icon="foots-icon"
                    class="bg-color-brand-two"
                    :size="[60,60]"
                />
                <p class="font-md color-brand-two w-3-4 text-center">Indo para o novo local, aguarde alguns instantes.</p>                              
            </div>
            <div
                v-else
                class="w-full h-full"
            >
                <div class="card-information flex x-center y-center w-full h-full">
                    <img 
                        class="h-3-4"
                        :src="display"
                    >
                    </img>
                </div>
            </div>
        </div>
        <div class="card-shadow"></div>
    </div>

</template>

<script>

import { useSystemStore } from "@/stores/system.store.js"

import * as Misc from "@/components/Misc"

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
        ...Misc,
    },
    methods: {
    },
    computed: {
        getAwait(){
            return useSystemStore().getAwait
        }
    },
    created(){
    }
}

</script>

<style lang="scss" scoped>

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
    
        width: 100%;
        border-radius: var(--scale-brand-xlg);
        scroll-snap-align: center;
        background-size: 105%;
        background-position: center;
        border: var(--scale-brand-md) solid white;
        z-index: 1;

        .walking-warning{
            animation: fade-in 0.25s ease;
        }
        
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

@keyframes fade-in {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
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