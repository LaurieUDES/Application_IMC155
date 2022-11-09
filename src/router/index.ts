import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Accueil from "../views/accueil/Accueil.vue";
import Produits from "../views/produits/Produits.vue";
import Donnees from "../views/donnees/Donnees.vue";
import Profil from "../views/profil/Profil.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Accueil,
  },
  {
    path: "/produits",
    component: Produits,
  },
  {
    path: "/donnees",
    component: Donnees,
  },
  {
    path: "/profil",
    component: Profil,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
