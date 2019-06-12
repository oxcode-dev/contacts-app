<template>
    <div class="is-marginless sidebar">
        <div class="sidebar-div">
            <button @click="handleCreateContact()" class="button is-success is-rounded"><i class="fa fa-plus" style="margin-right: 10px"></i> Add New Contact</button>
        </div>

        <div class="sidebar-div">
            <ul class="menu">
                <li><div><i class="fas fa-user" style="margin-right: 5px; color:#4caf50"></i> Contacts</div></li>
                <li v-for="(label, key) in getLabel" :key="key">
                    <div>
                        <span><i class="fas fa-user-tag" style="margin-right: 5px; color:#4caf50"></i> {{ label.name }}</span>
                    </div>
                </li>
            </ul>
        </div>

        <div class="sidebar-div">
            <button @click="handleAddLabel()" class="button is-primary is-rounded"><i class="fas fa-tag" style="margin-right: 10px"></i> Add New Label</button>
        </div>

        <Modal :active.sync="viewModal" @closeViewContact="viewModal = $event">
            <div class="card" v-if="modalItem === 'form-contact'">
                <header class="card-header">
                    <div class="title is-4">
                        Add Contact
                    </div>
                </header>
                <hr style="margin:0">

                <div class="card-content has-text-left">
                    <div class="content">
                        <form @submit.prevent="createContact">
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

             <div class="card" v-if="modalItem === 'form-add-label'">
                <header class="card-header">
                    <div class="title is-4">
                        {{ labelTitle }}
                    </div>
                </header>
                <hr style="margin:0">

                <div class="card-content has-text-left">
                    <div class="content">
                        <form @submit.prevent="onSubmitLabel">
                            <div class="field">
                                <label class="label">Name</label>
                                <div class="control">
                                    <input class="input" required v-model="label.name" type="text" placeholder="e.g Associates">
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
import Modal from '@/components/modal'
export default {
    components:{
        Modal
    },
    data(){
        return{
            viewModal: false,
            form: this.resetForm(),
            modalItem: '',
            label: {},
            labelTitle: ''
        }
    },

    computed:{
        lastItemId(){
            let arr = this.$store.state.contact.contacts;
            let lastId = arr.length - 1;
            return arr[lastId].id + 1;
        },
        lastLabelId(){
            let arr = this.$store.state.label.labels;
            let lastId = arr.length - 1;
            return arr[lastId].id + 1;
        },
        getLabel() {
            return this.$store.state.label.labels;
        }
    },
    methods:{
        onSubmitLabel(){
            if(!this.label.id){
                this.label.id = this.lastLabelId;
                this.$store.dispatch('addLabel', this.label);
                this.viewModal = !this.viewModal;
                alert('Label created successfully!');
                this.label = {
                    name: '',
                    id: ''
                };
            }
            // console.log(this.label)
        },

        handleAddLabel(){
            this.viewModal = true;
            this.modalItem = 'form-add-label';
            this.labelTitle = 'Add Label';
        },

        handleCreateContact(){
            this.viewModal = true;
            this.modalItem = 'form-contact'
        },

        createContact(){
            this.form.id = this.lastItemId;
            this.$store.dispatch('addContact', this.form);
            this.viewModal = !this.viewModal;
            alert('Contact created successfully!');
            this.form = this.resetForm();
        },

        resetForm(){
            return {
                name:'',
                email: '',
                address: '',
                phone: ''
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
}
</style>
