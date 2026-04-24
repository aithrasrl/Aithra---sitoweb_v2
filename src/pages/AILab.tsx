import { motion } from "motion/react";
import AISection from "../components/AISection";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";
import cvCAB from "../assets/CV_CAB.png";
import cvSMM from "../assets/CV_SMM.jpeg";

export default function AILab() {
  const { t } = useLanguage();

  const heads = [
    {
      name: t('ai.heads.01.name'),
      role: t('ai.heads.01.role'),
      image: cvCAB,
      bio: t('ai.heads.01.bio'),
      scale: 1,
      position: "object-[center_30%]"
    },
    {
      name: t('ai.heads.02.name'),
      role: t('ai.heads.02.role'),
      image: cvSMM,
      bio: t('ai.heads.02.bio'),
      scale: 1.2,
      position: "object-[center_-10%]"
    }
  ];

  const labProjects = [
    {
      title: t('ai.projects.01.title'),
      type: t('ai.projects.01.type'),
      desc: t('ai.projects.01.desc'),
      status: t('ai.projects.01.status')
    },
    {
      title: t('ai.projects.02.title'),
      type: t('ai.projects.02.type'),
      desc: t('ai.projects.02.desc'),
      status: t('ai.projects.02.status')
    },
    {
      title: t('ai.projects.03.title'),
      type: t('ai.projects.03.type'),
      desc: t('ai.projects.03.desc'),
      status: t('ai.projects.03.status')
    }
  ];

  const publications = [
    {
      title: t('ai.publications.01.title'),
      year: t('ai.publications.01.year'),
      journal: t('ai.publications.01.journal')
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <SEO 
        title={t('seo.ailab.title')}
        description={t('seo.ailab.description')}
      />
      {/* Hero Section */}
      <div className="bg-brand-deep text-brand-white py-32 relative overflow-hidden border-b border-brand-white/10">
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-accent mb-8 block font-bold">
            {t('ai.tag')}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-10 uppercase leading-[0.9]">
            AI.THRA <br />
            <span className="text-brand-white/10">LAB.</span>
          </h1>
          <p className="text-brand-white/50 font-normal text-sm max-w-md leading-relaxed">
            {t('ai.desc')}
          </p>
        </div>
      </div>

      {/* Heads of the Area */}
      <section className="py-24 bg-brand-white border-b border-brand-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-accent mb-16 block font-bold">
            {t('ai.heads.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {heads.map((head, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col md:flex-row gap-8 items-center md:items-start"
              >
                <div className="w-48 h-48 shrink-0 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden bg-brand-black/5 border border-brand-black/5">
                  <img 
                    src={head.image} 
                    alt={head.name} 
                    className={`w-full h-full object-cover transition-transform duration-700 ${head.position || 'object-center'}`} 
                    style={{ transform: `scale(${head.scale || 1})` }}
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-brand-deep mb-1">{head.name}</h3>
                  <p className="text-[10px] font-mono text-brand-accent uppercase tracking-widest mb-4 font-bold">{head.role}</p>
                  <p className="text-xs text-brand-black/50 leading-relaxed font-normal max-w-sm">{head.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section (The "Artificial Intelligence at the service of the project" part) */}
      <AISection />

      {/* OUR PROJECTS Section */}
      <section className="py-24 bg-brand-white border-b border-brand-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-accent mb-16 block font-bold">
            {t('ai.projects.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {labProjects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 border border-brand-black/5 bg-brand-white group hover:bg-brand-deep transition-all duration-500"
              >
                <div className="text-[10px] font-mono text-brand-accent uppercase mb-4 font-bold tracking-widest">{project.type}</div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-brand-deep group-hover:text-brand-white transition-colors">{project.title}</h3>
                <p className="text-xs text-brand-black/50 group-hover:text-brand-white/50 leading-relaxed font-normal mb-8">
                  {project.desc}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse" />
                  <span className="text-[8px] font-mono text-brand-black/30 group-hover:text-brand-white/30 uppercase tracking-widest">{project.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS Section */}
      <section className="py-24 bg-brand-deep text-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-accent mb-16 block font-bold">
            {t('ai.publications.title')}
          </h2>
          <div className="space-y-12">
            {publications.map((pub, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-white/10 pb-8 group"
              >
                <div className="max-w-2xl">
                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-brand-accent transition-colors">{pub.title}</h3>
                  <p className="text-[10px] font-mono text-brand-white/40 uppercase tracking-widest mt-2">{pub.journal}</p>
                </div>
                <div className="text-2xl font-bold font-mono text-brand-white/20 group-hover:text-brand-accent transition-colors">
                  {pub.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
