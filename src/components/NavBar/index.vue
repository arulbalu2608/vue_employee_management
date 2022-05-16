<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5">
    <a class="navbar-brand" href="#">Employe Management</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link" to="/home">All Employee</router-link>
        </li>
        <li class="nav-item" v-show="isSuperAdmin">
          <router-link class="nav-link" to="/add-employee"
            >Add Employee</router-link
          >
        </li>
      </ul>
    </div>
    <div>
      <button type="button" class="btn btn-light" @click="logout">
        Logout
      </button>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  computed: mapGetters({
    isSuperAdmin: "getisSuperAdmin",
  }),
  methods: {
    logout() {
      this.$router.push("/");
      this.$toast.success("Logged Out");
      this.$store.dispatch("employeeModule/changeLoginStatus");
      !this.isSuperAdmin &&
        this.$store.dispatch("employeeModule/changeAdminStatus");
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-brand {
  font-weight: 600;
  font-size: 24px;
}
.nav-item {
  font-size: 18px;
}
</style>
>
