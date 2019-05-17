<template>
  <aside id="sidebar">
    <!-- <i v-on:click="expandClick" class="fa fa-expand"></i> -->
    <section id="logo">
      <img alt="Topdawg logo" src="@/assets/LogoSmall.png">
    </section>
    <section id="sidebarMenu">
      <ul>
        <span v-if="isLoggedIn">
          <li>
            <i class="fa fa-desktop"></i>
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
        </span>
        <span v-if="isAdmin">
          <li>
            <i class="fa fa-user-secret"></i>
            <router-link to="/admin">Admin</router-link>
          </li>
        </span>
        <li>
          <i class="fa fa-info-circle"></i>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </section>
  </aside>
</template>

<style src="../assets/css/main.css"></style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",
  computed: {
    ...mapGetters(["authUser", "isLoggedIn", "isAdmin"])
  },
  methods: {
    expandClick: function() {
      alert("made it in");
      document.getElementById("#sidebar").width = "50";
    }
  }
};
</script>