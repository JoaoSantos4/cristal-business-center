
import Header from './components/Header'
import Hero from './components/Hero'
import Spaces from './components/Spaces'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <main className="w-full">
        <Hero />
        <Spaces/>
        <About />
        <Contact />
      </main>

       <Footer />
    </>
  )
}

export default App
