<template>
    <div class="card">
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
                            <input class="input" required v-model="form.name" type="text" placeholder="e.g Associates">
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
