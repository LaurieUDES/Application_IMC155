<template>
  <div class="rowFooterStyle">
    <button
      type="button"
      :class="[{ button: donnees }, 'buttonDonneesStyle']"
      @click="button('/donnees')"
    >
      <div class="colStyle">
        <svg class="donneesLogo" preserveAspectRatio="xMidYMid meet"></svg>
        <label class="fontStyle">Données</label>
      </div>
    </button>
    <button
      type="button"
      :class="[{ button: produits }, 'buttonProduitsStyle']"
      @click="button('/produits')"
    >
      <div class="colStyle">
        <svg class="produitLogo" preserveAspectRatio="xMidYMid meet"></svg>
        <label class="fontStyle">Réservoir produits</label>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "../../../store";

export default defineComponent({
  name: "FooterComponent",

  data() {
    return {
      donnees: false as boolean,
      produits: false as boolean,
    };
  },

  watch: {
    "$store.state.boutonActif": function () {
      if (store.state.boutonActif == "None") {
        this.$data.donnees = false;
        this.$data.produits = false;
      } else if (store.state.boutonActif == "Donnees")
        this.$data.donnees = true;
      else this.$data.produits = true;
    },
  },

  methods: {
    button(path: string) {
      this.$router.push(path);
    },
  },
});
</script>

<style lang="scss" scoped src="./Footer.scss"></style>
