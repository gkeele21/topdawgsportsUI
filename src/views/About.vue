<template>
  <div class="about">
    <MainHeader/>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from "@/components/MainHeader.vue";

export default {
  name: "about",
  components: {
    MainHeader
  }
};
</script>