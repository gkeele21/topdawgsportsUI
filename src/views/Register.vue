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
          >That email already exists. Please try again, or Login with your existing user.</b-alert>
        </b-row>
      </b-container>
      <b-container>
        <b-row class="justify-content-md-center">
          <h3>REGISTER</h3>
        </b-row>
      </b-container>
      <b-form @submit.prevent="register">
        <b-container>
          <b-form-row align-h="center" class="justify-content-md-center">
            <b-col cols="5">
              <b-form-group
                id="firstnameGroup"
                horizontal
                label-cols="3"
                label-for="inputHorizontal"
                label-class="font-weight-bold pt-0"
                label-text-align="right"
                label="First Name:"
              >
                <b-form-input id="firstname" type="text" required autofocus v-model="firstname"></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row align-h="center" class="justify-content-md-center">
            <b-col cols="5">
              <b-form-group
                id="lastnameGroup"
                horizontal
                label-cols="3"
                label-for="inputHorizontal"
                label-class="font-weight-bold pt-0"
                label-text-align="right"
                label="Last Name:"
              >
                <b-form-input id="lastname" type="text" required v-model="lastname"></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row align-h="center" class="justify-content-md-center">
            <b-col cols="5">
              <b-form-group
                id="emailGroup"
                horizontal
                label-cols="3"
                label-for="inputHorizontal"
                label-class="font-weight-bold pt-0"
                label-text-align="right"
                label="Email:"
              >
                <b-form-input id="email" type="text" required v-model="email"></b-form-input>
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
                <b-form-input id="password" type="password" required v-model="password"></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row class="justify-content-md-center">
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form-row>
        </b-container>
      </b-form>
    </div>
  </div>
</template>
     
<script>
import MainHeader from "@/components/MainHeader.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password_confirmation: "",
      errorCount: 0,
      successCount: 0
    };
  },
  components: {
    MainHeader,
    Sidebar
  },
  methods: {
    register: function() {
      let data = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/dashboard"))
        .catch(err => {
          this.errorCount = 5;
          this.successCount = 0;
          console.log(err);
        });
    }
  }
};
</script>