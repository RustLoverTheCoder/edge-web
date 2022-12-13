import { Header, Hero, Footer, PrimaryFeatures } from './ui'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
      </main> 
      <Footer />
    </div>
  )
}
