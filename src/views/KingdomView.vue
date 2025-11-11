<template>

    <div class="kingdom h-full">

        <div class="kingdom-cards w-full h-full gap-md flex scroll-x">

            <CardBasic
                v-for="(item, index) in kingdom_cards"
                :background="item?.background"
                :display="item?.display"
                :index="index"
            />

        </div>

    </div>

</template>

<script>

import * as Misc from "@/components/Misc"
import * as Card from "@/components/Card"

export default {
    data(){
        return{
            kingdom_cards: [
                {
                    name: "",
                    background: "/images/environments/plain-one.png",
                    display: "/images/structures/house-one.png"
                },
                {
                    name: "",
                    background: "/images/environments/plain-one.png",
                    display: "/images/weapons/one-hand-sword.png"
                },
                {
                    name: "",
                    background: "/images/environments/plain-one.png",
                    display: "/images/structures/house-one.png"
                },
                {
                    name: "",
                    background: "/images/environments/plain-one.png",
                    display: "/images/weapons/one-hand-sword.png"
                },
                {
                    name: "",
                    background: "/images/environments/plain-one.png",
                    display: "/images/structures/house-one.png"
                },
            ]
        }
    },
    components: {
        ...Misc,
        ...Card
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

.kingdom{

    .kingdom-cards{
        scroll-snap-type: x mandatory;
    }

}

</style>
