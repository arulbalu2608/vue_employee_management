<template>
  <div class="home container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Sno</th>
          <th scope="col">Employee ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Contact Number</th>
          <th scope="col">Stack</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in allEmployee" :key="employee.id">
          <td>{{ index + 1 }}</td>
          <td>{{ employee.id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.mobileno }}</td>
          <td>{{ employee.stack.join(",") }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  computed: mapGetters({
    allEmployee: "getAllEmployee",
  }),
};
</script>

<style lang="scss" scoped>
.home {
  padding: 50px 0;
  .table {
    box-shadow: 0px 2px 6px #00000029;
  }
}
</style>
