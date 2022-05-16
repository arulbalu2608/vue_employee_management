<template>
  <div v-show="isLoggedIn"><NavBar /></div>
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    NavBar,
  },
  computed: mapGetters({
    isLoggedIn: "getisLoggedIn",
    isSuperAdmin: "getisSuperAdmin",
  }),
};
</script>

<style lang="scss">
body {
  background-color: #fafaeb;
}
</style>
