import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Template3 from "../components/Templates/Template3.vue";
import PrintTemplate from "../views/TemplateForm.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/template",
    name: "Template3",
    component: Template3,
  },
  {
    path: "/print",
    name: "PrintTemplate",
    component: PrintTemplate,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
