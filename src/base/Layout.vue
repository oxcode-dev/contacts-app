<template>
    <div>
        <Navbar />
        <Sidebar
            v-if="getSidebar"
            @edit-label="openLabelModal($event)"
            @add-label="openLabelModal($event)"
            @form-contact="openContactModal($event)" />
        <button @click="sidebar" type="button" v-if="getSidebar && window.width < 768" style="z-index:8" class="bg-gray-500 h-full w-full fixed top-0 left-0 bg-opacity-25"></button>
        <div class="m-0">
            <slot></slot>
        </div>


        <Modal :active.sync="viewModal" @close="viewModal = $event">
            <ContactForm :contact="contact" class="card" v-if="modalItem === 'form-contact'" @close="viewModal = $event" />

            <LabelForm :label.sync="label" v-if="modalItem === 'label-form'" @close="viewModal = $event" />
        </Modal>
    </div>
</template>


<script>
import Navbar from './Navbar.vue'
import Modal from '@/components/modal'
import LabelForm from '@/components/LabelForm'
import ContactForm from '@/components/ContactForm'
import Sidebar from './Sidebar.vue'
import { mapGetters } from 'vuex'
export default {
    components: {
        Navbar, Sidebar,
        Modal, ContactForm, LabelForm
    },

    data(){
        return{
            viewModal: false,
            contact: {},
            modalItem: '',
            label: {},
        }
    },

    computed:{
        ...mapGetters({
            getSidebar: 'getSidebar'
        })
    },
    methods: {
        sidebar(){
            this.$store.dispatch('sidebar', !this.getSidebar);
        },

        openLabelModal(obj){
            this.viewModal = !this.viewModal;
            this.modalItem = obj.modalItem;
            this.label = obj.label;
        },

        openContactModal(obj){
            this.viewModal = !this.viewModal;
            this.modalItem = obj.modalItem;
            this.contact = obj.contact;
        }
    },
}
</script>
