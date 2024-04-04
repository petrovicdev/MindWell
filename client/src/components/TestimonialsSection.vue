<template>
  <div class="testimonials">
    <h2>Iskustva naših korisnika</h2>
    <div class="testimonial">
      <p>
        "Zahvaljujući MindWell, uspeo/la sam da nađem mir u svakodnevnom
        životu."
      </p>
      <p>- Zadovoljan korisnik</p>
    </div>
    <!-- Možete dodati više -->
  </div>
</template>

<script>
export default {
  name: 'TestimonialsSection',
}
</script>

<style>
.testimonials {
  background-color: #e6eef1;
  padding: 20px;
  text-align: center;
}

.testimonial {
  margin-bottom: 20px;
  padding: 10px;
  border-left: 5px solid #f5a623;
}

p {
  margin: 10px 0;
}
</style>
