<template>
  <div v-if="active">
    <div class="modal overflow-y-scroll fixed w-full h-full flex justify-center" ref="modal"
         style="z-index:50; top: 0; left: 0; height: 100%; background-color: rgba(0,0,0,0.5)">

      <div class="modal-container mx-auto z-50" style="height: 10px; margin-top: 40px" ref="container">

        <div @click.prevent="closeModal" class="modal-close fixed cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50" style="top: 20px; right: 20px;">
          <svg class="fill-current text-white " xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </div>

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="modal-content flex flex-wrap justify-center" ref="content">
          <div class="md:w-1/2 w-full mx-6">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default{
    name: "Modal",
    props:{
      active: {
        type: Boolean,
        required: true
      }
    },

    methods:{
      closeModal(){
        this.$emit('close', false)
      },

      closeWithModal(e){
        // console.log(e.target)
        let modal = this.$refs.modal;
        let content = this.$refs.content;
        let container = this.$refs.container;
        if (e.target === modal || e.target === container || e.target === content) {
          this.closeModal()
        }
      }
    },

    mounted() {
      document.addEventListener('click', this.closeWithModal);
    },

    computed: {
      body() {
        return this.active;
      }
    },
    watch: {
      body() {
        let className = 'modal-open';
        if (this.active) {
          document.body.classList.add(className);
        } else {
          document.body.classList.remove(className);
        }
      },
    },
  }
</script>


<style>
.modal-open {
  position: fixed;
  width: 100%;
  top: auto;
}
</style>
