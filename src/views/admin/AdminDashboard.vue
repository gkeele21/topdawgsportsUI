<template>
  <div class="home">
    <AdminSidebar></AdminSidebar>

    <AdminHeader></AdminHeader>

    <div id="mainContent">
      <h2>Welcome to your admin dashboard</h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminSidebar from "@/components/admin/AdminSidebar.vue";

export default {
  name: "dashboard",
  components: {
    AdminHeader,
    AdminSidebar
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
