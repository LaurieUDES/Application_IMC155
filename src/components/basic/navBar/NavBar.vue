<template>
  <div class="rowNavbarStyle">
    <div class="colProfilStyle">
      <button
        type="button"
        class="buttonProfilStyle"
        @click="button('/profil')"
      >
        <svg class="profilLogo" preserveAspectRatio="xMidYMid meet"></svg>
      </button>
    </div>
    <div class="colNameStyle">
      <button type="button" class="buttonNameStyle" @click="button('/')">
        <label class="fontStyle">Nom Entreprise</label>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",

  methods: {
    button(path: string) {
      this.$router.push(path);
    },
  },
});
</script>

<style lang="scss" src="./NavBar.scss" scoped></style>
