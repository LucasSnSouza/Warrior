<template>

    <div class="flex x-center">
        <CardOverview
            :background="item?.visuals.background"
            :display="item?.visuals.display"
            style="
                width: 30%;
                margin-top: -20%;
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
    <div 
        v-if="item?.attributes"
        class="flex flex-column gap-md"
    >
        <p class="font-md text-center" >Atributos</p>
        <div
            class="flex x-center gap-xlg"
        >
            <div
                v-for="(item, index) in item?.attributes"
                class="bg-color-brand-three color-brand-two rounded-md flex x-start y-center gap-md"
                style="
                    height: 38px;
                    padding: 3px;
                    padding-right: 12px;
                "
                :index="index"
            >
                <div
                    class="aspect-ratio bg-color-brand-two rounded-md flex y-center x-center shadow-sm"
                    style="
                        margin-left: -18px;
                        border: 1px solid var(--color-brand-four);
                        height: 100%;
                    "
                >
                    <p class="font-sm color-brand-one" style="margin-top: -2px;">{{ item.value }}</p>
                </div>
                <p class="font-sm">{{ item.name }}</p>        
            </div>
        </div>
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