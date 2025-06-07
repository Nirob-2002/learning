import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Hero />
      <Categories />
      <p>Nirob Dewn Limon</p>
      <Footer />
    </main>
  )
}
