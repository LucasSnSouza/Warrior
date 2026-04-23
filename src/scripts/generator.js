import { regions_types } from "@/assets/types/regions.js"
import { landscapes_types } from "@/assets/types/landscapes.js"
import { nodes_types } from "@/assets/types/nodes.js"

import { 
    region_names, 
    landscape_names 
} from "@/assets/types/names.js"

import Utils from "@/scripts/utilities.js"

export default{
    
    uid(){
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    },

    region_names(region_type){
        return `${Utils.choice(region_names[region_type].sufix)} ${Utils.choice(region_names[region_type].names)}`
    },

    landscapes_names(region_type){
        return `${Utils.choice(landscape_names[region_type].sufix)} ${Utils.choice(landscape_names[region_type].names)}`
    },

    generate_node(target_tier, target_biome){

        let nodes_by_biome = nodes_types.filter(node => node.tier == target_tier &&  node.biomes.includes(target_biome))
        let node = structuredClone(Utils.choice(nodes_by_biome))

        return {
            ...node,
            uid: crypto.randomUUID(),
            amount: Math.floor(Math.random() * 5 + 1)
        }

    },

    generate_landscape(target_tier, target_biome, nodes_amount = 1){
        
        let landscape_by_biome = landscapes_types.filter(landscape => landscape.biome == target_biome);
        let nodes_list = []

        for(let i = 0; i < Math.floor(Math.random() * 3) + 1; i++){
            nodes_list.push(this.generate_node(target_tier, target_biome))
        }

        return {
            ...structuredClone(Utils.choice(landscape_by_biome)),
            uid: crypto.randomUUID(),
            name: this.landscapes_names(target_biome),
            nodes: nodes_list
        }

    },

    generate_region(region_tier = 0, region_danger = 0, places_amount = 10){

        let region_type = { ...Utils.choice(regions_types) }
        let places_list = []

        for(let i = 0; i < places_amount; i++){
            places_list.push(this.generate_landscape(region_tier, region_type.biome))
        }

        return {
            ...structuredClone(region_type),
            uid: crypto.randomUUID(),
            name: this.region_names(region_type?.biome),
            tier: region_tier,
            danger: region_danger,
            places: places_list
        }

    }

}
    