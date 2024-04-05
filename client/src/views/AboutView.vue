<template>
  <NavigationBar />
  <div class="about">
    <h1>O nama</h1>
    <p>
      <strong>Dobrodošli u MindWell</strong>, vašeg partnera na putu ka boljem
      mentalnom zdravlju.
    </p>
    <p>
      U MindWell, verujemo da mentalno zdravlje zaslužuje istu pažnju i brigu
      kao i fizičko zdravlje. Naša misija je da pružimo alate, resurse i podršku
      koji su vam potrebni da biste našli ravnotežu, mir i zadovoljstvo u
      svakodnevnom životu.
    </p>

    <h2>Naša priča</h2>
    <p>
      MindWell je osnovan iz želje da se razbije stigma oko mentalnog zdravlja i
      da se svima pruži pristup visokokvalitetnim resursima za poboljšanje
      njihovog blagostanja. Kroz našu platformu, nudimo širok spektar alata, od
      interaktivnih kvizova i vodiča za samopomoć, do direktnog savetovanja sa
      stručnjacima.
    </p>

    <p>
      <em
        >Zašto MindWell? Zato što verujemo da svako zaslužuje priliku da živi
        ispunjen život, bez obzira na izazove sa kojima se suočava. Pridružite
        nam se na ovom putovanju.</em
      >
    </p>
  </div>
  <FooterSection />
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import FooterSection from '@/components/FooterSection.vue'

export default {
  name: 'HomeView',
  components: {
    NavigationBar,
    FooterSection,
  },
}
</script>

<style>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1,
h2 {
  color: #35495e;
}

p {
  margin-bottom: 20px;
  line-height: 1.6;
}

em {
  color: #627c83;
}
</style>
