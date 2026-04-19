import { defineStore } from "pinia";

export const useItemStore = defineStore('item', {
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
    }
})