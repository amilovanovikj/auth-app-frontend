<template>
  <div class="field">
    <label class="label" for="email">email</label>
    <div class="control has-icons-right">
      <input class="input" name="email" autocomplete="email"
        v-model="email"
        @blur="validateEmail()"
      />
      <span class="icon is-small is-right" v-show="isEmailInvalid">
        <i class="fas fa-info-circle has-text-danger"></i>
      </span>
      <p class="help is-danger" v-show="isEmailInvalid">
        please specify a valid email address
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "EmailField",
  data () {
    return {
      email: String(),
      isEmailInvalid: Boolean(), 
    }
  },
  methods: {
    validateEmail() {
      this.isEmailInvalid = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
      this.setEmail(this.email)
    },
    setEmail(email: string) {
      this.$emit('setEmail', email);
    }
  },
})
</script>
