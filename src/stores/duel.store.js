import { defineStore } from "pinia";

import { duel_types } from "@/assets/types/types.js"
import { raw, refined } from "@/assets/types/resources.js"

import { useProfileStore } from "./profile.store.js"
import { useExplorationStore } from "./exploration.store.js"

import utils from '@/scripts/utilities.js'

export const useDuelStore = defineStore('duel', {
    state: () => ({
        intervalId: null,
        round: 0,
        step: -1,
        steps: [],
        defeated: false,
        time: 6
    }),
    getters: {
        getSteps: (state) => state.steps,
        getRound: (state) => state.round,
        getStep: (state) => state.step,
        getTime: (state) => state.time,
        getDefeated: (state) => state.defeated,
        isStepAvailable: (state) => state.step < state.steps.length - 1
    },
    actions: {
        processStep(step){

            let NodeAttributes = useExplorationStore().getSelectedNode.attributes
            let ProfileAttributes = useProfileStore().getAttributes

            if(this.steps[step].player == 'attack' && this.steps[step].enemy == 'attack'){
                NodeAttributes.health -= 
                    Math.floor(
                        utils.compute_damage(
                            utils.compute_modifier(ProfileAttributes.damage, "damage", useProfileStore().getEquipedInventory),
                            NodeAttributes.armor
                        )
                    )
                ProfileAttributes.health -= 
                    Math.floor(
                        utils.compute_damage(
                            NodeAttributes.damage, 
                            utils.compute_modifier(ProfileAttributes.armor, "armor", useProfileStore().getEquipedInventory),
                        )
                    )
                ProfileAttributes.stamina -= 2
            }
            else if(this.steps[step].player == 'attack' && this.steps[step].enemy == 'defend'){
                NodeAttributes.health -= 
                    Math.floor(
                        utils.compute_damage(
                            utils.compute_modifier(ProfileAttributes.damage, "damage", useProfileStore().getEquipedInventory),
                            NodeAttributes.armor
                        ) * 0.5
                    )
                ProfileAttributes.stamina -= 2
            }
            else if(this.steps[step].player == 'defend' && this.steps[step].enemy == 'attack'){
                ProfileAttributes.health -= 
                    Math.floor(
                        utils.compute_damage(
                            NodeAttributes.damage, 
                            utils.compute_modifier(ProfileAttributes.armor, "armor", useProfileStore().getEquipedInventory),
                        ) * 0.5
                    )
                ProfileAttributes.stamina -= 6
            }
            else if(this.steps[step].player == null && this.steps[step].enemy == 'attack'){
                ProfileAttributes.health -= 
                    Math.floor(
                        utils.compute_damage(
                            NodeAttributes.damage, 
                            utils.compute_modifier(ProfileAttributes.armor, "armor", useProfileStore().getEquipedInventory),
                        )
                    )
            }
            else{
                ProfileAttributes.stamina -= 4
            }

            if(NodeAttributes.health <= 0){
                let Node = useExplorationStore().getSelectedNode
                clearInterval(this.intervalId)
                Node.attributes.health = 0
                Node.available = false
                this.defeated = true
                this.generateDrops(utils.random_int(1,6))
            }

        },
        setFight(){
            let step = 0
            this.intervalId = setInterval(() => {
                this.processStep(step)
                step++
                if(step >= this.steps.length){
                    clearInterval(this.intervalId)
                    this.round++
                    this.resetStep()
                    this.cleanupSteps()
                    this.createSteps()
                    this.setPreparation()
                }
            }, 1000);
        },
        setPreparation(){
            this.computeTimer()
            this.intervalId = setInterval(() => {
                this.time--
                if(this.time <= 0){
                    clearInterval(this.intervalId)
                    this.setFight()
                }
            }, 1000);
        },
        generateDrops(amount){
            for(let i = 0; i < amount; i++){
                let SelectedNode = useExplorationStore().getSelectedNode
                let item = utils.get_item_by_uid(
                    [...raw, ...refined], 
                    utils.choice_by_weight(SelectedNode.drops).uid
                )
                utils.set_stackable_item_to_array(SelectedNode.storage, { ...item, createdAt: Date.now() })
            }
        },
        computeTimer(){
            this.time = utils.compute_action_timer(
                useProfileStore().getAttributes.agility,
                useExplorationStore().getSelectedNode.attributes.agility
            )
        },
        resetStep(){
            this.step = -1
        },
        createSteps(steps_amount = 4){
            for(var i = 0; i <= steps_amount; i++){
                this.steps.push({
                    player: null, 
                    enemy: utils.choice(duel_types)
                })
            }
        },
        cleanupSteps(){
            this.steps = [];
        },
        cleanupInterval(){
            clearInterval(this.intervalId)
        },
        addStep(){
            if(this.step >= this.steps.length - 1){
                return;
            }
            this.step++;
        },
        addAction(step_index, step_action){
            this.steps[step_index].player = step_action;
        }
    }
})