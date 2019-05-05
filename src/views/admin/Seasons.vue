<template>
  <div class="home">
    <AdmimSidebar/>
    <AdminHeader/>
    <SeasonsTable msg="My Seasons"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SeasonsTable from "@/components/admin/SeasonsTable.vue";
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminSidebar from "@/components/admin/AdminSidebar.vue";

export default {
  name: "seasons",
  components: {
    SeasonsTable,
    AdminHeader,
    AdminSidebar
  }
};
</script>
