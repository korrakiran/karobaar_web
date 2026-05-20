import { memo } from 'react'
import HeroSection from '../components/HeroSection'
import ProblemSection from '../components/ProblemSection'
import HowItWorks from '../components/HowItWorks'
import FeaturesGrid from '../components/FeaturesGrid'
import BuiltForBharat from '../components/BuiltForBharat'
import ImpactSection from '../components/ImpactSection'
import ContactCTA from '../components/ContactCTA'

const Home = memo(function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <HowItWorks />
      <FeaturesGrid />
      <BuiltForBharat />
      <ImpactSection />
      <ContactCTA />
    </main>
  )
})

export default Home
