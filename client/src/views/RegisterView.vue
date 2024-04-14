<template>
  <NavigationBar />
  <div class="register-container">
    <h1>Registracija</h1>
    <form @submit.prevent="onRegister">
      <div class="form-group">
        <label for="email">E-mail:</label>
        <input
          type="email"
          id="email"
          v-model="registerDetails.email"
          required
        />
      </div>

      <div class="form-group">
        <label for="phone">Telefonski broj:</label>
        <vue-tel-input
          v-model="registerDetails.phoneNumber"
          @onInput="onUpdatePhone"
        ></vue-tel-input>
      </div>

      <div class="form-group">
        <label for="firstName">Ime:</label>
        <input
          type="text"
          id="firstName"
          v-model="registerDetails.firstName"
          required
        />
      </div>

      <div class="form-group">
        <label for="lastName">Prezime:</label>
        <input
          type="text"
          id="lastName"
          v-model="registerDetails.lastName"
          required
        />
      </div>

      <div class="form-group">
        <label for="username">Korisničko ime:</label>
        <input
          type="text"
          id="username"
          v-model="registerDetails.username"
          required
        />
      </div>

      <div class="form-group">
        <label for="dob">Datum rođenja:</label>
        <input type="date" id="dob" v-model="registerDetails.dob" required />
      </div>

      <div class="form-group">
        <label for="password">Lozinka:</label>
        <input
          type="password"
          id="password"
          v-model="registerDetails.password"
          required
        />
      </div>

      <div class="form-group">
        <label for="confirmPassword">Potvrdite lozinku:</label>
        <input
          type="password"
          id="confirmPassword"
          v-model="registerDetails.confirmPassword"
          required
        />
      </div>

      <button type="submit" @click="onRegister()">Registruj se</button>
    </form>
  </div>
  <FooterSection />
</template>

<script>
import FooterSection from '@/components/FooterSection.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'

export default {
  name: 'RegisterView',
  components: {
    NavigationBar,
    FooterSection,
    VueTelInput,
  },
  data() {
    return {
      registerDetails: {
        email: '',
        phoneNumber: '',
        firstName: '',
        lastName: '',
        username: '',
        dob: '',
        password: '',
        confirmPassword: '',
      },
    }
  },
  methods: {
    onRegister() {
      // Ovde ide logika za registraciju, kao što je slanje podataka na backend.
      console.log('Podaci za registraciju:', this.registerDetails)
    },
    onUpdatePhone(event) {
      this.registerDetails.phoneNumber = event
    },
  },
}
</script>

<style>
.register-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form-group label {
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #35495e;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #2c3e50;
}
</style>
