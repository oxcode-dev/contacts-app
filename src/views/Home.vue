<template>
  <div class="home">
    <Layout>
      <Home />
    </Layout>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Layout from '@/base/Layout.vue'
import Home from '@/pages/Home.vue'

export default {
  name: 'home',
  components: {
    Layout, Home
  }
}
</script>
