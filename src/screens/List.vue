<template>
  <div>
    <div class="search-box">
      <input
        type="text"
        class="form-control mt-3"
        placeholder="Search"
        aria-label="First"
        aria-describedby="basic-addon1"
        v-model="search"
        required
      />
    </div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th @click="field = 'id'" scope="col">#</th>
          <th @click="field = 'firstName'" scope="col">First Name</th>
          <th @click="field = 'lastName'" scope="col">Last Name</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody id="sensorWrap" v-for="person in sordedList" :key="person.id">
        <Person
          :id="person.id"
          :firstName="person.firstName"
          :lastName="person.lastName"
          @removePerson="remove"
          @changePerson="editPerson(person)"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import Person from "@/components/Person.vue";

export default {
  name: "app",
  created() {
    this.updatePersonList();
  },
  data: () => ({
    person: null,
    search: "",
    field: "firstName",
    sort: true,
    glamorousPeople: [],
    newGlamIcon: {
      firstName: null,
      lastName: null
    },
    counter: 3
  }),
  components: {
    Person
    // PopUp
  },
  computed: {
    filteredList() {
      return this.glamorousPeople.filter(person => {
        let fullName = person.firstName + " " + person.lastName;
        return fullName.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
      });
    },
    sordedList() {
      let newList = this.filteredList;
      return newList.sort((a, b) => {
        if (a[this.field] > b[this.field]) return 1;
        if (a[this.field] < b[this.field]) return -1;
        return 0;
      });
    }
  },
  methods: {
    updatePersonList() {
      fetch("http://localhost:3000/persons")
        .then(response => response.json())
        .catch(error => {
          console.error("Error:", error);
        })
        .then(response => {
          this.glamorousPeople = response;
        });
    },
    remove(e) {
      // this.glamorousPeople = this.glamorousPeople.filter(el => {
      //   return el.id != e;
      // });
      fetch(`http://localhost:3000/persons/${e}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(() => {
        this.updatePersonList();
      });
    },
    editPerson(person) {
      this.$router.push(`/edit/${person.id}`);
    }
  }
};
</script>

<style>
.input-group {
  margin: 2rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
}

.form-control {
  width: 100% !important;
}

.search-box {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.table thead th:hover {
  background-color: #ccc;
  cursor: pointer;
}
</style>
