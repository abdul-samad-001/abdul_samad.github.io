import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Experience } from "./components/Experience"
import { Projects } from "./components/Projects"
import { Education } from "./components/Education"
import { Achievements } from "./components/Achievements"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Background, CustomCursor } from "./components/UIElements"
import { FloatingElements } from "./components/FloatingElements"
import { ThreeBackground } from "./components/ThreeBackground"
import { LoadingScreen } from "./components/LoadingScreen"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} key="loader" />}
      </AnimatePresence>

      <CustomCursor />
      <ThreeBackground />
      <Background />
      <FloatingElements />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
