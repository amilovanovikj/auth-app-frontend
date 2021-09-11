<template>
  <section class="hero is-fullheight-with-navbar is-dark">
    <div class="background-wrap">
      <Bubbles />
    </div>
    <div class="hero-body">
      <div class="container auth-container">
        <div class="card box has-background-white-bis">
          <header class="card-header">
            <p class="card-header-title">register</p>
          </header>
          <div class="card-content">
            <form class="content">
              <EmailField @setEmail="setEmail"/>
              <PasswordField @setPassword="setPassword" />
              <RetypePasswordField :password="user.password" />
            </form>
          </div>
          <footer class="card-footer buttons is-centered">
            <button class="button is-primary is-fullwidth" @click="register()">
              <span>register</span>
            </button>
            <div class="field">
              <p>already have an account?</p>
              <div class="has-text-centered">
                <button class="link" @click="login()">log in</button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Bubbles from "../components/Bubbles.vue";
import EmailField from "@/components/EmailField.vue";
import PasswordField from "@/components/PasswordField.vue";
import RetypePasswordField from "@/components/RetypePasswordField.vue";

export default defineComponent({
  name: "Register",
  components: {
    Bubbles,
    EmailField,
    PasswordField,
    RetypePasswordField,
  },
  data () {
    return {
      user: {
        email: String(),
        password: String(),
      },
    }
  },
  methods: {
    register() {
      this.$router.push({ name: 'Home' });
    },
    login() {
      this.$router.push({ name: 'Login' });
    },
    setEmail(email: string) {
      this.user.email = email;
    },
    setPassword(password: string) {
      this.user.password = password;
    },
  }
});
</script>
