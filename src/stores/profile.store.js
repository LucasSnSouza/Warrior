import { defineStore } from "pinia";

import { useGameStore } from "./game.store.js"
import { useWorldStore } from "./world.store.js"

import Utils from "@/scripts/utilities.js"

export const useProfileStore = defineStore('profile', {
    state: () => ({
        profiles: [],
        profile: null
    }),
    getters: {
        getProfiles: (state) => state.profiles,
        getProfile: (state) => state.profile,
        getInventory: (state) => state.profile.inventory,
        getEquipedInventory: (state) => state.profile?.inventory?.filter(item => item?.equipped),
        getNotEquipedInventory: (state) => state.profile?.inventory?.filter(item => !item?.equipped)
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
        },
        addItemToInventory(item){
            Utils.set_stackable_item_to_array(this.profile.inventory, item)
            useWorldStore().getCurrentNode.storage =
            useWorldStore().getCurrentNode.storage.filter(
                storage_item => storage_item.uid !== item.uid
            )
        }
    }
})