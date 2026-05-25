import { memo } from 'react'
import HeroSection from '../components/HeroSection'
import ProblemSection from '../components/ProblemSection'
import FeaturesGrid from '../components/FeaturesGrid'
import BuiltForBharat from '../components/BuiltForBharat'
import ImpactSection from '../components/ImpactSection'
import ContactCTA from '../components/ContactCTA'

const Home = memo(function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <FeaturesGrid />
      <BuiltForBharat />
      <ImpactSection />
      <ContactCTA />
    </main>
  )
})

export default Home
