export default{
    data() {
      return {
          window: {
              width: 0,
              height: 0
          },
      }
    },
    computed: {
        isMobile () {
            return this.window.width <= 480
        },

        isTab () {
           return this.window.width <= 768 && this.window.width > 480
        },

        isDesktop() {
            return this.window.width > 768 && this.window.width <= 1280
        },

        isLargeDesktop() {
           // return this.window.width > 1366;
           return this.window.width > 1280;
        },

        isExtraScreen(){
            return this.window.width > 1440;
        }
    },
    methods:{
      handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      },

    },
    created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize)
    },

  }