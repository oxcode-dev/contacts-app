const labels = [
    {
        id: 1,
        name: 'Family'
    },
    {
        id: 2,
        name: 'Friends'
    },
    {
        id: 3,
        name: 'Business'
    },
    {
        id: 4,
        name: 'Works'
    },
];

export default {
    state: {
        labels: labels,
    },

    mutations:{
        ADD_LABEL(state, label){
            state.labels.push(label)
        }
    },
    
    actions: {
        addLabel(context, label){
            context.commit('ADD_LABEL', label);
        }
    },
    getters: {}
}