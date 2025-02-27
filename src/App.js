import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import ProjectsWp from "./components/ProjectsWp"
import Contact from "./components/Contact"
import MobileSocials from "./components/MobileSocials"


function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <div className="px-3">
        <MobileSocials />
        <Home />
        <Skills />
        <Projects />
        <ProjectsWp />
        <Contact />
      </div>
    </div>
  )
}

export default App
