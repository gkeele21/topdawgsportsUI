<template>
  <div class="home">
    <AdminSidebar />
    <AdminHeader />
    <b-container>
      <b-row>
        <b-col>
          <CreateTeamTable v-bind:fantasyleagueid="fantasyLeagueId" />
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
// @ is an alias to /src
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminSidebar from "@/components/admin/AdminSidebar.vue";
import CreateTeamTable from "@/components/CreateTeamTable.vue";

export default {
  name: "createteam",
  components: {
    CreateTeamTable,
    AdminHeader,
    AdminSidebar
  },
  data() {
    return {
      fantasyLeagueId: this.$route.params.fantasyleagueid
    };
  },
  created: function() {}
};
</script>
