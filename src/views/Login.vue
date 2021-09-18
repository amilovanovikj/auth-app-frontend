<template>
  <div class="hero is-fullheight-with-navbar">
    <div class="columns is-vcentered">
      <section class="column is-7 hero is-fullheight-with-navbar is-dark">
        <div class="hero-body">
          <div>
            <p class="title">authentication app</p>
            <p class="subtitle">a basic Node.js+GraphQL and Vue3 app with user register, login and logout functionalities.</p>
          </div>
        </div>
      </section>
      <div class="column login-section">
        <div class="container auth-container">
          <div class="notification is-danger is-light" v-show="errorMessage">
            {{ errorMessage }}
            <button class="delete" @click="errorMessage = String()"></button>
          </div>
          <div class="card box has-background-white-bis">
            <header class="card-header">
              <p class="card-header-title">login</p>
            </header>
            <div class="card-content">
              <form class="content">
                <div class="field">
                  <label class="label" for="email">email</label>
                  <input class="input" name="email" autocomplete="email" placeholder="email"
                    v-model="user.email"/>
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
              <button type="submit" class="button is-primary is-fullwidth"
                :class="{ 'is-loading': isSubmitting }"
                @click.prevent="login()">
                log in
              </button>
              <button class="button is-fullwidth" @click="register()">
                register
              </button>
            </footer> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useLoginMutation } from "@/generated/graphql";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  components: {},
  setup () {
    const loginMutation = useLoginMutation();
    return {
      loginMutation
    }
  },
  data () {
    return {
      user: {
        email: String(),
        password: String(),
      },
      isSubmitting: false,
      errorMessage: String(),
    }
  },
  methods: {
    login() {
      this.isSubmitting = true;
      const credentials = {
        email: this.user.email,
        password: this.user.password
      }
      this.loginMutation.executeMutation({ options: credentials }).then(res => {        
        if (res.data?.login.errors) {
          res.data.login.errors.forEach(err => {
            console.error('ERROR\nfield: ', err.field, '\nmessage: ', err.message);
            this.errorMessage = err.message
          });
        } else if (res.data?.login.user) {
          localStorage.setItem('user', res.data.login.user.email)
          this.$router.push({ name: 'Home' });
        }
      });
      this.isSubmitting = false;
    },
    register() {
      this.$router.push({ name: 'Register' })
    },
  } 
});
</script>
