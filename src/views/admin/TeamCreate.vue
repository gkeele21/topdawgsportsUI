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
          <TeamCreateTable/>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <hr>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminSidebar from "@/components/admin/AdminSidebar.vue";
import TeamCreateTable from "@/components/admin/TeamCreateTable.vue";
import { mapState } from "vuex";

export default {
  name: "teamcreate",
  components: {
    TeamCreateTable,
    AdminHeader,
    AdminSidebar
  },
  computed: {
    ...mapState(["adminSeasonId", "adminLeagueId"])
  },
  data() {
    return {
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
        text: "TeamCreate",
        active: true
      }
    ];
  }
};
</script>
