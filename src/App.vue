<template>
  <div class="hide-scrollbar">
    <HeaderBar />
    <Router-View />
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/index.scss";
</style>

<script>
import HeaderBar from "./components/HeaderBar.vue";

export default {
  name: "App",
  components: { HeaderBar },
};
</script>
