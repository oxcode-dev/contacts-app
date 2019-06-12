<template>
    <div class="modal" :class="{'is-active': active}">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-content">
            <slot></slot>            
        </div>
        <button class="modal-close is-large" @click="closeModal" aria-label="close"></button>
    </div>
</template>

<script>
export default {
    props: {
        active: {
            // default: false,
            type: Boolean
        }
    },
    data(){
        return{
        } 
    },
    methods:{
        closeModal(){
            this.$emit('closeViewContact', false)
        }
    },
}
</script>


<style scoped>
.card{
    background-color: #fff;
    border-bottom: 1px solid #dadce0;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: table;
    padding: 20px;
    table-layout: fixed;
    width: 100%;
}
.card-header{
    padding:10px;
    box-shadow: none!important;
}
.photo {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.details{
    margin-top: 8px;
}
.details i{
    margin-right: 10px;
}
</style>

