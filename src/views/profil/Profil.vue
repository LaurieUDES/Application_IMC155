<template>
  <div>
    <NavBar />
    <div class="colStyle">
      <div v-if="!form" class="paddingStyle">
        <h1 class="fontStyle">Capacité de la piscine:</h1>
        <label class="fontStyle">{{ capaciteValue }} Litres</label><br /><br />
        <h1 class="fontStyle">Type de piscine:</h1>
        <label class="fontStyle">{{ typeValue }}</label
        ><br /><br />
        <h1 class="fontStyle">Plage de fonctionnement de la piscine:</h1>
        <label class="fontStyle"
          >{{ dateOuvertureValue }} - {{ dateFermetureValue }} </label
        ><br /><br />
        <h1 class="fontStyle">Fréquence des tests:</h1>
        <label>{{ frequence }} fois par {{ unite }}</label>
        <br /><br />
        <h1 class="fontStyle">Heures d'opération:</h1>
        <label>{{ heures }}</label>
        <br /><br />
        <h1 class="fontStyle">Votre région:</h1>
        <label class="fontStyle">{{ regionValue }}</label
        ><br /><br />
        <div class="rowStyle">
          <button type="button" class="buttonStyle" @click="openForm()">
            Modifier les informations
          </button>
        </div>
      </div>

      <div v-if="form" class="paddingStyle">
        <p><b>Quel est la capacité de votre piscine en litre?</b></p>
        <input v-model.number="capacite" placeholder="Nombre de litres" />
        <p><b>Votre piscine est-elle hors terre, mi-creusée ou creusée?</b></p>
        <select v-model="type">
          <option disabled value="">Veuillez choisir une option</option>
          <option>Hors terre</option>
          <option>Mi-creusée</option>
          <option>Creusée</option>
        </select>
        <p>
          <b
            >Quelle est la date d'ouverture et de fermeture de votre piscine?</b
          >
        </p>
        <input type="date" v-model="dateOuverture" />
        <input type="date" v-model="dateFermeture" />
        <p>
          <b>Combien de fois voulez effectuer les tests de votre piscine?</b>
        </p>
        <input type="number" min="1" max="6" v-model="frequence" />
        <select v-model="unite">
          <option disabled value="">Veuillez choisir une option</option>
          <option>jour</option>
          <option>semaine</option>
        </select>
        <p>
          <b
            >À quel moment de la journée voulez-vous que les tests soient
            effectués?</b
          >
        </p>
        <select v-model="heures">
          <option disabled value="">Veuillez choisir une option</option>
          <option>Entre 0 et 7h</option>
          <option>Entre 7h et 12h</option>
          <option>Entre 12h et 15h</option>
          <option>Entre 15h et 19h</option>
          <option>Entre 19h et 24h</option>
        </select>
        <p><b>Quel est votre région?</b></p>
        <input v-model="region" placeholder="Indiquez votre région" />
        <div class="rowStyle">
          <button type="button" class="buttonCancelStyle" @click="closeForm()">
            Cancel
          </button>
          <button type="button" class="buttonSaveStyle" @click="saveForm()">
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "../../components/basic/navBar/NavBar.vue";
import Footer from "../../components/basic/footer/Footer.vue";
import store from "../../store";

export default defineComponent({
  name: "PageProfil",
  components: { NavBar, Footer },

  data() {
    return {
      form: false as boolean,
      capacite: 0 as number,
      type: "" as string,
      frequence: 0 as number,
      unite: "" as string,
      heures: "" as string,
      region: "" as string,
      dateOuverture: "" as string,
      dateFermeture: "" as string,
    };
  },

  mounted() {
    store.state.boutonActif == "None";
  },

  computed: {
    capaciteValue() {
      return store.state.capacite;
    },
    typeValue() {
      return store.state.type;
    },
    regionValue() {
      return store.state.region;
    },
    dateOuvertureValue() {
      return store.state.dateOuverture;
    },
    dateFermetureValue() {
      return store.state.dateFermeture;
    },
  },

  methods: {
    openForm() {
      this.$data.form = true;
    },
    closeForm() {
      this.$data.form = false;
    },
    saveForm() {
      this.$set(store.state, "type", this.$data.type);
      this.$set(store.state, "capacite", this.$data.capacite);
      this.$set(store.state, "frequence", this.$data.frequence);
      this.$set(store.state, "unite", this.$data.unite);
      this.$set(store.state, "heures", this.$data.heures);
      this.$set(store.state, "region", this.$data.region);
      this.$set(store.state, "dateOuverture", this.$data.dateOuverture);
      this.$set(store.state, "dateFermeture", this.$data.dateFermeture);
      this.$data.form = false;
    },
  },
});
</script>

<style lang="scss" scoped src="./Profil.scss"></style>
