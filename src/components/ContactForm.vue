<template>
    <div class="card">
        <header class="card-header">
            <div class="title is-4">{{ title }}</div>
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
                        <label class="label">Label</label>
                        <div class="control">
                            <select class="input" v-model="form.label" placeholder="Select Label">
                                <option v-for="(label, key) in getLabel" :key="key" :value="label.id">
                                    {{ label.name }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="field">
                        <button class="button is-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true
        }
    },

    data(){
        return{
            form: this.contact
        }
    },

    methods: {
         createContact(){
            if(this.form.id){
                this.$store.dispatch('editContact', this.form);
                this.viewModal = !this.viewModal;
                alert('Contact updated successfully!');
            }
            else{
                this.form.id = this.lastItemId;
                this.form.created_at = new Date();
                this.$store.dispatch('addContact', this.form);
                this.viewModal = !this.viewModal;
                alert('Contact created successfully!');
            }
            this.$emit('close', false);
        },
    },

    computed:{
        getLabel() {
            return this.$store.state.label.labels;
        },

        title(){
            return this.form.id ? "Edit Contact" : "Add New Contact";
        },

        lastItemId(){
            let arr = this.$store.state.contact.contacts;
            let lastId = arr.length - 1;
            return arr[lastId].id + 1;
        },
    },

    watch:{
        contact(){
            this.form = this.contact;
        }
    }
}
</script>

