<template>
  <div class="login-content d-flex justify-content-center align-items-center">
    <div>
      <h1 class="display-5">Employee Mangement Login Page</h1>
      <div class="row py-5">
        <div class="col-12">
          <label class="form-label">Email Id</label>
          <input type="text" v-model="login.email" class="form-control" />
        </div>
        <div class="col-12 pt-3">
          <label class="form-label">Password</label>
          <input
            type="password"
            v-model="login.password"
            class="form-control"
          />
        </div>
      </div>

      <div class="pt-3 text-center">
        <button type="button" class="btn btn-success" @click="handleSubmit">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LoginPage",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  computed: mapGetters({
    superAdminCredentials: "getSuperAdmin",
    subAdminCredentials: "getSubAdmin",
  }),
  methods: {
    handleSubmit() {
      if (this.login.email !== "" && this.login.password !== "") {
        if (
          JSON.stringify(this.login) ===
          JSON.stringify(this.superAdminCredentials)
        ) {
          this.$toast.success("welcome SuperAdmin");
          this.$store.dispatch("employeeModule/changeLoginStatus");
          this.$router.push("/home");
        } else if (
          JSON.stringify(this.login) ===
          JSON.stringify(this.subAdminCredentials)
        ) {
          this.$toast.success("welcome  SubAdmin");
          this.$store.dispatch("employeeModule/changeLoginStatus");
          this.$store.dispatch("employeeModule/changeAdminStatus");
          this.$router.push("/home");
        } else {
          this.$toast.error("Credentials Invalid");
        }
      } else {
        this.$toast.error("Enter All the field to login");
      }
    },
  },
};
</script>

<style scoped>
.login-content {
  height: 100vh;
}
</style>
