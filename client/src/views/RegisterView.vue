<template>
  <NavigationBar />
  <div class="login-container">
    <h1>Prijava</h1>
    <form @submit.prevent="onLogin">
      <div class="form-group">
        <label for="username">Korisničko ime:</label>
        <input
          type="text"
          id="username"
          v-model="loginDetails.username"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Lozinka:</label>
        <input
          type="password"
          id="password"
          v-model="loginDetails.password"
          required
        />
      </div>
      <button type="submit">Prijavi se</button>
    </form>
  </div>
  <FooterSection />
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import FooterSection from '@/components/FooterSection.vue'

export default {
  name: 'LoginView',
  components: {
    NavigationBar,
    FooterSection,
  },
  data() {
    return {
      loginDetails: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    onLogin() {
      console.log('Prijavljivanje sa:', this.loginDetails)
    },
  },
}
</script>

<style>
.login-container {
  max-width: 300px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-group {
  width: 100%;
  margin-bottom: 20px;
}

label {
  display: block;
  width: 100%;
  text-align: left;
  margin-bottom: 5px;
}

input[type='text'],
input[type='password'] {
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: calc(100% - 20px);
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #35495e;
  color: white;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #2c3e50;
}
</style>
