import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { LiveProjectButton } from '../ui/LiveProjectButton';

const projects = [
  {
    id: '01',
    category: 'Tableau / SQL',
    name: 'E-Commerce Sales Dashboard',
    img1: '/p1_img1.png',
    img2: '/p1_img2.png',
    img3: '/p1_img3.png',
  },
  {
    id: '02',
    category: 'Python / Scikit-Learn',
    name: 'Customer Churn Prediction',
    img1: '/p1_img2.png',
    img2: '/p1_img3.png',
    img3: '/p1_img1.png',
  },
  {
    id: '03',
    category: 'PowerBI / Excel',
    name: 'Marketing Campaign Analysis',
    img1: '/p1_img3.png',
    img2: '/p1_img1.png',
    img3: '/p1_img2.png',
  },
];

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: (typeof projects)[0];
  index: number;
  totalCards: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="h-[85vh] sticky flex justify-center w-full"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale, transformOrigin: 'top center' }}
        className="w-full bg-[#0C0C0C] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 flex flex-col overflow-hidden"
      >
        {/* ── Top row ── */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10 shrink-0">
          <div className="flex items-center gap-4 sm:gap-8 md:gap-10">
            <span
              className="text-[#D7E2EA] font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 8vw, 100px)' }}
            >
              {project.id}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-medium">
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <div className="shrink-0">
            <LiveProjectButton />
          </div>
        </div>

        {/* ── Bottom row — image grid ── */}
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 flex-1 min-h-0">
          {/* Left column 40% — 2 stacked images */}
          <div className="flex flex-col gap-3 sm:gap-4 w-full md:w-[40%]">
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden relative shrink-0"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.img1}
                alt={`${project.name} screenshot 1`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden relative flex-1"
              style={{ minHeight: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.img2}
                alt={`${project.name} screenshot 2`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right column 60% — 1 tall image */}
          <div className="w-full md:w-[60%] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden relative flex-1 min-h-[250px] sm:min-h-[300px]">
            <img
              src={project.img3}
              alt={`${project.name} screenshot 3`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-30 pt-20 sm:pt-24 md:pt-32 pb-40"
    >
      <FadeIn delay={0} y={40} className="px-5 sm:px-8 md:px-10 mb-16 sm:mb-20 md:mb-28">
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="flex flex-col px-5 sm:px-8 md:px-10 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} totalCards={projects.length} />
        ))}
      </div>
    </section>
  );
}
