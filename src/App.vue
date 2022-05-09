<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
body {
  font-family: "Poppins", sans-serif !important;
}
</style>
