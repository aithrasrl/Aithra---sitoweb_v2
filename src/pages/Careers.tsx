import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";
import { useState } from "react";
export default function Careers() {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const gallery = ["/assets/17.jpeg", "/assets/18.jpeg", "/assets/03a.png"];

  const positions = [
    {
      title: t('careers.job.01.title'),
      location: "Milan, IT",
      type: t('careers.job.01.type'),
      id: "ADM-01",
      desc: t('careers.job.01.desc'),
      skills: t('careers.job.01.skills'),
      software: t('careers.job.01.software')
    },
    {
      title: t('careers.job.02.title'),
      location: "Milan, IT",
      type: t('careers.job.02.type'),
      id: "BIM-01",
      desc: t('careers.job.02.desc'),
      skills: t('careers.job.02.skills'),
      software: t('careers.job.02.software')
    },
    {
      title: t('careers.job.03.title'),
      location: "Milan, IT",
      type: t('careers.job.03.type'),
      id: "TND-01",
      desc: t('careers.job.03.desc'),
      skills: t('careers.job.03.skills'),
      software: t('careers.job.03.software')
    },
    {
      title: t('careers.job.04.title'),
      location: "Milan, IT",
      type: t('careers.job.04.type'),
      id: "NRG-01",
      desc: t('careers.job.04.desc'),
      skills: t('careers.job.04.skills'),
      software: t('careers.job.04.software')
    },
    {
      title: t('careers.job.05.title'),
      location: "Milan, IT",
      type: t('careers.job.05.type'),
      id: "MEP-01",
      desc: t('careers.job.05.desc'),
      skills: t('careers.job.05.skills'),
      software: t('careers.job.05.software')
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 bg-brand-white"
    >
      <SEO 
        title={t('seo.careers.title')}
        description={t('seo.careers.description')}
      />
      <section className="py-24 bg-brand-deep border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:pl-24">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-accent mb-6 block font-bold">
            {t('careers.title')}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-brand-white uppercase leading-[0.85]">
            {t('careers.headline.main')} <br />
            <span className="text-white/10">{t('careers.headline.sub')}</span>
          </h1>
          <p className="text-brand-white/40 font-mono text-[10px] uppercase tracking-widest max-w-md leading-relaxed">
            {t('careers.desc')}
          </p>
        </div>
      </section>

      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6 lg:pl-24">
          <div className="grid grid-cols-1 gap-px bg-brand-black/10 border border-brand-black/10">
            {positions.map((pos) => (
              <div 
                key={pos.id} 
                className={`bg-brand-white transition-all duration-500 overflow-hidden ${expandedId === pos.id ? 'ring-1 ring-inset ring-brand-accent/20' : ''}`}
              >
                <div 
                  className={`p-12 cursor-pointer group hover:bg-brand-deep transition-all duration-500 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 ${expandedId === pos.id ? 'bg-brand-deep' : ''}`}
                  onClick={() => setExpandedId(expandedId === pos.id ? null : pos.id)}
                >
                  <div className="flex items-start gap-8">
                    <span className={`text-[10px] font-mono transition-colors ${expandedId === pos.id ? 'text-brand-white/40' : 'text-brand-accent group-hover:text-brand-white/40'}`}>
                      {pos.id}
                    </span>
                    <div>
                      <h3 className={`text-2xl font-bold uppercase tracking-tight transition-colors mb-2 ${expandedId === pos.id ? 'text-brand-white' : 'text-brand-deep group-hover:text-brand-white'}`}>
                         {pos.title}
                      </h3>
                      <div className={`flex gap-6 text-[9px] font-mono uppercase tracking-widest transition-colors ${expandedId === pos.id ? 'text-brand-white/20' : 'text-brand-black/40 group-hover:text-brand-white/20'}`}>
                        <span>{pos.location}</span>
                        <span>{pos.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <motion.span 
                      animate={{ rotate: expandedId === pos.id ? 180 : 0 }}
                      className={`text-xl transition-colors ${expandedId === pos.id ? 'text-brand-white' : 'text-brand-deep group-hover:text-brand-white'}`}
                    >
                      ↓
                    </motion.span>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedId === pos.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="px-12 pb-12 border-t border-brand-black/5"
                    >
                      <div className="pt-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                          <div>
                            <span className="text-[8px] font-mono text-brand-black/30 uppercase tracking-[0.3em] block mb-2">Description</span>
                            <p className="text-sm text-brand-black/60 leading-relaxed font-normal">
                              {pos.desc}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-4 pt-4">
                            <a 
                              href="mailto:info@aithra.it"
                              className="text-[10px] font-mono uppercase tracking-[0.3em] bg-brand-deep px-8 py-4 text-brand-white hover:bg-brand-accent transition-all"
                            >
                              {t('careers.apply')}
                            </a>
                          </div>
                        </div>
                        <div className="space-y-8 bg-brand-black/[0.02] p-8 border border-brand-black/5">
                          <div>
                            <h4 className="text-[10px] font-bold text-brand-deep uppercase tracking-widest mb-4 border-b border-brand-black/10 pb-2">
                              {t('careers.requirements')}
                            </h4>
                            <p className="text-xs text-brand-black/50 leading-relaxed font-normal">
                              {pos.skills}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-[10px] font-bold text-brand-deep uppercase tracking-widest mb-4 border-b border-brand-black/10 pb-2">
                              {t('careers.software')}
                            </h4>
                            <p className="text-xs text-brand-black/50 leading-relaxed font-normal">
                              {pos.software}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-white text-brand-deep relative overflow-hidden border-t border-brand-black/5">
        <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:pl-24 relative z-10">
          <div className="max-w-2xl mb-24">
            <h2 className="text-3xl font-bold uppercase tracking-tighter mb-8">{t('careers.spontaneous.title')}</h2>
            <p className="text-brand-black/40 text-sm leading-relaxed mb-12 uppercase tracking-wide font-normal">
              {t('careers.spontaneous.desc')}
            </p>
            <a 
              href="mailto:info@aithra.it" 
              className="text-brand-accent font-mono text-xs uppercase tracking-[0.4em] hover:text-brand-deep transition-colors underline decoration-brand-accent/30 underline-offset-8"
            >
              info@aithra.it —&gt;
            </a>
          </div>

          <div className="pt-24 border-t border-brand-black/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-accent mb-8 block font-bold">
                  Life at AITHRA
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-deep uppercase leading-[0.9] mb-12">
                  {t('careers.culture.title')}
                </h2>
                <div className="space-y-8">
                  <p className="text-lg text-brand-black/60 leading-relaxed font-normal">
                    {t('careers.culture.desc')}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
                    {[
                      { label: t('careers.culture.grid.1'), icon: "⊕" },
                      { label: t('careers.culture.grid.2'), icon: "⊞" },
                      { label: t('careers.culture.grid.3'), icon: "⊗" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col gap-4">
                        <span className="text-brand-accent text-xl">{item.icon}</span>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-brand-deep/60">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="overflow-hidden bg-brand-black/5 border border-brand-black/10 aspect-square">
                   <div className="flex animate-carousel">
                      {gallery.concat(gallery).map((img, idx) => (
                        <div key={idx} className="min-w-full h-full p-4">
                          <img 
                            src={img} 
                            alt={`Gallery ${idx}`} 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                          />
                        </div>
                      ))}
                   </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-accent/10 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-300%); }
        }
        .animate-carousel {
          animation: carousel 20s linear infinite;
        }
        .animate-carousel:hover {
          animation-play-state: paused;
        }
      `}} />
    </motion.div>
  );
}
