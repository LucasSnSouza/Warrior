import { defineStore } from "pinia";

import utils from "@/scripts/utilities.js"

import { useProfileStore } from "@/stores/profile.store.js"
import { useSystemStore } from "@/stores/system.store.js"

export const useInteractionStore = defineStore('interaction', {
    state: () => ({
        selected_item: null,
        last_selected_item: null
    }),
    getters: {
        getSelectedItem: (state) => state.selected_item,
    },
    actions: {
        removeSelectedItem(){
            this.last_selected_item = this.selected_item
            this.selected_item = null
        },
        setSelectedItem(item){
            this.selected_item = item
        },
        createSelectedItem(){
            if(!useProfileStore().getInventory.lenght > 0) return false
            if(!utils.has_required_items(useProfileStore().getInventory, this.selected_item.requires)) return false
            utils.deduct_required_items(
                useProfileStore().getInventory, 
                this.selected_item.requires
            )
            useProfileStore().cleanupInventory()
        }
    }
})