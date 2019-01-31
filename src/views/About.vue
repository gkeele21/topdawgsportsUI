<template>
  <div class="about">
      <the-header/>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
    // @ is an alias to /src
    import TheHeader from '@/components/TheHeader.vue'

    export default {
        name: 'about',
        components: {
            TheHeader
        }
    }
</script>