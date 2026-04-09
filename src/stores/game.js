import { defineStore } from "pinia";

export const useGameStore = defineStore('game', {
    state: () => ({
        selected_profile: null,
        craft_queue: []
    }),
    getters: {
        getCraftQueue: (state) => state.craft_queue,
        getSelectedProfile: (state) => state.selected_profile
    },
    actions: {
        setSelectedProfile(profile){
            this.selected_profile = profile
        },
        completeCraftQueueItem(item){
            this.craft_queue = this.craft_queue.filter(i => i.uid !== item.uid) || [];
            this.selected_profile.inventory.push(item)
        },
        addCraftQueue(item){
            this.craft_queue.push(item)
        }
    }
})