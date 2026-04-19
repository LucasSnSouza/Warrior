import { defineStore } from "pinia";

export const useExplorationStore = defineStore('exploration', {
    state: () => ({
        selected_node: null,
    }),
    getters: {
        getSelectedNode: (state) => state.selected_node,
    },
    actions: {
        setSelectedNode(node){
            this.selected_node = node
        },
    }
})