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
              <EmailField ref="emailRef" @setEmail="setEmail"/>
              <PasswordField ref="passwordRef" @setPassword="setPassword" />
              <RetypePasswordField ref="retypePasswordRef" :password="user.password" />
            </form>
          </div>
          <footer class="card-footer buttons is-centered">
            <button type="submit" class="button is-primary is-fullwidth"
              @click.prevent="register()"
              :class="{ 'is-loading': isSubmitting }">
              register
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
import { defineComponent, ref } from "vue";
import { useRegisterMutation } from "@/generated/graphql";
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
  setup () {
    const registerMutation = useRegisterMutation();
    const emailRef = ref<InstanceType<typeof EmailField>>();
    const passwordRef = ref<InstanceType<typeof PasswordField>>();
    const retypePasswordRef = ref<InstanceType<typeof RetypePasswordField>>();
    
    return {
      registerMutation,
      emailRef,
      passwordRef,
      retypePasswordRef,
    }
  },
  data () {
    return {
      user: {
        email: String(),
        password: String(),
      },
      isSubmitting: false,
    }
  },
  methods: {
    register() {
      this.isSubmitting = true;
      const credentials = {
        email: this.user.email,
        password: this.user.password
      }
      if (this.retypePasswordRef?.validateRetypePassword()) {
        this.registerMutation.executeMutation({ options: credentials }).then(res => {
          if (res.data?.register.errors) {
            res.data.register.errors.forEach(err => {
              console.error('ERROR\nfield: ', err.field, '\nmessage: ', err.message);
            });
            this.emailRef?.validateEmail();
            this.passwordRef?.validatePassword();
          } else if (res.data?.register.user) {
          localStorage.setItem('user', res.data.register.user.email)
            this.$router.push({ name: 'Home' });
          }
        });
      }
      this.isSubmitting = false;
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
