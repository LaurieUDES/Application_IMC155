<template>
  <div>
    <NavBar />
    <div></div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "../../components/basic/navBar/NavBar.vue";
import Footer from "../../components/basic/footer/Footer.vue";
import store from "../../store";

export default defineComponent({
  name: "PageDonnees",
  components: { NavBar, Footer },

  mounted() {
    store.state.boutonActif == "Donnees";
  },
});
</script>

<style lang="scss" scoped src="./Donnees.scss"></style>
