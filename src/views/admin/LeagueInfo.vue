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
          <LeagueInfoTable v-bind:leagueid="leagueId" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <hr />
        </b-col>
      </b-row>
      <b-row>
        <LeagueTeamsTable v-bind:leagueid="leagueId" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminSidebar from "@/components/admin/AdminSidebar.vue";
import LeagueInfoTable from "@/components/admin/LeagueInfoTable.vue";
import LeagueTeamsTable from "@/components/admin/LeagueTeamsTable.vue";
import { mapState } from "vuex";

export default {
  name: "leagueinfo",
  components: {
    LeagueInfoTable,
    LeagueTeamsTable,
    AdminHeader,
    AdminSidebar
  },
  computed: {
    ...mapState(["adminSeasonId"])
  },
  data() {
    return {
      leagueId: this.$route.params.leagueid,
      items: []
    };
  },
  mounted() {
    this.$store.dispatch("setAdminLeagueId", { adminLeagueId: this.leagueId });
  },
  created: function() {
    this.items = [
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
        to: {
          name: "adminseasoninfo",
          params: { seasonid: this.adminSeasonId }
        }
      },
      {
        text: "LeagueInfo",
        active: true
      }
    ];
  }
};
</script>
