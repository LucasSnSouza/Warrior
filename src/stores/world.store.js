import { defineStore } from "pinia";

import { useGameStore } from "./game.store.js"

import { sleep } from "@/scripts/time.js"
import Generator from "@/scripts/generator.js"

export const useWorldStore = defineStore('world', {
    state: () => ({
        worlds: [],
        world: null,
        selected_region: null,
        place_index: 0,
        node_index: 0,
    }),
    getters: {
        getWorlds: (state) => state.worlds,
        getWorld: (state) => state.world,
        getSelectedRegion: (state) => state.selected_region,
        getPlaceIndex: (state) => state.place_index,
        getNodeIndex: (state) => state.node_index
    },
    actions: {
        async nextPlace(){
            await sleep(1500);
            this.place_index++;
            if (this.place_index >= this.selected_region.places.length) {
                this.place_index = 0;
            }
        },
        async previousPlace(){
            await sleep(1500);
            this.place_index--;
            if (this.place_index < 0) {
                this.place_index = this.selected_region.places.length - 1;
            }
        },
        fetchWorldsByGame(){
            this.worlds = useGameStore().getGame?.worlds
        },
        setSelectedRegion(region){
            this.selected_region = region
        },
        cleanupWorld(){
            this.world.locations = this.world.locations.filter(
                region => region?.delete
            )
        },
        populateWorld(amount = 1){
            for(let i=0;i < amount;i++){
                this.world.locations.push(Generator.generate_region(0, Math.floor(Math.random() * 2) ))
            }
        },
        setWorld(world_index){
            this.world = this.worlds[world_index]
        },
        addWorld(world){
            this.worlds.push({
                ...world,
                createdAt: new Date()
            })
        }
    }
})