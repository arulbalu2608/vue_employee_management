<template>
  <div class="add container">
    <h1 class="pt-3">Edit Employee</h1>
    <div class="row py-5">
      <div class="col-6">
        <label class="form-label">Empolyee ID</label>
        <input
          type="text"
          v-model="employeeDetails.id"
          disabled
          class="form-control cursor-notallowed"
        />
      </div>
      <div class="col-6">
        <label class="form-label">Empolyee Name</label>
        <input
          type="text"
          v-model="employeeDetails.name"
          class="form-control"
        />
      </div>
      <div class="col-6 pt-4">
        <label class="form-label">Empolyee Email</label>
        <input
          type="email"
          v-model="employeeDetails.email"
          class="form-control"
        />
      </div>
      <div class="col-6 pt-4">
        <label class="form-label">Empolyee Number</label>
        <input
          type="number"
          v-model="employeeDetails.mobileno"
          class="form-control"
        />
      </div>
      <div class="col-6 pt-4">
        <label class="form-label">Skills</label>
        <select class="form-select" v-model="employeeDetails.skills">
          <option>React js</option>
          <option>Vue js</option>
          <option>Angular</option>
        </select>
      </div>
    </div>

    <div class="text-end">
      <button type="button" class="btn btn-success" @click="handleSubmit">
        Save Changes
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditEmployee",
  data() {
    return {
      employeeDetails: {
        id: "",
        name: "",
        email: "",
        mobileno: "",
        skills: "React js",
      },
    };
  },
  mounted() {
    let data = this.$route.params;
    this.employeeDetails = data;
  },

  methods: {
    handleSubmit() {
      if (
        this.employeeDetails?.id != "" &&
        this.employeeDetails?.name != "" &&
        this.employeeDetails?.email != "" &&
        this.employeeDetails?.mobileno != ""
      ) {
        let body = this.employeeDetails;

        this.$store.dispatch("employeeModule/editEmployee", body);
        this.$toast.success("Edited Successfully");
        this.$router.push("/");
      } else {
        this.$toast.error("Enter All the field to submit");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cursor-notallowed {
  cursor: not-allowed;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
