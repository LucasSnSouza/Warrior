import { defineStore } from "pinia";

export const useExplorationStore = defineStore('exploration', {
    state: () => ({
        selected_card: null,
        region: null
    }),
    getters: {
        getSelectedCard: (state) => state.selected_card,
        getRegion: (state) => state.region
    },
    actions: {
        setSelectedCard(card){
            this.selected_card = card
        },
        async fetchRegion(region_name){
            try{
                const response = await fetch(`/regions/${region_name}.json`)
                if (!response.ok) throw new Error('Reino não encontrado!')
                return this.region = await response.json()
            }catch(err){
                console.error("")
                return this.region = null
            }
        }
    }
})