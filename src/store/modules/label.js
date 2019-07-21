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
        selectedLabel: ''
    },

    mutations:{
        ADD_LABEL(state, label){
            state.labels.push(label)
        },
        EDIT_LABEL(state, label){
            state.labels = state.labels.filter(n => n.id !== label.id)
            state.labels.push(label);
        },
        DELETE_LABEL(state, label){
            state.labels = state.labels.filter(n => n.id !== label.id)
        },
        LABEL_SEARCH_CONTACT(state, label){
            state.selectedLabel = label;
        }
    },
    
    actions: {
        addLabel(context, label){
            context.commit('ADD_LABEL', label);
        },
        editLabel(context, label){
            context.commit('EDIT_LABEL', label)
        },
        deleteLabel(context, label){
            context.commit('DELETE_LABEL', label)
        },
        labelSearchContact(context, label){
            context.commit('LABEL_SEARCH_CONTACT', label);
        }
    },
    getters: {}
}