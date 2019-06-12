import { stat } from "fs";

let contacts = [
    {
        id: 1,
        name: 'Osemeke Samuel',
        email: 'samuel@tedbree.com',
        phone: '+234 8079035018',
        address: 'No 44, Commercial Avenue, Sabo, Yaba, Lagos'
    },
    {
        id: 2,
        name: 'Dammy Ogunmoye',
        email: 'dami@tedbree.com',
        phone: '+234 8034538651',
        address: 'No 44, Commercial Avenue, Sabo, Yaba, Lagos'
    }
];

export default {
    state: {
        contacts: contacts
    },
    mutations: {
        EDIT_CONTACT(state, contact){
            state.contacts = state.contacts.filter(n => n.id !== contact.id)
            state.contacts.push(contact);
        },

        ADD_CONTACT(state, contact){
            state.contacts.push(contact);
        },

        DELETE_CONTACT(state, id){
            state.contacts = state.contacts.filter(n => n.id !== id)
        }
    },
    actions: {
        editContact(context, contact){
            context.commit('EDIT_CONTACT', contact)
        },

        addContact(context, contact){
            context.commit('ADD_CONTACT', contact)
        },
        
        deleteContact(context, id){
            context.commit('DELETE_CONTACT', id);
        }
    },
    getters: {}
}