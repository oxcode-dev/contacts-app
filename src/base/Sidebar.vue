<template>
    <div class="sidebar absolute top-0 bottom-0 bg-gray-100 py-2 px-0">
        <div class="mt-20 mb-6">
            <button @click="handleCreateContact" class="rounded-full py-2 px-4 bg-green-500 text-white">
                <i class="fa fa-plus mr-1"></i>
                Create Contact
            </button>
        </div>

        <perfect-scrollbar style="height: 330px;">
            <ul class="menu">
                <li>
                    <div @click="handleLabelSearch('')" class="cursor-pointer">
                        <i class="fas fa-user mr-1 text-green-500"></i>
                        Contacts ({{ getContacts.length }})
                    </div>
                </li>
                <li v-for="(label, key) in getLabels" :key="key">
                    <div class="flex justify-between">
                        <span @click="handleLabelSearch(label.id)" class="capitalize w-3/4 cursor-pointer">
                            <i class="fas fa-user-tag mr-1 text-green-500"></i>
                            {{ label.name }}
                        </span>

                        <span class="sidebar-link p-0 w-1/4">
                            <a href="#" @click.prevent="handleEditLabel(label)" class="mr-2 text-white"><i class="fa fa-pen"></i></a>
                            <a href="#" @click.prevent="handleDeleteLabel(label)" class="text-white"><i class="fa fa-trash"></i></a>
                        </span>
                    </div>
                </li>
            </ul>
        </perfect-scrollbar>

        <div class="mt-6 mb-16">
            <button @click="handleAddLabel()" class="rounded-full py-2 px-4 bg-green-500 text-white">
                <i class="fas fa-tag" style="margin-right: 10px"></i>Create Label
            </button>
        </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
    components:{},
    data(){
        return{
        }
    },

    computed:{
        ...mapGetters({
            getContacts: 'getContacts',
            searchLabel: 'getSelectedLabel',
            searchContact: 'getSearch',
            getLabels: 'getLabels',
            getSidebar: 'getSidebar'
        })
    },
    methods:{
        handleLabelSearch(id){
            this.$store.dispatch('searchContact', this.search);
            this.$store.dispatch('labelSearchContact', id)
            if(this.window.width < 768)
                return this.$store.dispatch('sidebar', !this.getSidebar);
        },

        handleDeleteLabel(obj){
            if(confirm("Deleted anyway?")){
                this.$store.dispatch('deleteLabel', obj);
                alert("Label Deleted Successfully!");
            }
        },

        handleEditLabel(obj){
            this.$emit('edit-label', {
                modalItem: 'label-form',
                label: obj
            })
        },

        handleAddLabel(){
            this.$emit('add-label', {
                modalItem: 'label-form',
                label: {
                    name: '',
                    id: ''
                }
            })
        },

        handleCreateContact(){
            this.$emit('form-contact', {
                modalItem: 'form-contact',
                contact: this.resetForm()
            })
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