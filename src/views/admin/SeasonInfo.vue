<template>
  <div class="home">
    <AdminSidebar/>
    <AdminHeader/>
    <SeasonInfoTable v-bind:seasonId="seasonId"/>
    <hr>
    <br>
    <SeasonLeagues v-bind:gameInfo="{gameId: 1, gameName:'Head to Head'}"/>
    <hr>
    <SeasonLeagues v-bind:gameInfo="{gameId: 2, gameName:'Salary Cap'}"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SeasonInfoTable from "@/components/admin/SeasonInfoTable.vue";
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminSidebar from "@/components/admin/AdminSidebar.vue";
import SeasonLeagues from "@/components/admin/SeasonLeaguesTable.vue";

export default {
  name: "seasoninfo",
  components: {
    SeasonInfoTable,
    AdminHeader,
    AdminSidebar,
    SeasonLeagues
  },
  data() {
    return {
      seasonId: this.$route.params.seasonid
    };
  }
};
</script>
