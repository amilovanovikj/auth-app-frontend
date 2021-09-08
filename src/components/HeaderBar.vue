<template>
  <header>
    <nav class="navbar has-background-primary-dark">
      <div class="navbar-brand">
        <div class="navbar-item nav-home">
          <a href="/" style="color: white"><span class="is-primary sub-title">auth app</span></a>
        </div>
        <div class="buttons">
          <a :href="github" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a :href="linkedin" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  name: 'HeaderBar',
  components: {},
  data() {
    return {
      showMobileMenu: false,
      github: 'https://github.com/amilovanovikj/',
      linkedin: 'https://www.linkedin.com/in/andrej-milovanovikj/',
    }
  },
});
</script>
