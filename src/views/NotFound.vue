<template>
  <section class="hero is-fullheight-with-navbar is-info">
    <div class="background-wrap">
      <Bubbles />
    </div>
    <div class="hero-body">
      <div class="container auth-container has-text-centered">
        <p class="title">whoops!</p>
        <p class="subtitle">looks like this page doesn't exist...</p>
        <button
          class="button is-dark is-fullwidth has-text-white"
          @click="home()"
        >
          <span>home</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Bubbles from "../components/Bubbles.vue"

export default defineComponent({
  name: "NotFound",
  components: { Bubbles },
  methods: {
    home(){
      this.$router.push('home')
    },
  },
});
</script>
