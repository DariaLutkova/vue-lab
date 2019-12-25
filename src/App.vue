<template>
  <div id="app">
    <div class="search-box">
      <input
        type="text"
        class="form-control mt-3"
        placeholder="Search by firstname"
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
    <!-- {{ filteredList }} -->
    <pop-up
      v-if="PopUpState"
      :person="person"
      @closePopUp="PopUpState = false"
      @save="updatePerson($event)"
    />
  </div>
</template>

<script>
import Person from "./components/Person.vue";
import PopUp from "./components/PopUp.vue";

export default {
  name: "app",
  data: () => ({
    person: null,
    search: "",
    field: "firstName",
    sort: true,
    PopUpState: false,
    glamorousPeople: [
      {
        id: 1,
        firstName: "David",
        lastName: "Bowie"
      },
      {
        id: 2,
        firstName: "Gerard",
        lastName: "Way"
      },
      {
        id: 3,
        firstName: "Brian",
        lastName: "May"
      }
    ],
    newGlamIcon: {
      firstName: null,
      lastName: null
    },
    counter: 3
  }),
  components: {
    Person,
    PopUp
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
    remove(e) {
      this.glamorousPeople = this.glamorousPeople.filter(el => {
        return el.id != e;
      });
    },
    addPerson() {
      this.counter++;
      this.newGlamIcon.firstName &&
        this.newGlamIcon.lastName &&
        this.glamorousPeople.push({
          id: this.counter,
          firstName: this.newGlamIcon.firstName,
          lastName: this.newGlamIcon.lastName
        });
    },
    updatePerson($event) {
      this.glamorousPeople.map(el => {
        if (el.id == $event.id) {
          el.firstName = $event.firstName;
          el.lastName = $event.lastName;
        }
        return el;
      });
      this.PopUpState = false;
    },
    editPerson(person) {
      this.PopUpState = true;
      this.person = person;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  position: relative;
  box-sizing: border-box;
}

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
