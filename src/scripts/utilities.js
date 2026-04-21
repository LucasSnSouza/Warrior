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
    }

}
    