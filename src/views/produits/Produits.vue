<template>
  <div>
    <NavBar />

    <div class="firstRowStyle">
      <div class="firstColStyle">
        <label class="topFontStyle"
          >La dernière prise de mesure à été le:</label
        >
        <label class="topFontStyle">{{ derniereMesure }}</label>
      </div>
    </div>

    <div class="rowStyle">
      <div class="colStyle">
        <label class="headerStyle">Bandelette</label>
        <label class="fontStyle"
          >Prévision du prochain remplissage nécessaire dans:
          {{ bandeletteDays() }} jours</label
        >
      </div>
      <div class="colStyle">
        <div
          :class="{
            circleReservoirRed: reservoirRougeBandelette(),
            circleReservoirYellow: reservoirJauneBandelette(),
            circleReservoirGreen: reservoirVertBandelette(),
          }"
        >
          <label class="fontStyle">{{ reservoirBandelette }} /50</label>
        </div>
      </div>
    </div>

    <div class="rowStyle">
      <div class="colStyle">
        <label class="headerStyle">Chlore</label>
        <label class="fontStyle"
          >Prévision du prochain remplissage nécessaire dans:
          {{ chloreDays() }} jours</label
        >
      </div>
      <div class="colStyle">
        <div
          :class="{
            circleReservoirRed: reservoirRougeChlore(),
            circleReservoirYellow: reservoirJauneChlore(),
            circleReservoirGreen: reservoirVertChlore(),
          }"
        >
          <label class="fontStyle">{{ reservoirChlore }} %</label>
        </div>
      </div>
    </div>

    <div class="rowStyle">
      <div class="colStyle">
        <label class="headerStyle">pH+</label>
        <label class="fontStyle"
          >Prévision du prochain remplissage nécessaire dans:
          {{ pHplusDays() }} jours</label
        >
      </div>
      <div class="colStyle">
        <div
          :class="{
            circleReservoirRed: reservoirRougePHplus(),
            circleReservoirYellow: reservoirJaunePHplus(),
            circleReservoirGreen: reservoirVertPHplus(),
          }"
        >
          <label class="fontStyle">{{ reservoirPHplus }} %</label>
        </div>
      </div>
    </div>

    <div class="rowStyle">
      <div class="colStyle">
        <label class="headerStyle">pH-</label>
        <label class="fontStyle"
          >Prévision du prochain remplissage nécessaire dans:
          {{ pHmoinsDays() }} jours</label
        >
      </div>
      <div class="colStyle">
        <div
          :class="{
            circleReservoirRed: reservoirRougePHmoins(),
            circleReservoirYellow: reservoirJaunePHmoins(),
            circleReservoirGreen: reservoirVertPHmoins(),
          }"
        >
          <label class="fontStyle">{{ reservoirPHmoins }} %</label>
        </div>
      </div>
    </div>

    <div class="rowStyle">
      <button type="button" class="buttonStyle" @click="reservoir()">
        J'ai rempli un/des réservoirs
      </button>
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
  name: "PageProduits",
  components: { NavBar, Footer },

  mounted() {
    store.state.boutonActif == "Produits";
  },

  computed: {
    derniereMesure() {
      return store.state.derniereMesure;
    },
    reservoirBandelette() {
      return store.state.reservoirBandelette;
    },
    reservoirChlore() {
      return store.state.reservoirChlore;
    },
    reservoirPHplus() {
      return store.state.reservoirPHplus;
    },
    reservoirPHmoins() {
      return store.state.reservoirPHmoins;
    },
  },

  methods: {
    bandeletteDays() {
      var days =
        store.state.reservoirBandelette / store.state.bandeletteParJour;
      return days;
    },
    chloreDays() {
      var days = 40 * (store.state.reservoirChlore / 100);
      return days;
    },
    pHplusDays() {
      var days = 40 * (store.state.reservoirPHplus / 100);
      return days;
    },
    pHmoinsDays() {
      var days = 40 * (store.state.reservoirPHmoins / 100);
      return days;
    },
    reservoir() {
      console.log("bandelette");
    },
    reservoirRougeBandelette() {
      return store.state.reservoirBandelette / store.state.bandeletteParJour <=
        4
        ? true
        : false;
    },
    reservoirJauneBandelette() {
      return store.state.reservoirBandelette / store.state.bandeletteParJour > 4
        ? store.state.reservoirBandelette / store.state.bandeletteParJour <= 10
          ? true
          : false
        : false;
    },
    reservoirVertBandelette() {
      return store.state.reservoirBandelette / store.state.bandeletteParJour >
        10
        ? true
        : false;
    },
    reservoirRougeChlore() {
      return store.state.reservoirChlore <= 10 ? true : false;
    },
    reservoirJauneChlore() {
      return store.state.reservoirChlore > 10
        ? store.state.reservoirChlore <= 25
          ? true
          : false
        : false;
    },
    reservoirVertChlore() {
      return store.state.reservoirChlore > 25 ? true : false;
    },
    reservoirRougePHplus() {
      return store.state.reservoirPHplus <= 10 ? true : false;
    },
    reservoirJaunePHplus() {
      return store.state.reservoirPHplus > 10
        ? store.state.reservoirPHplus <= 25
          ? true
          : false
        : false;
    },
    reservoirVertPHplus() {
      return store.state.reservoirPHplus > 25 ? true : false;
    },
    reservoirRougePHmoins() {
      return store.state.reservoirPHmoins <= 10 ? true : false;
    },
    reservoirJaunePHmoins() {
      return store.state.reservoirPHmoins > 10
        ? store.state.reservoirPHmoins <= 25
          ? true
          : false
        : false;
    },
    reservoirVertPHmoins() {
      return store.state.reservoirPHmoins > 25 ? true : false;
    },
  },
});
</script>

<style lang="scss" scoped src="./Produits.scss"></style>
