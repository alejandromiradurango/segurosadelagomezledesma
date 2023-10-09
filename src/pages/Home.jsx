import { Features, Hero, InsuranceCommitment, InsuranceInfo, Mission, ServicesSection } from '../components'

const Home = () => {
  return (
    <section>
      <Hero />
      <InsuranceCommitment />
      <Mission />
      <Features />
      <ServicesSection />
      <InsuranceInfo />
    </section>
  )
}

export default Home