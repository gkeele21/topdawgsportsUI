<template>
  <div class="home">
    <Sidebar></Sidebar>

    <MainHeader></MainHeader>

    <div id="mainContent">
      <h2>Welcome to your dashboard</h2>
      <b-container>
        <b-row>
          <b-col cols="3">
            <div>
              <router-link
                :to="{ name: 'createorjoinleague', params: { seasonid: 41, fantasygameid: 13 }}"
              >Join College Football Player Love 'Em & Leave 'Em</router-link>
            </div>
          </b-col>
          <b-col cols="5">
            <UserTeams></UserTeams>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from "@/components/MainHeader.vue";
import Sidebar from "@/components/Sidebar.vue";
import UserTeams from "@/components/UserTeamsTable.vue";

export default {
  name: "dashboard",
  components: {
    MainHeader,
    Sidebar,
    UserTeams
  }
};
</script>

<style>
#mainContent {
  margin-top: 25px;
}

h2 {
  text-align: center;
}
</style>
