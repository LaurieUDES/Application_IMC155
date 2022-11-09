<template>
  <div class="pageSize">
    <NavBar />
    <div class="firstRowStyle">
      <div class="colStyle">
        <h1 class="headerStyle">Chlore</h1>
        <div class="rowTauxStyle">
          <label class="fontStyle">Taux actuel: {{ chlore }} ppm</label>
          <div :class="[{ color: tauxChlore }, 'circleTauxStyle']"></div>
        </div>
        <label class="fontStyle">Réservoir</label>
        <div class="circleReservoirStyle">
          <label class="fontStyle">{{ reservoirChlore }} %</label>
        </div>
      </div>
    </div>
    <div class="rowStyle">
      <div class="colStyle">
        <h1 class="headerStyle">pH</h1>
        <div class="rowTauxStyle">
          <label class="fontStyle">Taux actuel: {{ pH }}</label>
          <div :class="[{ color: tauxPH }, 'circleTauxStyle']"></div>
        </div>
        <label class="fontStyle">Réservoirs</label>
        <div class="rowReservoirStyle">
          <div class="circleReservoirStyle">
            <div class="colReservoirStyle">
              <label class="fontStyle">{{ reservoirPHplus }} %</label>
              <label class="fontInfoStyle">pH+</label>
            </div>
          </div>
          <div class="circleReservoirStyle">
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
  },
});
</script>

<style lang="scss" scoped src="./Accueil.scss"></style>
