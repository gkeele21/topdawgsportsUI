<template>
  <div class="home">
    <AdminSidebar/>
    <AdminHeader/>
    <b-container>
      <b-row>
        <b-col>
          <b-breadcrumb :items="items"></b-breadcrumb>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <SeasonsTable msg="My Seasons"/>
        </b-col>
      </b-row>
    </b-container>
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
  },
  data() {
    return {
      items: [
        {
          text: "Admin",
          to: { name: "admindashboard" }
        },
        {
          text: "Seasons",
          active: true
        }
      ]
    };
  }
};
</script>
