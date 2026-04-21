<template>

    <div class="minigame-hold relative w-full flex flex-column x-center">
        <div 
            class="minigame-hold-view relative rounded-lg bg-color-brand-four hidden w-full aspect-ratio flex y-center x-center"
            style="
                background-image: radial-gradient(circle, #00000022, transparent 2px);
                background-size: 40px 40px;
            "
            @contextmenu.prevent
            @pointerdown="initCharging()"
            @pointerup="stopCharging()"
            @pointerleave="stopCharging()"
        >
            <div 
                class="minigame-max-level absolute rounded flex y-center x-center"
                style="
                    background-color: color-mix(in srgb, var(--color-brand-three) 50%, transparent);
                    box-shadow: 2px 2px 12px #00000022;
                "
                :style="{
                    width: `${charging_target_max_size}%`,
                    height: `${charging_target_max_size}%`
                }"
            >
                
            </div>
            <div 
                class="minigame-min-level absolute rounded bg-color-brand-four"
                style="
                    box-shadow: 2px 2px 12px #00000022;
                "
                :style="{
                    width: `${charging_target_min_size}%`,
                    height: `${charging_target_min_size}%`
                }"
            >
            </div>
            <div
                class="minigame-pointer absolute rounded"
                style="
                    background-color: color-mix(in srgb, var(--color-brand-one) 50%, transparent);
                    border: 1px solid var(--color-brand-one);
                    box-shadow: 2px 2px 12px #00000022;
                "
                :style="{
                    width: `${charging_size}%`,
                    height: `${charging_size}%`
                }"
            ></div>
        </div>
        <div class="minigame-hold-shadow"></div>
    </div>

    <div 
        v-if="drops_list.length > 0"
        class="w-full flex flex-column gap-md"
    >
        <div 
            class="flex x-start y-center gap-lg"
            @click="drops_status = !drops_status"
        >
            <p 
                class="color-brand-three font-md"
                style="
                    letter-spacing: 2px;
                "
            >
                Coletaveis
            </p>
            <MiscIcon
                icon="styled-arrow-icon"
                class="bg-color-brand-three"
                style="margin-top: 4px;"
                :style="{
                    transform: drops_status ? 'rotate(-90deg)' : 'rotate(90deg)'
                }"
                :size="[12,12]"
            />
        </div>
        <div
            v-if="drops_status"
            class="flex flex-column gap-sm"
        >
            <ButtonItem
                v-for="(item, index) in drops_list"
                :item="item"
                :index="index"
            />
        </div>
    </div>

</template>

<script>

import { raw } from "@/assets/types/resources.js"

import Utils from "@/scripts/utilities.js"

import * as Button from "@/components/Button"
import * as Misc from "@/components/Misc"

export default{
    data(){
        return{
            drops_status: true,
            drops_list: [],
            charging_size: 2,
            charging_target_min_size: 25,
            charging_target_max_size: 30,
            is_charging: false,
            interval_reference: null,
        }
    },
    props: {
        drops: {
            type: Array,
            default: () => []
        }
    },
    components: {
        ...Misc,
        ...Button
    },
    methods: {
        get_item_by_uid(uid){
            return raw.find(item => item?.uid === uid) || null;
        },
        generate_random_target(){
            this.charging_target_min_size = Math.floor(Math.random() * 80)
            this.charging_target_max_size = this.charging_target_min_size + (Math.floor(Math.random() * 20) + 3)
        },
        initCharging(){
            this.is_charging = true;
            this.interval_reference = setInterval(() => {
                this.charging();
            }, 100);
        },
        charging(){
            if(this.is_charging){
                if(this.charging_size < 100){
                    this.charging_size += this.charging_size ** 0.5;
                }else{
                    this.resetCharging();
                }
            }
        },
        stopCharging(){
            if(
                this.charging_size <= this.charging_target_max_size && 
                this.charging_size >= this.charging_target_min_size
            ){
                let item = this.get_item_by_uid(Utils.choice_by_weight(this.drops).uid)
                if(item){
                    this.drops_list.push(item)
                }
            }
            this.is_charging = false;
            this.resetCharging();
        },
        resetCharging(){
            clearInterval(this.interval_reference);
            this.charging_size = 1;
            this.generate_random_target();
        }
    },
    created(){
        this.generate_random_target();
    }
}

</script>

<style lang="scss" scoped>

.minigame-hold{

    .minigame-hold-view{

        z-index: 2;

        .minigame-pointer{
            transition: .05s;
        }

    }

    .minigame-hold-shadow{
        position: absolute;
        bottom: -10px;
        width: 100%;
        height: 10px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        filter: blur(10px);
    }

}

</style>