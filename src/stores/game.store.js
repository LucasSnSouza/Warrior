import { defineStore } from "pinia";
import { Storage } from '@/scripts/storage.js'

import { useProfileStore } from "./profile.store.js"
import { useWorldStore } from "./world.store.js"

export const useGameStore = defineStore('game', {
    state: () => ({
        game: null
    }),
    getters: {
        getGame: (state) => state.game
    },
    actions: {
        fetchStorage(){
            this.game = Storage.get("game-system").data
        },
        setGame(){
            // Fetch game into storage
            this.fetchStorage();

            // Update instances
            useProfileStore().fetchProfilesByGame();
            useWorldStore().fetchWorldsByGame();
        },
    }
})