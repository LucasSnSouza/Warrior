<template>

    <div class="flex x-center">
        <CardOverview
            :background="item?.visuals.background"
            :display="item?.visuals.display"
            style="
                width: 30%;
                margin-top: -15%;
                box-shadow: 2px 2px 4px #00000011;
            "
        />
    </div>
    <div class="flex flex-column">
        <p class="font-lg text-center color-brand-three">
            {{ item?.name }}
        </p>
        <p class="font-md text-center color-brand-one o-half">
            {{ item?.description }}
        </p>
    </div>
    <MiscDivision/>
    <div 
        v-if="item?.stats"
    >
        <p class="font-md text-center" >Estatisticas</p>
        <ButtonBasic
            v-for="(stat, stat_index) in item.stats"
            class="flex bg-none p-md y-center"
        >
            <div 
                class="bg-color-brand-three p-md rounded-md color-brand-two"
                style="
                    border-top-right-radius: 0px;
                    border-bottom-right-radius: 0px;
                "
            >
                <p>{{ stat.name }}</p>
            </div>
            <div 
                class="p-md rounded-md"
                style="
                    border-top-left-radius: 0px;
                    border-bottom-left-radius: 0px;
                    background: rgb(245, 245, 245);
                "
            >
                <p>{{ stat.value }}</p>
            </div>
        </ButtonBasic>
    </div>

</template>

<script>

import * as Card from "@/components/Card"
import * as Misc from "@/components/Misc"
import * as Button from "@/components/Button"

export default{
    data(){
        return{

        }
    },
    props:{
        item: {
            type: Object,
            default: () => {}
        }
    },
    components: {
        ...Card,
        ...Misc,
        ...Button
    }
}

</script>