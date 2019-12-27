import Vue from "vue";
import Router from "vue-router";
import List from "./screens/List";
import Add from "./screens/Add";
import Edit from "./screens/Edit";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "Main",
      path: "/",
      component: List
    },
    {
      name: "Edit",
      path: "/edit/:id",
      component: Edit
    },
    {
      name: "Add",
      path: "/add",
      component: Add
    }
  ]
});
