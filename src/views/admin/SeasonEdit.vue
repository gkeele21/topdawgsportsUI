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
          <SeasonEditTable v-bind:seasonId="seasonId"/>
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
import SeasonEditTable from "@/components/admin/SeasonEditTable.vue";
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminSidebar from "@/components/admin/AdminSidebar.vue";

export default {
  name: "seasonedit",
  components: {
    SeasonEditTable,
    AdminHeader,
    AdminSidebar
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
          to: { name: "adminseasoninfo" }
        },
        {
          text: "SeasonEdit",
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
