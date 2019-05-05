<template>
  <div class="home">
    <Sidebar></Sidebar>

    <MainHeader></MainHeader>

    <div id="mainContent">
      <h2>Welcome to your dashboard</h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from "@/components/MainHeader.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "dashboard",
  components: {
    MainHeader,
    Sidebar
  }
};
</script>

<style>
#mainContent {
  margin-top: 25px;
}

h2 {
  text-align: center;
}
</style>
