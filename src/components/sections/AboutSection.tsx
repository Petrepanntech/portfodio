import { FadeIn } from '../ui/FadeIn';
import { AnimatedText } from '../ui/AnimatedText';
import { ContactButton } from '../ui/ContactButton';
import { BarChart3, Database, TrendingUp, Code } from 'lucide-react';

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden"
    >
      {/* ── Decorative corner icons ── */}

      {/* Top-left: BarChart */}
      <FadeIn
        delay={0.1} x={-80} y={0} duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]"
      >
        <BarChart3
          className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] text-[#646973] opacity-40"
          strokeWidth={1}
        />
      </FadeIn>

      {/* Bottom-left: Database */}
      <FadeIn
        delay={0.25} x={-80} y={0} duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]"
      >
        <Database
          className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] text-[#646973] opacity-40"
          strokeWidth={1}
        />
      </FadeIn>

      {/* Top-right: TrendingUp */}
      <FadeIn
        delay={0.15} x={80} y={0} duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]"
      >
        <TrendingUp
          className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] text-[#646973] opacity-40"
          strokeWidth={1}
        />
      </FadeIn>

      {/* Bottom-right: Code */}
      <FadeIn
        delay={0.3} x={80} y={0} duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]"
      >
        <Code
          className="w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] md:w-[170px] md:h-[170px] text-[#646973] opacity-40"
          strokeWidth={1}
        />
      </FadeIn>

      {/* ── Content ── */}
      <div className="flex flex-col items-center z-10 gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text="With a strong background in data analytics, i focus on translating complex datasets into actionable business insights. i truly enjoy building interactive dashboards, predictive models, and working with teams to drive data-informed decisions. Let's build something insightful together!"
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center mt-6 sm:mt-10">
          <ContactButton />
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            <div className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer">
              Download CV
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
