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
        <div class="circleReservoirStyle">
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
        <div class="circleReservoirStyle">
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
        <div class="circleReservoirStyle">
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
        <div class="circleReservoirStyle">
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
  },
});
</script>

<style lang="scss" scoped src="./Produits.scss"></style>
