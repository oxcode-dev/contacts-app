<template>
    <div style="padding: 20px 10px">
        <div>
            <p class="title2 is-5 is-uppercase has-text-left">{{ `${title} (${contacts.length})` }}</p>
        </div>
        <div>
            <table class="table is-striped is-fullwidth  is-hoverable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(contact, key) in contacts" :key="key">
                        <td>{{ contact.name }}</td>
                        <td>{{ contact.phone }}</td>
                        <td>{{ contact.email }}</td>
                        <td>
                            <div class="buttons are-small is-pulled-right">
                                <button @click="handleViewContact(contact)" class="button is-small" title="View"><i class="fas fa-eye"></i></button>
                                <button class="button is-small is-primary" @click="handleEditContact(contact)" title="Edit"><i class="fas fa-pen"></i></button>
                                <button class="button is-small is-danger" @click="deleteContact(contact)" title="View"><i class="fas fa-trash"></i></button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <Modal :active.sync="viewModal" @closeViewContact="viewModal = $event">
            <ViewContact :contact.sync="contact" v-if="modalItem === 'view'" />

            <ContactForm :contact.sync="contact" class="card" v-if="modalItem === 'form-contact'" @close="viewModal = $event" />            
        </Modal>
    </div>
</template>

<script>
import ViewContact from '@/components/ViewContact.vue'
import ContactForm from '@/components/ContactForm'
import Modal from '@/components/modal'
export default {
    components: {
        ViewContact, Modal, ContactForm
    },
    data(){
        return{
            viewModal: false,
            form: {},
            contact: {},
            modalItem: ''
        }
    },

    methods: {
        handleViewContact(obj){
            this.viewModal = !this.viewModal;
            this.contact = obj;
            this.modalItem = 'view';
        },

        handleEditContact(obj){
            this.viewModal = !this.viewModal;
            this.modalItem = 'form-contact';
            this.contact = obj;
        },

        deleteContact(obj){
            if(confirm("Are you sure, you want to delete this contact?")){
                this.$store.dispatch('deleteContact', obj.id);
                alert('Contact deleted successfully!');
            }
        }
    },

    computed: {
        contacts(){
            let contacts = this.$store.state.contact.contacts;

            if(this.searchContact) return contacts.filter(n => {
                return n.name.toLowerCase().includes(this.searchContact.toLowerCase())
            });

            if(this.searchLabel) return contacts.filter(n => n.label === this.searchLabel);
            
            return contacts;
        },

        title(){
            let labels = this.$store.state.label.labels;

            if(this.searchContact) return this.searchContact
            if(this.searchLabel) return labels[this.searchLabel - 1].name;

            return 'Contacts';
        },

        searchLabel(){
            return this.$store.state.label.selectedLabel;
        },

        searchContact(){
            return this.$store.state.contact.search;
        }
    },
}
</script>




<style scoped>
/* Style the table */
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

/* Style table headers and table data */
th, td {
  text-align: left;
  padding: 16px;
}

th:first-child, td:first-child {
  text-align: left;
}
.title2{
    letter-spacing: .07272727em;
    font-size: .6875rem;
    font-weight: 500;
    line-height: 1rem;
    text-transform: uppercase;
    color: #5f6368;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 10px 0 10px 10px;
    max-height: 20px;
}

</style>
