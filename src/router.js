import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";

import Acceuil from "./views/Acceuil.vue";
import Login from "./views/Login.vue";

import Mentions from "./views/Mentions.vue";
import Formulaire from "./views/Formulaire.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
   
    {
      path: "/",
      name: "Acceuil",
      components: {
        header: AppHeader,
        default: Acceuil,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
      },
     {
        path: "/Formulaire",
        name: "Formulaire",
        components: {
          header: AppHeader,
          default: Formulaire,
          footer: AppFooter
        }
     },
        {
      path: "/Mentions",
      name: "Mentions",
      components: {
        header: AppHeader,
        default: Mentions,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
