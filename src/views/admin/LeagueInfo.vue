<template>
  <div class="home">
    <TheAdminHeader/>
    <LeagueInfoTable v-bind:leagueid="leagueId"/>
    <hr>
  </div>
</template>

<script>
// @ is an alias to /src
import TheAdminHeader from "@/components/admin/TheAdminHeader.vue";
import LeagueInfoTable from "@/components/admin/LeagueInfoTable.vue";

export default {
  name: "leagueinfo",
  components: {
    LeagueInfoTable,
    TheAdminHeader
  },
  data() {
    return {
      leagueId: this.$route.params.leagueid
    };
  }
};
</script>
