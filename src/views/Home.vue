<template>
  <div class="home">
    <the-header></the-header>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    TheHeader
  }
}
</script>
