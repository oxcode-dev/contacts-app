<template>
    <div class="py-4" :class="getSidebar ? 'close' : ''">
        <div class="mt-12">
            <p class="title2 uppercase text-left mb-4">{{ `${title} (${contacts.length})` }}</p>
        </div>

        <div class="table-stats w-full text-left">
            <div class="text-gray-700 border-b border-b-gray-700 bg-gray-100 w-full">
                <ul class="w-full mb-1 flex">
                    <li class="p-3 w-full md:w-1/4 font-semibold">Name</li>
                    <li class="p-3 md:w-1/4 font-semibold hidden md:block">Phone</li>
                    <li class="p-3 md:w-1/4 font-semibold hidden md:block">Email</li>
                    <li class="p-3 md:w-1/4 font-semibold hidden md:block"></li>
                </ul>
            </div>

            <perfect-scrollbar :style="heightStyle" id="content">
                <div v-for="(contact, key) in contacts" :key="key" class="hover:bg-gray-100 text-gray-700 flex cursor-pointer">
                    <div @click="handleViewContact(contact)" class="p-4 w-full md:w-1/4">{{ contact.name }}</div>
                    <div @click="handleViewContact(contact)" class="p-4 md:w-1/4 hidden md:block">{{ contact.phone }}</div>
                    <div @click="handleViewContact(contact)" class="p-4 md:w-1/4 hidden md:block">{{ contact.email }}</div>
                    <div class="p-4 md:w-1/4 hidden md:block">
                        <div class="text-right options">
                            <button @click="handleViewContact(contact)" class="mr-3 text-gray-600" title="View"><i class="fas fa-eye"></i></button>
                            <button class="mr-3 text-green-500" @click="handleEditContact(contact)" title="Edit"><i class="fas fa-pen"></i></button>
                            <button class="mr-3 text-red-600 is-danger" @click="deleteContact(contact)" title="Delete"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            </perfect-scrollbar>
        </div>

        <Modal :active.sync="viewModal" @close="viewModal = $event">
            <ViewContact :contact.sync="contact" v-if="modalItem === 'view'" @close="viewModal = $event" />

            <ContactForm :contact.sync="contact" class="card" v-if="modalItem === 'form-contact'" @close="viewModal = $event" />
        </Modal>
    </div>
</template>

<script>
import ViewContact from '@/components/ViewContact.vue'
import ContactForm from '@/components/ContactForm'
import Modal from '@/components/modal'
import { mapGetters } from 'vuex'
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
        ...mapGetters({
            getContacts: 'getContacts',
            searchLabel: 'getSelectedLabel',
            searchContact: 'getSearch',
            labels: 'getLabels',
            getSidebar: 'getSidebar'
        }),
        heightStyle(){
            return `height: ${this.window.height - 170}px`
        },

        contacts(){
            let contacts = this.getContacts;

            if(this.searchContact) return contacts.filter(n => {
                return n.name.toLowerCase().includes(this.searchContact.toLowerCase())
            });

            if(this.searchLabel) return contacts.filter(n => n.label === this.searchLabel);

            return contacts;
        },

        title(){
            if(this.searchContact) return this.searchContact
            if(this.searchLabel) return this.labels[this.searchLabel - 1].name;

            return 'Contacts';
        }
    },
}
</script>