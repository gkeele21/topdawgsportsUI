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
          <LeagueCreateTable v-bind:gameid="gameid"/>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <hr>
        </b-col>
      </b-row>
      <b-row>
        <!--<LeagueTeamsTable v-bind:leagueid="{leagueId: 1, gameName:'Head to Head'}"/>-->
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminSidebar from "@/components/admin/AdminSidebar.vue";
import LeagueCreateTable from "@/components/admin/LeagueCreateTable.vue";
import { mapState } from "vuex";

export default {
  name: "leaguecreate",
  props: { gameid: Number },
  components: {
    LeagueCreateTable,
    AdminHeader,
    AdminSidebar
  },
  computed: {
    ...mapState(["adminSeasonId"])
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
        text: "LeagueCreate",
        active: true
      }
    ];
  }
};
</script>
