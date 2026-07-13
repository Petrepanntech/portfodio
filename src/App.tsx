import { HeroSection } from './components/sections/HeroSection'
import { MarqueeSection } from './components/sections/MarqueeSection'
import { AboutSection } from './components/sections/AboutSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { ProjectsSection } from './components/sections/ProjectsSection'

function App() {
  return (
    <div style={{ overflowX: 'clip' }} className="w-full min-h-screen bg-[#0C0C0C]">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  )
}

export default App
