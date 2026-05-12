import { defineStore } from "pinia";

import { useGameStore } from "./game.store.js"
import { useWorldStore } from "./world.store.js"

import { watch } from "vue";

import utils from "@/scripts/utilities.js"

export const useProfileStore = defineStore('profile', {
    state: () => ({
        profiles: [],
        profile: null
    }),
    getters: {
        getProfiles: (state) => state.profiles,
        getProfile: (state) => state.profile,
        getQueue: (state) => state.profile?.queue,
        getAttributes: (state) => state.profile?.attributes,
        getProficiencies: (state) => state.profile?.proficiencies,
        getEquipped: (state) => state.profile?.inventory.filter(item => item.equipped) || [],
        getInventory: (state) => state.profile?.inventory,
        getEquipedInventory: (state) => state.profile?.inventory?.filter(item => item?.equipped),
        getNotEquipedInventory: (state) => state.profile?.inventory?.filter(item => !item?.equipped),
    },
    actions: {
        fetchProfilesByGame(){
            this.profiles = useGameStore().getGame?.profiles || []
        },
        setProfile(profile_index){
            this.profile = this.profiles[profile_index]
        },
        createProfile(profile){
            this.profiles.push({
                ...profile,
                createdAt: Date.now()
            })
        },
        addProficiencePoints(proficience_name, points){
            this.profile.proficience[proficience_name] += points
        },
        updateInventory(updated_inventory){
            this.profile.inventory = updated_inventory
        },
        cleanupInventory(){
            this.profile.inventory = this.profile.inventory.filter(item => item?.amount > 0)
        },
        addItemToInventory(item){
            utils.set_stackable_item_to_array(this.profile.inventory, item)
            useWorldStore().getCurrentNode.storage =
            useWorldStore().getCurrentNode.storage.filter(
                storage_item => storage_item.uid !== item.uid
            )
        },
        watchers(){
            watch(
                () => this.profile?.attributes?.health,
                (value) => {
                    if(value <= 0){
                        // this.$router.push({ path: '/navigation' })
                    }                    
                }
            )
        }
    }
})