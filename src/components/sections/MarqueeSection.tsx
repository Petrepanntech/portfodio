import { useRef, useEffect } from 'react';
import {
  Database, BarChart3, LineChart, PieChart, Activity,
  TrendingUp, Table, Code, Server, Briefcase, Zap,
  Globe, Cpu, Layers,
} from 'lucide-react';

const row1Icons = [Database, BarChart3, LineChart, PieChart, Activity, TrendingUp, Table];
const row2Icons = [Code, Server, Briefcase, Zap, Globe, Cpu, Layers];

function IconTile({ Icon, idx }: { Icon: typeof Database; idx: number }) {
  // Alternate subtle background shades
  const bg = idx % 2 === 0 ? '#141414' : '#1A1A1A';
  return (
    <div
      className="w-[200px] sm:w-[300px] md:w-[420px] h-[140px] sm:h-[200px] md:h-[270px] shrink-0 rounded-2xl flex items-center justify-center border border-[#222]"
      style={{ background: bg }}
    >
      <Icon className="text-[#555] w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" strokeWidth={1.2} />
    </div>
  );
}

export function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !row1Ref.current || !row2Ref.current) return;
      const sectionTop = containerRef.current.offsetTop;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Triple arrays for seamless loop
  const tripled1 = [...row1Icons, ...row1Icons, ...row1Icons];
  const tripled2 = [...row2Icons, ...row2Icons, ...row2Icons];

  return (
    <section
      ref={containerRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3"
    >
      <div ref={row1Ref} className="flex gap-3" style={{ willChange: 'transform' }}>
        {tripled1.map((Icon, i) => (
          <IconTile key={`r1-${i}`} Icon={Icon} idx={i} />
        ))}
      </div>
      <div ref={row2Ref} className="flex gap-3" style={{ willChange: 'transform' }}>
        {tripled2.map((Icon, i) => (
          <IconTile key={`r2-${i}`} Icon={Icon} idx={i} />
        ))}
      </div>
    </section>
  );
}
