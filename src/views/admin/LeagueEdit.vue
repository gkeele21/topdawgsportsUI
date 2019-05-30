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
          <LeagueEditTable v-bind:leagueid="leagueId"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminSidebar from "@/components/admin/AdminSidebar.vue";
import LeagueEditTable from "@/components/admin/LeagueEditTable.vue";
import { mapState } from "vuex";

export default {
  name: "leagueedit",
  components: {
    LeagueEditTable,
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
        to: {
          name: "adminleagueinfo",
          params: { leagueid: this.leagueId }
        }
      },
      {
        text: "LeagueEdit",
        active: true
      }
    ];
  }
};
</script>
