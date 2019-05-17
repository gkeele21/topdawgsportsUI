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
          <UsersTable msg="My Users"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import UsersTable from "@/components/admin/UsersTable.vue";
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminSidebar from "@/components/admin/AdminSidebar.vue";

export default {
  name: "users",
  components: {
    UsersTable,
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
          text: "Users",
          active: true
        }
      ]
    };
  }
};
</script>