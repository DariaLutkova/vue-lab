<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ firstName }}</td>
    <td>{{ lastName }}</td>
    <td class="flex">
      <button
        type="button"
        class="close rewrite"
        aria-label="Rewrite"
        @click="$emit('changePerson', { id, firstName, lastName })"
      >
        <span aria-hidden="true"><i class="fas fa-pen"></i></span>
      </button>
      <button
        type="button"
        class="close def"
        aria-label="Close"
        @click="clickHandler"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </td>
  </tr>
</template>
<script>
export default {
  props: ["id", "firstName", "lastName"],
  methods: {
    clickHandler() {
      this.$emit("removePerson", this.id);
    }
  }
};
</script>
<style>
  .flex {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }

  .rewrite {
    font-size: 18px;
  }

  .def {
    font-size: 32px;
    right: 10px;
  }
</style>
