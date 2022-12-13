import { Header, Hero, Footer } from './ui'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
