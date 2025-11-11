<template>

    <div 
        class="card flex relative bg-color-brand-three rounded-xlg"
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
    background-size: 105%;
    background-position: center;

    .card-information{
        z-index: 2;

        img{
            filter: drop-shadow(0px 0px var(--scale-brand-lg) rgba(0, 0, 0, 0.2));
        }

    }

}

.card::after {
  content: "";
  position: absolute;
  left: 10%;
  bottom: 0px;
  width: 80%;
  height: 10px;
  background: rgba(0, 0, 0, 0.8);
  filter: blur(8px);
  border-radius: 50%;
  z-index: -1;
}

</style>