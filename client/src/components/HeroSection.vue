<template>
  <div class="hero">
    <h1>Dobrodošli u MindWell</h1>
    <p>Putovanje ka boljem mentalnom zdravlju počinje ovde.</p>
    <button name="hero-register-button" @click="startJourney">
      Započnite svoje putovanje
    </button>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    startJourney() {
      window.location.replace('/register')
    },
  },
}
</script>

<style>
.hero {
  background-color: #627c83;
  color: #ffffff;
  padding: 40px 20px;
  text-align: center;
}

.hero-register-button {
  background-color: #f5a623;
  border: none;
  padding: 10px 20px;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #d98915;
}
</style>
