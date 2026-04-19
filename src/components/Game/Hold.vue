<template>

    <div class="minigame-hold relative w-full flex flex-column x-center">
        <div 
            class="minigame-hold-view relative bg-color-brand-four rounded-lg hidden w-full aspect-ratio flex y-center x-center"
            @contextmenu.prevent
            @pointerdown="initCharging()"
            @pointerup="stopCharging()"
        >
            <div 
                class="minigame-max-level absolute rounded flex y-center x-center"
                style="
                    background-color: color-mix(in srgb, var(--color-brand-three) 50%, transparent);
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
                class="minigame-pointer absolute rounded bg-color-brand-one"
                :style="{
                    width: `${charging_size}%`,
                    height: `${charging_size}%`
                }"
            ></div>
        </div>
        <div class="minigame-hold-shadow"></div>
    </div>

</template>

<script>

export default{
    data(){
        return{
            charging_size: 2,
            charging_target_min_size: 25,
            charging_target_max_size: 30,
            is_charging: false,
            interval_reference: null,
        }
    },
    methods: {
        generate_random_target(){
            this.charging_target_min_size = Math.floor(Math.random() * 80)
            this.charging_target_max_size = this.charging_target_min_size + (Math.floor(Math.random() * 10) + 2)
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
                console.log('Acertou')
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

        .minigame-pointer{
            transition: .01s;
        }

    }

    .minigame-hold-shadow{
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