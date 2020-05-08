<template>
    <div class="bg-white rounded p-4 card">
        <header class="p-2 text-left">
            <h4 class="text-md font-bold">{{ labelTitle }}</h4>
        </header>
        <hr style="margin:0">

        <div class="text-left">
            <form @submit.prevent="onSubmitLabel">
                <div class="mt-4">
                    <label class="label">Name</label>
                    <input class="text-sm block p-3 rounded w-full bg-white border border-gray-300 placeholder-gray-600 shadow focus:placeholder-gray-500 my-1" required v-model="form.name" type="text" placeholder="e.g Associates">
                </div>

                <div class="mt-3">
                    <button class="bg-blue-500 py-2 px-4 rounded text-white">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        label: {
            type: Object,
            required: true,
        }
    },

    data(){
        return{
            form: this.label,
        }
    },

    computed:{
        labelTitle() {
            return this.label.id ? "Edit Label" : "Add New Label"
        },

        labelId(){
            let arr = this.$store.state.label.labels;
            let lastId = arr.length - 1;
            return arr[lastId].id + 1;
        },
    },

    methods: {
        onSubmitLabel(){
            if(!this.form.id){
                this.form.id = this.labelId;
                this.$store.dispatch('addLabel', this.form);
                alert('Label created successfully!');
                this.form = {
                    name: '',
                    id: ''
                };
            }
            else{
                this.$store.dispatch('editLabel', this.form);
                alert('Label Updated successfully!');
            }
            this.$emit('close', false)
        },
    },

    watch: {
        label(){
            this.form = this.label;
        }
    }
}
</script>
