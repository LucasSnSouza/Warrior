import { defineStore } from "pinia";

import { duel_types } from "@/assets/types/types.js"

import { useProfileStore } from "./profile.store.js"
import { useExplorationStore } from "./exploration.store.js"

import utils from '@/scripts/utilities.js'

export const useDuelStore = defineStore('duel', {
    state: () => ({
        intervalId: null,
        history: [],
        history_index: 0,
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
        getHistory: (state) => state.history,
        getDefeated: (state) => state.defeated,
        isStepAvailable: (state) => state.step < state.steps.length - 1
    },
    actions: {
        processStep(step){

            let NodeAttributes = useExplorationStore().getSelectedNode.attributes
            let ProfileAttributes = useProfileStore().getAttributes

            ProfileAttributes.stamina--

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
            }
            else if(this.steps[step].player == 'attack' && this.steps[step].enemy == 'defend'){
                NodeAttributes.health -= 
                    Math.floor(
                        utils.compute_damage(
                            utils.compute_modifier(ProfileAttributes.damage, "damage", useProfileStore().getEquipedInventory),
                            NodeAttributes.armor
                        ) * 0.5
                    )
            }
            else if(this.steps[step].player == 'defend' && this.steps[step].enemy == 'attack'){
                ProfileAttributes.health -= 
                    Math.floor(
                        utils.compute_damage(
                            NodeAttributes.damage, 
                            utils.compute_modifier(ProfileAttributes.armor, "armor", useProfileStore().getEquipedInventory),
                        ) * 0.5
                    )
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

            if(NodeAttributes.health <= 0){
                clearInterval(this.intervalId)
                useExplorationStore().getSelectedNode.attributes.health = 0
                this.defeated = true
            }

        },
        setFight(){
            let step = 0
            this.intervalId = setInterval(() => {
                this.processStep(step)
                step++
                this.history_index++
                if(step >= this.steps.length){
                    clearInterval(this.intervalId)
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