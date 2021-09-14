<template>
  <div class="hero is-fullheight-with-navbar">
    <div class="columns is-vcentered">
      <section class="column is-7">
        <div class="hero is-fullheight-with-navbar is-dark">
          <div class="hero-body">
            <div>
              <p class="title">authentication app</p>
              <p class="subtitle">a basic Node.js+GraphQL and Vue3 app with user register, login and logout functionalities.</p>
            </div>
          </div>
        </div>
      </section>
      <div class="column login-section">
        <div class="container auth-container">
          <div class="card box has-background-white-bis">
            <header class="card-header">
              <p class="card-header-title">login</p>
            </header>
            <div class="card-content">
              <form class="content">
                <div class="field">
                  <label class="label" for="email">email</label>
                  <input class="input" name="email" autocomplete="email" placeholder="email" v-model="user.email"/>
                </div>
                <div class="field">
                  <label class="label" for="password">password</label>
                  <input class="input" name="password" type="password" placeholder="password"
                    autocomplete="current-password"
                    v-model="user.password"
                    @keydown.enter="login()"
                  />
                </div>
              </form>
            </div>
            <footer class="card-footer buttons is-centered">
              <button class="button is-primary is-fullwidth" @click="login()">
                <span>log in</span>
              </button>
              <button class="button is-fullwidth" @click="register()">
                <span>register</span>
              </button>
            </footer> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  components: {},
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$router.push({ name: 'Home' })
    },
    register() {
      this.$router.push({ name: 'Register' })
    }
  } 
});
</script>
