<template>
  <div class="home">
    <TheAdminHeader/>
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
import TheAdminHeader from "@/components/admin/TheAdminHeader.vue";
import SeasonLeagues from "@/components/admin/SeasonLeaguesTable.vue";

export default {
  name: "seasoninfo",
  components: {
    SeasonInfoTable,
    TheAdminHeader,
    SeasonLeagues
  },
  data() {
    return {
      seasonId: this.$route.params.seasonid
    };
  }
};
</script>
