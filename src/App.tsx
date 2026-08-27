import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'
import ResumeModal from './components/ResumeModal'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import AiEngineering from './sections/AiEngineering'
import Architecture from './sections/Architecture'
import Education from './sections/Education'
import Publications from './sections/Publications'
import GitHubSection from './sections/GitHubSection'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--bg)]"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <AiEngineering />
        <Architecture />
        <Publications />
        <Education />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
      <CommandPalette />
      <ResumeModal />
    </>
  )
}
