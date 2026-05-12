import { defineStore } from "pinia";

import { useGameStore } from "./game.store.js"
import { useInteractionStore } from "./interaction.store.js"
import { useProfileStore } from "./profile.store.js"
import { useSystemStore } from "./system.store.js"

import { sleep } from "@/scripts/time.js"
import { watch } from "vue";

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
        setPlaceIndex(place_index){
            this.place_index = place_index
        },
        setNodeIndex(node_index){
            this.node_index = node_index
        },
        setWorld(world_index){
            this.world = this.worlds[world_index]
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
        createWorld(world){
            this.worlds.push({
                ...world,
                createdAt: Date.now()
            })
        },
        watchers(){
            watch(
                () => this.world,
                (value) => {
                    
                    console.log('ENGINE: World watch update')

                    this.restorePlaceIndex();
                    this.restoreNodeIndex();

                    this.cleanupRegions();
                    this.populateWorld(5);
                    
                }
            )
            watch(
                () => this.selected_region,
                (value) => {
                    console.log('ENGINE: Region watch update')
                    this.restorePlaceIndex();
                    this.cleanupNodes();
                }
            )
            watch(
                () => this.place_index,
                (value) => {
                    console.log('ENGINE: Place watch update')
                    this.restoreNodeIndex();
                    useInteractionStore().resolveQueueItems(this.getCurrentNode?.queue, this.getCurrentNode?.storage)
                    useSystemStore().resetScroll()
                }
            )
            watch(
                () => this.node_index,
                (value) => {
                    console.log('ENGINE: Node watch update')
                    this.getCurrentPlace.nodes.forEach((node, index) => {
                        if(node?.type == 'animal' || node?.type == 'enemy'){
                        }
                    })
                    useSystemStore().resetScroll()
                }
            )
        }
    }
})