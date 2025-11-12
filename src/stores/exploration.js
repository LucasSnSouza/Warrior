import { defineStore } from "pinia";

export const useExplorationStore = defineStore('exploration', {
    state: () => ({
        selected_card: null
    }),
    getters: {
        getSelectedCard: (state) => state.selected_card
    },
    actions: {
        setSelectedCard(card){
            this.selected_card = card
        }
    }
})