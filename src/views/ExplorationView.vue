<template>

    <div class="exploration w-full h-full flex flex-column gap-xlg">

        <div class="exploration-card relative w-full gap-md flex scroll-x">

            <div class="exploration-card-controls flex w-full absolute">

                <ButtonBasic
                    class="p-lg rounded-md"
                    style="
                        transform: scaleX(-1);
                        margin-left: -15px;
                    "
                >
                    <MiscIcon
                        icon="styled-arrow-icon"
                        class="bg-color-brand-three"
                        :size="[16,16]"
                    />
                </ButtonBasic>

                <ButtonBasic
                    class="p-lg rounded-md"
                    style="
                        margin-right: -15px;
                    "
                >
                    <MiscIcon
                        icon="styled-arrow-icon"
                        class="bg-color-brand-three"
                        :size="[16,16]"
                    />
                </ButtonBasic>

            </div>

            <CardBasic
                :background="kingdom_cards[0]?.background"
                :display="kingdom_cards[0]?.display"
            />

        </div>

    </div>

</template>

<script>

import * as Button from "@/components/Button"
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
        ...Card,
        ...Button
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

.exploration{

    .exploration-card{
        scroll-snap-type: x mandatory;
        overflow: visible;

        .exploration-card-controls{
            justify-content: space-between;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
        }
    }

}

</style>
