import { defineStore } from "pinia";

import { useGameStore } from "./game.store.js"

import { sleep } from "@/scripts/time.js"
import Generator from "@/scripts/generator.js"
import { watch } from "vue";

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
        getCurrentPlace: (state) => { return state.selected_region?.places[state.place_index] },
        getCurrentNode: (state) => { return state.selected_region?.places[state.place_index]?.nodes[state.node_index] },
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
        restoreNodeIndex(){
            this.node_index = 0;
        },
        restorePlaceIndex(){
            this.place_index = 0;
        },
        fetchWorldsByGame(){
            this.worlds = useGameStore().getGame?.worlds
        },
        setSelectedRegion(region){
            this.selected_region = region
        },
        cleanupRegions(){
            this.world.locations = this.world.locations.filter(
                region => region?.delete
            )
        },
        cleanupNodes(){
            this.selected_region.places.forEach(place => {
                
            });
        },
        populateWorld(amount = 1){
            for(let i=0;i < amount;i++){
                this.world.locations.push(Generator.generate_region(0, Math.floor(Math.random() * 3) ))
            }
        },

        setWorld(world_index){
            this.world = this.worlds[world_index]
        },
        createWorld(world){
            this.worlds.push({
                ...world,
                createdAt: new Date()
            })
        },

        watchers(){
            watch(
                () => this.world,
                (value) => {
                    
                    this.restorePlaceIndex();
                    this.restoreNodeIndex();

                    this.cleanupRegions();
                    this.populateWorld(5);
                    
                }
            ),
            watch(
                () => this.selected_region,
                (value) => {
                    this.restorePlaceIndex();
                    this.cleanupNodes();
                }
            )
            watch(
                () => this.place_index,
                (value) => {
                    this.restoreNodeIndex();
                }
            )
        }
    }
})