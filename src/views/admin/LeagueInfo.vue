<template>
  <div class="home">
    <AdminSidebar></AdminSidebar>
    <AdminHeader></AdminHeader>
    <LeagueInfoTable v-bind:leagueid="leagueId"/>
    <hr>
  </div>
</template>

<script>
// @ is an alias to /src
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminSidebar from "@/components/admin/AdminSidebar.vue";
import LeagueInfoTable from "@/components/admin/LeagueInfoTable.vue";

export default {
  name: "leagueinfo",
  components: {
    LeagueInfoTable,
    AdminHeader,
    AdminSidebar
  },
  data() {
    return {
      leagueId: this.$route.params.leagueid
    };
  }
};
</script>
