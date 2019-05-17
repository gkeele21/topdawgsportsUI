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
          <SeasonInfoTable v-bind:seasonId="seasonId"/>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <hr>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <SeasonLeagues v-bind:gameInfo="{gameId: 1, gameName:'Head to Head'}"/>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <SeasonLeagues v-bind:gameInfo="{gameId: 2, gameName:'Salary Cap'}"/>
        </b-col>
      </b-row>
    </b-container>
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
      seasonId: this.$route.params.seasonid,
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
          text: "SeasonInfo",
          active: true
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch("setAdminSeasonId", { adminSeasonId: this.seasonId });
  }
};
</script>
