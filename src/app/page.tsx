import { Applications } from '@/components/applications'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Why } from '@/components/why'

export default function Home() {
  return (
    <>
      <Header />

      <main className="container flex h-full flex-1 flex-col items-center justify-center space-y-8">
        <Hero />
        <Why />
        <Applications />
      </main>

      <Footer />
    </>
  )
}
