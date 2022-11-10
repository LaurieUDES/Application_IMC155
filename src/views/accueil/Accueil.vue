<template>
  <div class="pageSize">
    <NavBar />
    <div class="firstRowStyle">
      <div class="colStyle">
        <h1 class="headerStyle">Bandelette</h1>
        <div
          :class="{
            circleReservoirRed: reservoirRougeBandelette,
            circleReservoirYellow: reservoirJauneBandelette,
            circleReservoirGreen: reservoirVertBandelette,
          }"
        >
          <label class="fontStyle">{{ reservoirBandelette }}/50</label>
        </div>
      </div>
    </div>
    <div class="rowStyle">
      <div class="colStyle">
        <h1 class="headerStyle">Chlore</h1>
        <div class="rowTauxStyle">
          <label class="fontStyle">Taux actuel: {{ chlore }} ppm</label>
          <div
            :class="{
              circleTauxRed: !tauxChlore,
              circleTauxGreen: tauxChlore,
            }"
          ></div>
        </div>
        <label class="fontStyle">Réservoir</label>
        <div
          :class="{
            circleReservoirRed: reservoirRougeChlore,
            circleReservoirYellow: reservoirJauneChlore,
            circleReservoirGreen: reservoirVertChlore,
          }"
        >
          <label class="fontStyle">{{ reservoirChlore }} %</label>
        </div>
      </div>
    </div>
    <div class="rowStyle">
      <div class="colStyle">
        <h1 class="headerStyle">pH</h1>
        <div class="rowTauxStyle">
          <label class="fontStyle">Taux actuel: {{ pH }}</label>
          <div
            :class="{
              circleTauxRed: !tauxPH,
              circleTauxGreen: tauxPH,
            }"
          ></div>
        </div>
        <label class="fontStyle">Réservoirs</label>
        <div class="rowReservoirStyle">
          <div
            :class="{
              circleReservoirRed: reservoirRougePHplus(),
              circleReservoirYellow: reservoirJaunePHplus(),
              circleReservoirGreen: reservoirVertPHplus(),
            }"
          >
            <div class="colReservoirStyle">
              <label class="fontStyle">{{ reservoirPHplus }} %</label>
              <label class="fontInfoStyle">pH+</label>
            </div>
          </div>
          <div
            :class="{
              circleReservoirRed: reservoirRougePHmoins(),
              circleReservoirYellow: reservoirJaunePHmoins(),
              circleReservoirGreen: reservoirVertPHmoins(),
            }"
          >
            <div class="colReservoirStyle">
              <label class="fontStyle">{{ reservoirPHmoins }} %</label>
              <label class="fontInfoStyle">pH-</label>
            </div>
          </div>
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
  name: "PageAccueil",
  components: { NavBar, Footer },

  mounted() {
    store.state.boutonActif == "None";
  },

  computed: {
    chlore() {
      return store.state.chlore;
    },
    tauxChlore() {
      return store.state.tauxChlore;
    },
    reservoirChlore() {
      return store.state.reservoirChlore;
    },
    pH() {
      return store.state.pH;
    },
    tauxPH() {
      return store.state.tauxPH;
    },
    reservoirPHplus() {
      return store.state.reservoirPHplus;
    },
    reservoirPHmoins() {
      return store.state.reservoirPHmoins;
    },
    reservoirBandelette() {
      return store.state.reservoirBandelette;
    },
  },

  methods: {
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

<style lang="scss" scoped src="./Accueil.scss"></style>
