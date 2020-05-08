<template>
    <div class="bg-white rounded p-4 card">
        <header class="p-2 text-left">
            <h4 class="text-md font-bold">{{ title }}</h4>
        </header>
        <hr style="margin:0">

        <div class="card-content has-text-left">
            <div class="content">
                <form @submit.prevent="createContact">
                    <div class="text-left p-2">
                        <label class="label">Name</label>
                        <input class="text-sm block p-3 rounded w-full bg-white border border-gray-300 placeholder-gray-600 shadow focus:placeholder-gray-500 my-1" required v-model="form.name" type="text" placeholder="e.g John Doe">
                    </div>

                    <div class="text-left p-2">
                        <label class="label">Email</label>
                        <input class="text-sm block p-3 rounded w-full bg-white border border-gray-300 placeholder-gray-600 shadow focus:placeholder-gray-500 my-1" required type="email" v-model="form.email" placeholder="e.g john@doe.com">
                    </div>

                    <div class="text-left p-2">
                        <label class="label">Phone</label>
                        <input class="text-sm block p-3 rounded w-full bg-white border border-gray-300 placeholder-gray-600 shadow focus:placeholder-gray-500 my-1" required type="text" v-model="form.phone" placeholder="e.g +234 8090342345">
                    </div>

                    <div class="text-left p-2">
                        <label class="label">Address</label>
                        <input class="text-sm block p-3 rounded w-full bg-white border border-gray-300 placeholder-gray-600 shadow focus:placeholder-gray-500 my-1" type="text" v-model="form.address" placeholder="e.g Lagos Nigeria">
                    </div>

                    <div class="text-left p-2">
                        <label class="label">Label</label>
                        <select class="text-sm block p-3 rounded w-full bg-white border border-gray-300 placeholder-gray-600 shadow focus:placeholder-gray-500 my-1" v-model="form.label" placeholder="Select Label">
                            <option v-for="(label, key) in getLabel" :key="key" :value="label.id">
                                {{ label.name }}
                            </option>
                        </select>
                    </div>

                    <div class="text-left p-2">
                        <button class="bg-blue-500 py-2 px-4 rounded text-white">Save</button>
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
                alert('Contact updated successfully!');
            }
            else{
                this.form.id = this.lastItemId;
                this.form.created_at = new Date();
                this.$store.dispatch('addContact', this.form);
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

