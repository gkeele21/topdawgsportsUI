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
          <SeasonCreateTable/>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <hr>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import SeasonCreateTable from "@/components/admin/SeasonCreateTable.vue";
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminSidebar from "@/components/admin/AdminSidebar.vue";

export default {
  name: "seasoncreate",
  components: {
    SeasonCreateTable,
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
          to: { name: "adminseasons" }
        },
        {
          text: "SeasonCreate",
          active: true
        }
      ]
    };
  }
};
</script>
