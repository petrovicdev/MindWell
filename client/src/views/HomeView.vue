<template>
  <div class="home">
    <h1>Dobrodošli u MindWell</h1>
    <p>Platforma za podršku mentalnom zdravlju zaposlenih.</p>
    <!-- Ovde možemo dodati više sadržaja kasnije -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  // Ovde možemo dodati TypeScript kod za logiku stranice kasnije
})
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

h1 {
  color: #35495e;
  margin-bottom: 20px;
}

p {
  color: #627c83;
  font-size: 20px;
}
</style>
