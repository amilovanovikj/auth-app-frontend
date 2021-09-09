<template>
  <div class="field">
    <label class="label" for="retype-password">retype password</label>
    <div class="control has-icons-right">
      <input class="input" name="retype-password" type="password" autocomplete="new-password"
        v-model="retypePassword"
        @blur="validateRetypePassword()"
      />
      <span class="icon is-small is-right" v-show="isRetypePasswordInvalid">
        <i class="fas fa-info-circle has-text-danger"></i>
      </span>
      <p class="help is-danger" v-show="isRetypePasswordInvalid">
        passwords must match
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "RetypePasswordField",
  data () {
    return {
      retypePassword: String(),
      isRetypePasswordInvalid: Boolean(),
    }
  },
  props: {
    password: {
      type: String,
      default: () => ''
    }
  },
  methods: {
    validateRetypePassword() {
      this.isRetypePasswordInvalid = !(this.password === this.retypePassword)
    }
  },
})
</script>
