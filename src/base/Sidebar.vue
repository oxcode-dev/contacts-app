<template>
    <div class="is-marginless sidebar">
        <div class="sidebar-div">
            <button @click="handleCreateContact()" class="button is-success is-rounded"><i class="fa fa-plus" style="margin-right: 10px"></i> Add New Contact</button>
        </div>

        <div class="sidebar-div">
            <ul class="menu">
                <li><div @click="handleLabelSearch('')"><i class="fas fa-user" style="margin-right: 5px; color:#4caf50"></i> Contacts ({{ countContact }})</div></li>
                <li v-for="(label, key) in getLabel" :key="key">
                    <div style="display: flex; justify-content: space-between; text-transform: capitalize">
                        <span @click="handleLabelSearch(label.id)"><i class="fas fa-user-tag" style="margin-right: 5px; color:#4caf50"></i> {{ label.name }}</span>

                        <span class="sidebar-link">
                            <a href="#" @click.prevent="handleEditLabel(label)" style="margin-right: 10px; color: #fff;"><i class="fa fa-edit"></i></a>
                            <a href="#" @click.prevent="handleDeleteLabel(label)" style="color: #fff;"><i class="fa fa-trash"></i></a>
                        </span>
                    </div>
                </li>
            </ul>
        </div>

        <div class="sidebar-div">
            <button @click="handleAddLabel()" class="button is-primary is-rounded"><i class="fas fa-tag" style="margin-right: 10px"></i> Add New Label</button>
        </div>

        <Modal :active.sync="viewModal" @closeViewContact="viewModal = $event">
            <ContactForm :contact="contact" class="card" v-if="modalItem === 'form-contact'" @close="viewModal = $event" />

            <LabelForm :label.sync="label" v-if="modalItem === 'label-form'" @close="viewModal = $event" />
        </Modal>
    </div>
</template>


<script>
import Modal from '@/components/modal'
import LabelForm from '@/components/LabelForm'
import ContactForm from '@/components/ContactForm'

export default {
    components:{
        Modal, ContactForm, LabelForm
    },
    data(){
        return{
            viewModal: false,
            contact: this.resetForm(),
            modalItem: '',
            label: {},
        }
    },

    computed:{
        countContact(){
            let arr = this.$store.state.contact.contacts;
            return arr.length;
        },

        getLabel() {
            return this.$store.state.label.labels;
        }
    },
    methods:{
        handleLabelSearch(id){
            this.$store.dispatch('searchContact', this.search);
            this.$store.dispatch('labelSearchContact', id)
        },

        handleDeleteLabel(obj){
            if(confirm("Deleted anyway?")){
                this.$store.dispatch('deleteLabel', obj);
                alert("Label Deleted Successfully!");
            }
        },

        handleEditLabel(obj){
            this.viewModal = true;
            this.modalItem = 'label-form';
            this.label = obj;
        },

        handleAddLabel(){
            this.viewModal = true;
            this.modalItem = 'label-form';
            this.label = {
                name: '',
                id: ''
            };
        },

        handleCreateContact(){
            this.viewModal = true;
            this.modalItem = 'form-contact';
            this.contact = this.resetForm();
        },

        resetForm(){
            return {
                name:'',
                email: '',
                address: '',
                phone: '',
                label: ''
            }
        }
    }
}
</script>


<style scoped>
.sidebar {
    height: 650px;
    background-color: #f5f5f5;
    padding: 10px 0px;
}
.sidebar-div{
    padding: 10px 0px;
}
.sidebar .menu li div{
    display: block;
    padding: 10px 25px;
    text-align: left;
    color: #5DD262;
}
.sidebar .menu li div:hover{
    background-color:#5DD262;
    border-radius: 0 25px 25px 0;
    color: #ffffff;
    display: flex !important;
}
.sidebar-link{
    padding: 0!important;
    display: none !important;
}
.sidebar .menu li div:hover .sidebar-link{
     display: flex !important;
}
</style>
