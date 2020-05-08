<template>
    <div class="bg-white rounded p-4 card">
        <header class="flex items-center">
            <div class="mr-2">
                <img src="https://blog.ninapaley.com/wp-content/uploads/2011/05/avatar640clear0011.png" alt="Avatar" class="photo">
            </div>
            <div style="padding: 10px; text-align:left">
                <span class="subtitle is-4">{{ contact.name }}</span><br>
                <span class="text-gray-500">{{ contact.created_at }}</span>
            </div>
        </header>
        <hr style="margin:0">
         <div class="py-5 px-3">
            <div class="flex justify-start items-center px-2 py-2">
                <p class="flex text-gray-700">
                    <i class="fas fa-phone mr-1"></i>
                    Phone:
                </p>
                <p class="text-gray-500 font-thin ml-4">{{ contact.phone }}</p>
            </div>
            <div class="flex justify-start items-center px-2 py-2 bg-blue-100 rounded">
                <p class="flex text-gray-700">
                    <i class="fas fa-at mr-1"></i>
                    Email:
                </p>
                <p class="text-gray-500 font-thin ml-4">{{ contact.email }}</p>
            </div>
            <div class="flex justify-start items-center px-2 py-2">
                <p class="flex text-gray-700">
                    <i class="fas fa-map-marker-alt mr-1"></i>
                    Address:
                </p>
                <p class="text-gray-500 font-thin ml-4">{{ contact.address }}</p>
            </div>
            <div class="flex justify-start items-center px-2 py-2 bg-blue-100 rounded">
                <p class="flex text-gray-700">
                    <i class="fas fa-tag mr-1"></i>
                    Label:
                </p>
                <p class="text-gray-500 font-thin ml-4"> {{ label(contact.label) }}</p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        contact: {
            type: Object
        }
    },

    computed: {
        getAllLabels(){
            return this.$store.state.label.labels;
        }
    },

    methods: {
        label(id){
            return this.getAllLabels.find(n => n.id === id).name;
        }
    }
}
</script>