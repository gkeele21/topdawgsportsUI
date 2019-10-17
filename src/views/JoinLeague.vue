<template>
  <div>
    <Sidebar />
    <MainHeader />
    <br />
    <b-container>
      <b-row>
        <b-col>
          <JoinLeagueTable v-bind:fantasygameid="fantasygameid" v-bind:seasonid="seasonId" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <hr />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import Sidebar from "@/components/Sidebar.vue";
import JoinLeagueTable from "@/components/JoinLeagueTable.vue";

export default {
  name: "joinleague",
  components: {
    JoinLeagueTable,
    MainHeader,
    Sidebar
  },
  data() {
    return {
      seasonId: this.$route.params.seasonid,
      fantasygameid: this.$route.params.fantasygameid
    };
  }
};
</script>