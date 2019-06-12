<template>
    <div style="padding: 20px 10px">
        <div>
            <p class="title2 is-5 is-uppercase has-text-left">Contacts({{ contacts.length }})</p>
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
            
            <div class="card" v-else-if="modalItem === 'form'">
                <header class="card-header">
                   <div class="title is-4">
                       Update Contact
                   </div>
                </header>
                <hr style="margin:0">

                <div class="card-content has-text-left">
                    <div class="content">
                        <form @submit.prevent="editContact">
                            <div class="field">
                                <label class="label">Name</label>
                                <div class="control">
                                    <input class="input" required v-model="form.name" type="text" placeholder="e.g John Doe">
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control">
                                    <input class="input" required type="email" v-model="form.email" placeholder="e.g john@doe.com">
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Phone</label>
                                <div class="control">
                                    <input class="input" required type="text" v-model="form.phone" placeholder="e.g +234 8090342345">
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Address</label>
                                <div class="control">
                                    <input class="input" type="text" v-model="form.address" placeholder="e.g Lagos Nigeria">
                                </div>
                            </div>

                            <div class="field">
                                <button class="button is-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </Modal>
    </div>
</template>

<script>
import ViewContact from '@/components/ViewContact.vue'
import Modal from '@/components/modal'
export default {
    components: {
        ViewContact, Modal
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
            this.modalItem = 'form';
            this.form = obj;
        },

        editContact(){
            this.$store.dispatch('editContact', this.form);
            this.viewModal = !this.viewModal;
            alert('Contact updated successfully!');
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
            return this.$store.state.contact.contacts;
        }
    },

    beforeMount(){
        // console.log(this.$store.state.contact.contacts)
    }
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
