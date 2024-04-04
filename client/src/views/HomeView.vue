<template>
  <div>
    <NavigationBar />
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
    <TestimonialsSection />
    <FooterSection />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import HowItWorksSection from '@/components/HowItWorksSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import FooterSection from '@/components/FooterSection.vue'

export default {
  name: 'HomeView',
  components: {
    NavigationBar,
    HeroSection,
    FeaturesSection,
    HowItWorksSection,
    TestimonialsSection,
    FooterSection,
  },
}
</script>
