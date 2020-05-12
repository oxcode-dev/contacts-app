<template>
    <div class="header">

        <div class="bg-green-500 p-2">
            <div class="w-full md:hidden" v-if="active">
                <div class="w-full">
                    <div class="w-full h-10 px-2 bg-white border rounded flex justify-between items-center relative">
                        <input type="search" v-model="search" @keyup="searchContact" placeholder="Search" class="appearance-none w-full outline-none focus:outline-none active:outline-none"/>
                        <button type="submit" class="ml-1 outline-none focus:outline-none active:outline-none" @click="active = !active">
                           <svg class="w-6 h-6 text-gray-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-between" v-if="!active">
                <div class="w-2/3 md:w-1/4 flex justify-between items-center">
                    <div class="flex items-center">
                        <a href="#" class="text-white" @click.prevent="sidebar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        </a>

                        <a class="brand ml-4" href="#" >
                            <i class="far fa-address-book fa-2x mr-2"></i>
                            <span>ContactsBook</span>
                        </a>
                    </div>
                </div>

                <div class="w-full md:w-2/4 hidden md:block">
                    <div class="w-full">
                        <div class="w-full h-10 px-2 bg-white border rounded-full flex justify-between items-center relative">
                            <input type="search" v-model="search" @keyup="searchContact" placeholder="Search" class="appearance-none w-full outline-none focus:outline-none active:outline-none"/>
                            <button type="submit" class="ml-1 outline-none focus:outline-none active:outline-none">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    viewBox="0 0 24 24" class="w-6 h-6">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="w-1/3 md:w-1/4 ml-2">
                    <div class="cursor-pointer mr-2 text-white flex items-center justify-end">
                        <button type="submit" class="my-1 mx-2 outline-none focus:outline-none active:outline-none md:hidden" @click="active = !active">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                viewBox="0 0 24 24" class="w-6 h-6">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                        <div class="rounded-full h-8 w-8 flex-shrink-0 mr-1 mt-1 overflow-hidden shadow-inner relative">
                            <img loading="lazy" src="https://pbs.twimg.com/profile_images/1096845156177846273/2zO578ou_normal.jpg" alt="codingsafari" class="absolute inset-0 z-negative w-full h-full">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            search: '',
            active: false
        }
    },

    methods: {
        searchContact(){
            this.$store.dispatch('labelSearchContact', '')
            this.$store.dispatch('searchContact', this.search);
        },

        sidebar(){
            this.$store.dispatch('sidebar', !this.getSidebar);
        },
    },

    computed:{
        ...mapGetters({
            getSidebar: 'getSidebar'
        })
    }
}
</script>
