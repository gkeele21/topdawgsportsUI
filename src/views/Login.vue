<template>
  <div>
    <Sidebar/>
    <MainHeader/>
    <br>
    <br>
    <br>
    <br>
    <div>
      <b-container>
        <b-row class="justify-content-md-center">
          <b-alert
            id="loginSuccess"
            variant="success"
            :show="successCount"
            dismissible
            fade
            @dismissed="successCount=0"
          >Login successful.</b-alert>
          <b-alert
            id="loginError"
            variant="danger"
            :show="errorCount"
            dismissible
            fade
            @dismissed="errorCount=0"
          >Invalid username/password. Please try again.</b-alert>
        </b-row>
      </b-container>
      <b-container>
        <b-row class="justify-content-md-center">
          <h3>LOGIN</h3>
        </b-row>
      </b-container>
      <b-form @submit.prevent="login">
        <b-container>
          <b-form-row align-h="center" class="justify-content-md-center">
            <b-col cols="5">
              <b-form-group
                id="usernameGroup"
                horizontal
                label-cols="3"
                label-for="inputHorizontal"
                label-class="font-weight-bold pt-0"
                label-text-align="right"
                label="Username:"
              >
                <b-form-input id="username" type="text" required v-model="username"></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row align-h="center" class="justify-content-md-center">
            <b-col cols="5">
              <b-form-group
                id="passwordGroup"
                horizontal
                label-cols="3"
                label-for="inputHorizontal"
                label-class="font-weight-bold pt-0"
                label-text-align="right"
                label="Password:"
              >
                <b-form-input id="userpassword" type="password" required v-model="password"></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row class="justify-content-md-center">
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form-row>
        </b-container>
      </b-form>
      <br>
      <b-container>
        <b-row class="justify-content-md-center">
          Not registered?&#160;
          <router-link to="/register">Click here to register</router-link>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  data() {
    return {
      username: "",
      password: "",
      successCount: 0,
      errorCount: 0
    };
  },
  components: {
    MainHeader,
    Sidebar
  },
  methods: {
    login: function() {
      let username = this.username;
      let password = this.password;
      console.log("Status : " + this.$store.getters.authStatus);
      this.$store
        .dispatch("login", { username, password })
        .then(() => this.$router.push("/dashboard"))
        .catch(err => {
          console.log(err);
          this.successCount = 0;
          this.errorCount = 5;
        });
    }
  }
};
</script>