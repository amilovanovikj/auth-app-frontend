<template>
  <section class="hero is-fullheight-with-navbar is-info">
    <div class="background-wrap">
      <Bubbles />
    </div>
    <div class="hero-body">
      <div class="container home-container has-text-centered">
        <p class="title is-1">welcome</p>
        <p class="subtitle is-4">you have successfully logged in as:</p>
        <p class="subtitle" v-if="fetching">???</p>
        <p class="subtitle" v-if="data?.me?.email">{{ data.me.email }}</p>
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
import { useLogoutMutation, useMeQuery } from "@/generated/graphql";
import { defineComponent } from "vue";
import Bubbles from "../components/Bubbles.vue"

export default defineComponent({
  name: "Home",
  components: { Bubbles },
  setup() {
    const meQuery = useMeQuery();
    const logoutMutation = useLogoutMutation();
    
    return {
      data: meQuery.data,
      fetching: meQuery.fetching,
      logoutMutation,
    }
  },
  methods: {
    logout() {
      this.logoutMutation.executeMutation({});
      localStorage.removeItem('user');
      this.$router.push({ name: 'Login' });
    },
  },
});
</script>
