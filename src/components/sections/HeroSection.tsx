import { FadeIn } from '../ui/FadeIn';
import { Magnet } from '../ui/Magnet';
import { ContactButton } from '../ui/ContactButton';

export function HeroSection() {
  return (
    <section className="h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      {/* ── Navbar ── */}
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 relative z-20">
        <a href="#about" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">About</a>
        <a href="#services" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">Services</a>
        <a href="#projects" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">Projects</a>
        <a href="#contact" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">Contact</a>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">Download CV</a>
      </FadeIn>

      {/* ── Spacer to push heading into center area ── */}
      <div className="flex-1" />

      {/* ── Hero Heading ── */}
      <div className="overflow-hidden px-2 relative z-20">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m peter
          </h1>
        </FadeIn>
      </div>

      {/* ── Spacer ── */}
      <div className="flex-1" />

      {/* ── Bottom Bar ── */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a data analyst driven by uncovering insights and crafting compelling data narratives
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* ── Hero Portrait (absolute center) ── */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto"
      >
        <Magnet padding={150} strength={3}>
          <img
            src="/portrait.png"
            alt="Peter Pann"
            className="w-full h-auto object-contain pointer-events-none select-none"
          />
        </Magnet>
      </FadeIn>
    </section>
  );
}
