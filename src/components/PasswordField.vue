<template>
  <div class="field">
    <label class="label" for="password">password</label>
    <div class="control has-icons-right">
      <input class="input" name="password" type="password" autocomplete="new-password" 
        v-model="password"
        @blur="validatePassword()"
      />
      <span class="icon is-small is-right" v-show="isPasswordInvalid">
        <i class="fas fa-info-circle has-text-danger"></i>
      </span>
      <div v-show="isPasswordInvalid"
        v-for="message in errorMessages" :key="message">
        <p class="help is-danger">
          {{ message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "PasswordField", 
  data() {
    return {
      password: String(),
      errorMessages: Array(),
      isPasswordInvalid: Boolean(), 
    }
  },
  methods: {
    validatePassword() { 
      this.errorMessages = new Array();
      if (this.password.length < 8) {
        this.errorMessages.push("your password must be at least 8 characters\n");
      }
      if (this.password.search(/[a-z]/i) < 0) {
        this.errorMessages.push("your password must contain at least one letter\n");
      }
      if (this.password.search(/[0-9]/) < 0) {
        this.errorMessages.push("your password must contain at least one digit\n"); 
      }
      this.isPasswordInvalid = this.errorMessages.length !== 0
      this.setPassword(this.password)
    },
    setPassword(password: string) {
      this.$emit('setPassword', password);
    }
  }
})
</script>
