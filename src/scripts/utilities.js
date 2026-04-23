export default{
    
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

    set_stackable_item_to_array(array, item){
        let item_aready_exist = array.find(i => i.uid === item.uid)
        if(item_aready_exist){
            item_aready_exist.amount = (item_aready_exist.amount || 1) + 1
        }else{
            array.push({ ...item, amount: 1 })
        }
    }

}
    