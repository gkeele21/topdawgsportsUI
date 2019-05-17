<template>
  <div class="home">
    <AdminSidebar></AdminSidebar>
    <AdminHeader></AdminHeader>
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-breadcrumb :items="items"></b-breadcrumb>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div id="mainContent">
            <h2>Welcome to your admin dashboard!</h2>
          </div>
        </b-col>
      </b-row>
    </b-container>
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
  },
  data() {
    return {
      items: [
        {
          text: "Admin",
          active: true
        }
      ]
    };
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
