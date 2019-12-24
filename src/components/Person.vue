<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ firstName }}</td>
    <td>{{ lastName }}</td>
    <td>
      <button
        type="button"
        class="close rewrite"
        aria-label="Rewrite"
        @click="$emit('changePerson', { id, firstName, lastName })"
      >
        <span aria-hidden="true">Rewrite</span>
      </button>
      <button
        type="button"
        class="close"
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
<style></style>
