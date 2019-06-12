<template>
    
    <div class="card">
        <header class="card-header">
            <div>
                <img src="https://blog.ninapaley.com/wp-content/uploads/2011/05/avatar640clear0011.png" alt="Avatar" class="photo">
            </div>
            <div style="padding: 10px; text-align:left">
                <span class="subtitle is-4">{{ contact.name }}</span><br>
                <span class="tag is-light">Added on 12/02/2019</span>
            </div>
        </header>
        <hr style="margin:0">

        <div class="card-content has-text-left">
            <div class="content">
                <h5 class="subtitle is-5">Contact details</h5>

                <div class="details">
                    <span><i class="fas fa-phone"></i> {{ contact.phone }}</span>                            
                </div>
                
                <div class="details">
                    <span><i class="fas fa-at"></i> {{ contact.email }}</span>                            
                </div>
                
                <div class="details">
                    <span><i class="fas fa-map-marker-alt"></i> {{ contact.address }}</span>                            
                </div>
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

