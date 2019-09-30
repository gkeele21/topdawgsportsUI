<template>
  <div class="home">
    <AdminSidebar />
    <AdminHeader />
    <b-container>
      <b-row>
        <b-col>
          <b-breadcrumb :items="items"></b-breadcrumb>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <UserInfoTable v-bind:userid="userId" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminSidebar from "@/components/admin/AdminSidebar.vue";
import UserInfoTable from "@/components/admin/UserInfoTable.vue";

export default {
  name: "userinfo",
  components: {
    UserInfoTable,
    AdminHeader,
    AdminSidebar
  },
  data() {
    return {
      userId: this.$route.params.userid,
      items: []
    };
  },
  mounted() {
    this.$store.dispatch("setAdminUserId", { adminUserId: this.userId });
  },

  created: function() {
    this.items = [
      {
        text: "Admin",
        to: { name: "admindashboard" }
      },
      {
        text: "Users",
        to: { name: "adminusers" }
      },
      {
        text: "UserInfo",
        active: true
      }
    ];
  }
};
</script>
