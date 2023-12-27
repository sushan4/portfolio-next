import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Techstack from "./components/Techstack"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <Hero/>
      <About/>
      <Techstack/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  )
}
