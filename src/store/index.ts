import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    boutonActif: "None" as string,
    chlore: 2 as number,
    tauxChlore: true as boolean,
    reservoirChlore: 70 as number,
    pH: 7.2 as number,
    tauxPH: true as boolean,
    derniereMesure: "20 juillet" as string,
    reservoirPHplus: 10 as number,
    reservoirPHmoins: 25 as number,
    reservoirBandelette: 40 as number,
    bandeletteParJour: 1 as number,
    capacite: 0 as number,
    type: "" as string,
    region: "" as string,
    dateOuverture: "" as string,
    dateFermeture: "" as string,
    frequence: 0 as number,
    unite: "" as string,
    heures: "" as string,
  },
});
