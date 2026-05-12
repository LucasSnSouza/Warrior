import { defineStore } from "pinia";

import utils from "@/scripts/utilities.js"

import { useProfileStore } from "@/stores/profile.store.js"
import { useSystemStore } from "@/stores/system.store.js"

import { watch } from "vue";

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
        createSelectedItem(reference_queue){
            if(!utils.has_required_items(useProfileStore().getInventory, this.selected_item.requires)) return false
            utils.deduct_required_items(
                useProfileStore().getInventory, 
                this.selected_item.requires
            )
            reference_queue.push({
                ...this.selected_item,
                craftedAt: Date.now()
            })
        },
        resolveQueueItems(reference_queue, reference_storage){
            if(reference_queue){
                const now = Date.now();
                for (let i = reference_queue.length - 1; i >= 0; i--) {
                    const item = reference_queue[i];
                    const craftedAt = new Date(item.craftedAt).getTime();
                    if (craftedAt <= now) {
                        reference_storage.push(
                            {
                                ...item,
                                uid: crypto.randomUUID(),
                                author: useProfileStore().getProfile.name,
                                amount: 1,
                                createdAt: Date.now()
                            }
                        );
                        reference_queue.splice(i, 1);
                    }
                }
            }
        },
        watchers(){
            watch(
                () => this.selected_item,
                (value) => {
                    console.log('ENGINE: Selected item watch update')
                    useProfileStore().cleanupInventory()
                }
            )
        }
    }
})