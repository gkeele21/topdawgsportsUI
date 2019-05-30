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
          <TeamEditTable v-bind:teamid="teamId"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminSidebar from "@/components/admin/AdminSidebar.vue";
import TeamEditTable from "@/components/admin/TeamEditTable.vue";
import { mapState } from "vuex";

export default {
  name: "teaminfo",
  components: {
    TeamEditTable,
    AdminHeader,
    AdminSidebar
  },
  computed: {
    ...mapState(["adminTeamId", "adminLeagueId", "adminSeasonId"])
  },
  data() {
    return {
      teamId: this.$route.params.teamid,
      items: []
    };
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
        to: {
          name: "adminleagueinfo",
          params: { leagueid: this.adminLeagueId }
        }
      },
      {
        text: "TeamInfo",
        to: {
          name: "adminteaminfo",
          params: { teamid: this.adminTeamId }
        }
      },
      {
        text: "TeamEdit",
        active: true
      }
    ];
  }
};
</script>
