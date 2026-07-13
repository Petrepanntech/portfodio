import { FadeIn } from '../ui/FadeIn';

const services = [
  {
    id: '01',
    title: 'Data Visualization',
    desc: 'Creating interactive and intuitive dashboards (Tableau, PowerBI) to track KPIs and highlight key business metrics.',
  },
  {
    id: '02',
    title: 'Statistical Analysis',
    desc: 'Applying statistical methods to uncover hidden patterns, trends, and correlations within complex datasets.',
  },
  {
    id: '03',
    title: 'Data Engineering',
    desc: 'Building robust data pipelines, cleaning messy data, and optimizing SQL queries for efficient analysis.',
  },
  {
    id: '04',
    title: 'Predictive Analytics',
    desc: 'Developing machine learning models to forecast trends and provide proactive business recommendations.',
  },
  {
    id: '05',
    title: 'Business Intelligence',
    desc: 'Translating technical findings into compelling stories and actionable strategies for stakeholders.',
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.map((s, i) => (
          <FadeIn key={s.id} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{ borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }}
            >
              {/* Number */}
              <span
                className="text-[#0C0C0C] font-black leading-none shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {s.id}
              </span>

              {/* Text */}
              <div className="flex flex-col justify-center gap-2 pt-2 sm:pt-4 md:pt-6">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
