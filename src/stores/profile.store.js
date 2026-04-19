import { defineStore } from "pinia";

import { useGameStore } from "./game.store.js"

export const useProfileStore = defineStore('profile', {
    state: () => ({
        profiles: [],
        profile: null
    }),
    getters: {
        getProfiles: (state) => state.profiles,
        getProfile: (state) => state.profile
    },
    actions: {
        fetchProfilesByGame(){
            this.profiles = useGameStore().getGame?.profiles || []
        },
        setProfile(profile_index){
            this.profile = this.profiles[profile_index]
        },
        addProfile(profile){
            this.profiles.push({
                ...profile,
                createdAt: new Date()
            })
        }
    }
})