export default{
    
    random_int(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    choice(list){
        return list[Math.floor(Math.random() * list.length)]
    },

    choice_by_weight(list){
        const total_weight = list.reduce((sum, item) => sum + item.weight, 0);
        let random_weight = Math.random() * total_weight;
        for (const item of list) {
            random_weight -= item.weight;
            if (random_weight < 0) {
                return item;
            }
        }
    },

    get_item_by_uid(array, uid){
        return array.find(item => item?.uid === uid) || null;
    },

    has_item_by_uid(array, uid){
        return array.some(item => item.uid === uid)
    },

    has_required_items(array, requires){
        return requires.every(require => {
            const item = this.get_item_by_uid(array, require.uid)
            return item.amount >= require.amount
        })
    },

    deduct_required_items(array, requires){
        requires.forEach(require => {
            const item = this.get_item_by_uid(array, require.uid)
            if(item){
                item.amount -= require.amount
            }
        })
    },

    set_stackable_item_to_array(array, item) {
        const existing = array.find(i => i.uid === item.uid)
        const amountToAdd = item?.amount ?? 1
        if (existing) {
            existing.amount = (existing.amount ?? 0) + amountToAdd
        } else {
            array.push({
                ...item,
                amount: amountToAdd,
                updatedAt: Date.now()
            })
        }
    },

    compute_damage(damage, armor){
        return damage * (100 / (100 + armor))
    },

    compute_action_timer(player_agility, enemy_agility){
        const difference = player_agility - enemy_agility
       return Math.floor(Math.max(1, 10 + difference * 0.1))
    },

    compute_modifier(base_value, target_attribute, items){
        return items.reduce((total, item) => {
            const modifiers =
                item.attributes?.filter(attribute =>
                    attribute.type == 'modifier' &&
                    attribute.modifier == target_attribute
                ) || []
            const modifier_total =
                modifiers.reduce((sum, modifier) =>
                    sum + modifier.value
                , 0)
            return total + modifier_total
        }, 0) + base_value
    }

}
    