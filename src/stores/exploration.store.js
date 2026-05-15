import { defineStore } from "pinia";

export const useExplorationStore = defineStore('exploration', {
    state: () => ({
        selected_node: null,
    }),
    getters: {
        getSelectedNode: (state) => state.selected_node,
        getAvailable: (state) => state.selected_node.available
    },
    actions: {
        setSelectedNode(node){
            this.selected_node = node
        },
    }
})