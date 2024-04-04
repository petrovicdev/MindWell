<template>
  <div class="features">
    <h2>Prednosti naše aplikacije</h2>
    <ul>
      <li>Anonimnost i privatnost</li>
      <li>Pristup stručnim savetima</li>
      <li>Alati za samopomoć</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FeaturesSection',
}
</script>

<style>
.features {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
}

h2 {
  color: #35495e;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  font-size: 16px;
}
</style>
