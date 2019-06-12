<template>
    <div>
        <Navbar />
        <div class="container is-fluid" style="margin: 0;">
            <div class="columns">
                <div class="column is-one-fifth">
                    <Sidebar />
                </div>

                <div class="column">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>   
</template>


<script>
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'
export default {
    components: {
        Navbar,
        Sidebar
    }
}
</script>
