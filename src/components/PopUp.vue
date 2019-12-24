<template>
  <div class="pop-up">
    <div @click="$emit('closePopUp')" class="pop-up__bg"></div>
    <div class="pop-up__content">
      <h1 class="mt-3">Edit</h1>
      <div class="pop-up__inputs">
        <input
          type="text"
          class="form-control mt-3"
          v-model="localFirstName"
          placeholder="Enter First Name"
          aria-label="First"
          aria-describedby="basic-addon1"
          required
        />
        <input
          type="text"
          class="form-control mt-3"
          v-model="localLastName"
          placeholder="Enter Last Name"
          aria-label="Last"
          aria-describedby="basic-addon1"
          required
        />
        <div class="pop-up__actions">
          <button
            @click="$emit('closePopUp')"
            type="button"
            class="btn btn-danger mt-3"
          >
            Cancel
          </button>
          <button @click="save" type="button" class="btn btn-success mt-3">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["person"],
  data() {
    return {
      localFirstName: this.person.firstName,
      localLastName: this.person.lastName
    };
  },
  methods: {
    save() {
      const newPerson = {
        id: this.person.id,
        firstName: this.localFirstName,
        lastName: this.localLastName
      };
      console.log(newPerson);
      this.$emit("save", newPerson);
    }
  }
};
</script>
<style type="text/css">
.pop-up {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.pop-up__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 0;
}
.pop-up__content {
  min-width: 400px;
  background-color: #f2f2f2;
  border-radius: 2px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.4);
  z-index: 10;
}
.pop-up__inputs {
  padding: 1rem 2rem;
}
.pop-up__actions {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
</style>
