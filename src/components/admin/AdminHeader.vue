<template>
  <div id="mainHeader">
    <span v-if="isLoggedIn">
      <a @click="logout">Logout {{ authUser}}</a>
    </span>
    <span v-else>
      <span>
        <router-link to="/register">Register</router-link>
      </span>
      <span>
        <router-link to="/login">Login</router-link>
      </span>
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AdminHeader",
  computed: {
    ...mapGetters(["authUser", "isLoggedIn"])
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>