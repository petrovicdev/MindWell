<template>
  <nav>
    <ul>
      <li><router-link to="/">Početna</router-link></li>
      <li><router-link to="/about">O nama</router-link></li>
      <li><router-link to="/quiz">Kviz</router-link></li>
      <li><router-link to="/resources">Resursi</router-link></li>
      <li><router-link to="/login">Uloguj se</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
}
</script>

<style>
nav {
  background-color: #35495e;
  padding: 10px 20px;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}
</style>
