<template>
  <section class="hero is-fullheight-with-navbar is-dark background-wrap">
    <Bubbles />
    <div class="hero-body">
      <div class="container auth-container">
        <div class="card box has-background-white-bis">
          <header class="card-header">
            <p class="card-header-title">register</p>
          </header>
          <div class="card-content">
            <form class="content">
              <div class="field">
                <label class="label" for="email">email</label>
                <input class="input" name="email" autocomplete="email" v-model="user.email"/>
              </div>
              <div class="field">
                <label class="label" for="password">password</label>
                <input class="input" name="password" type="password" autocomplete="new-password" v-model="user.password"/>
              </div>
              <div class="field">
                <label class="label" for="retype-password">retype password</label>
                <input class="input" name="retype-password" type="password" autocomplete="new-password" v-model="retypePassword"/>
              </div>
            </form>
          </div>
          <footer class="card-footer buttons is-centered">
            <button class="button is-primary is-fullwidth" @click="register()">
              <span>register</span>
            </button>
            <div class="field">
              <p>already have an account?</p>
              <div class="has-text-centered">
                <span id="sign-in-link" @click="login()">log in</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import Bubbles from "../components/Bubbles.vue"

export default defineComponent({
  name: "Register",
  components: {
    Bubbles,
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      retypePassword: ''
    }
  },
  methods: {
    register() {
      this.$router.push({ name: 'Home' })
    },
    login() {
      this.$router.push({ name: 'Login' })
    }
  }
});
</script>
