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
            class="flex x-center gap-md"
        >
            <ButtonBasic
                v-for="(attribute, attribute_index) in item?.attributes"
                class="flex bg-none y-center"
            >
                <div 
                    class="bg-color-brand-three p-md rounded-md color-brand-two"
                    style="
                        border-top-right-radius: 0px;
                        border-bottom-right-radius: 0px;
                    "
                >
                    <p>{{ attribute.name }}</p>
                </div>
                <div 
                    class="p-md rounded-md"
                    style="
                        border-top-left-radius: 0px;
                        border-bottom-left-radius: 0px;
                        background: rgb(245, 245, 245);
                    "
                >
                    <p>{{ attribute.value }}</p>
                </div>
            </ButtonBasic>
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