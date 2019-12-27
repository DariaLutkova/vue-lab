<template>
  <div id="edit-page">
    <div class="input-group mb-3">
      <h2>Edit person</h2>
      <input
        type="text"
        class="form-control mt-3"
        placeholder="Enter First Name"
        aria-label="First"
        aria-describedby="basic-addon1"
        v-model="firstName"
        required
      />
      <input
        type="text"
        class="form-control mt-3"
        placeholder="Enter Last Name"
        aria-label="Last"
        aria-describedby="basic-addon1"
        v-model="lastName"
        required
      />
      <button type="button" class="btn btn-info mt-3" @click="updatePerson()">
        Save
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "edit",
  data: () => ({
    firstName: "",
    lastName: ""
  }),
  created() {
    fetch(`http://localhost:3000/persons/${this.$route.params.id}`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.firstName = response.firstName;
        this.lastName = response.lastName;
      });
  },
  methods: {
    updatePerson() {
      fetch(`http://localhost:3000/persons/${this.$route.params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName
        })
      }).then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style></style>
