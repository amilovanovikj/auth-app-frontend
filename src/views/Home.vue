<template>
  <section class="hero is-fullheight-with-navbar is-info">
    <div class="background-wrap">
      <Bubbles />
    </div>
    <div class="hero-body">
      <div class="container auth-container has-text-centered">
        <p class="title">welcome</p>
        <p class="subtitle">you have successfully logged in!</p>
        <button
          class="button is-dark is-fullwidth has-text-white"
          @click="logout()"
        >
          <span>log out</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Bubbles from "../components/Bubbles.vue"

export default defineComponent({
  name: "Home",
  components: { Bubbles },
  methods: {
    logout() {
      this.$router.push({ name: "Login" });
    },
  },
});
</script>
