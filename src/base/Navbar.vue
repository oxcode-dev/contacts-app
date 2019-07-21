<template>
    <div class="header">
        <div class="container-fluid">
            <div class="columns">
                <div class="column">
                    <a class="navbar-item brand" href="#">
                        <i class="far fa-address-book fa-2x" style="margin-right: 10px"></i>
                        <span>ContactsBook</span>
                    </a>
                </div>
                <div class="column is-three-fifths">
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input class="input searchbar" v-model="search" type="text" @keyup="searchContact" placeholder="Email">
                            <span class="icon is-small is-left">
                                <i class="fas fa-search"></i>
                            </span>
                        </p>
                    </div>
                </div>
                <div class="column">
                    <div class="navbar-end is-pulled-right">
                        <div class="navbar-item">
                            <figure class="image is-32x32">
                                <img class="is-rounded" src="https://blog.ninapaley.com/wp-content/uploads/2011/05/avatar640clear0011.png">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            search: ''
        }
    },

    methods: {
        searchContact(){
            this.$store.dispatch('labelSearchContact', '')
            this.$store.dispatch('searchContact', this.search);
        }
    }
}
</script>



<style scoped>
    .header{
        background-color: #5DD262;
        color: #ffffdf;
        padding: 10px;
    }
    .brand{
        font-family: 'Oswald', sans-serif;
    }
    .navbar{
        background-color: transparent;
    }
    a.brand{
        background-color: transparent!important;
        color: #ffffff!important;
    }
    a.brand > span{
        font-size: 20px;
    }
    a.navbar-item{
        color: #ffffdf
    }
    .navbar-item img {
        max-height: none;
    }
    .searchbar {
        border: none;
        outline: none;
        border-radius: 10rem;
        box-shadow: 0 1rem 2rem rgba(black, .1);
        position: relative;
        transition: all .2s;
        transition-delay: .1s;
        width: 100%;
        box-sizing: border-box;
    }
</style>
    