<template>
  <div id="add-page">
    <div class="input-group mb-3">
      <h2>Add a New Person</h2>
      <input
        type="text"
        class="form-control mt-3"
        placeholder="Enter First Name"
        aria-label="First"
        aria-describedby="basic-addon1"
        v-model="newGlamIcon.firstName"
        required
      />
      <input
        type="text"
        class="form-control mt-3"
        placeholder="Enter Last Name"
        aria-label="Last"
        aria-describedby="basic-addon1"
        v-model="newGlamIcon.lastName"
        required
      />
      <button type="button" class="btn btn-info mt-3" @click="addPerson">
        Add
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    newGlamIcon: {
      firstName: null,
      lastName: null
    }
  }),
  methods: {
    addPerson() {
      this.newGlamIcon.firstName &&
        this.newGlamIcon.lastName &&
        fetch("http://localhost:3000/persons", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id: this.counter,
            firstName: this.newGlamIcon.firstName,
            lastName: this.newGlamIcon.lastName
          })
        })
          .then(response => response.json())
          .catch(error => console.error("Error:", error))
          .then(() => {
            this.$router.push("/");
          });
    }
  }
};
</script>
