<template>
  <aside id="sidebar">
    <!-- <i v-on:click="expandClick" class="fa fa-expand"></i> -->
    <section id="logo">
      <img alt="Topdawg logo" src="../assets/LogoSmall.png">
    </section>
    <section id="sidebarMenu">
      <ul>
        <li>
          <i class="fa fa-user-secret"></i>
          <router-link to="/admin">Admin</router-link>
        </li>
        <li>
          <i class="fa fa-desktop"></i>
          <router-link to="/">Dashboard</router-link>
        </li>
        <li>
          <i class="fa fa-info-circle"></i>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <i class="fa fa-info"></i>
          <router-link to="/salarycap/standings">Salary Standings</router-link>
        </li>
      </ul>
    </section>
  </aside>
</template>

<style src="../assets/css/main.css"></style>

<script>
export default {
  name: "Sidebar",
  methods: {
    expandClick: function() {
      alert("made it in");
      document.getElementById("#sidebar").width = "50";
    }
  }
};
</script>