import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function AISection() {
  const { t } = useLanguage();
  
  const features = [
    { 
      id: "01", 
      title: "Design Generativo", 
      desc: "Algoritmi che esplorano migliaia di varianti progettuali per trovare la soluzione ottimale." 
    },
    { 
      id: "02", 
      title: "BIM + AI", 
      desc: "Modelli informativi arricchiti da machine learning per previsioni accurate e clash detection automatica." 
    },
    { 
      id: "03", 
      title: "Simulazioni Avanzate", 
      desc: "Analisi energetiche, strutturali e fluidodinamiche potenziate dall'intelligenza artificiale." 
    },
    { 
      id: "04", 
      title: "Ottimizzazione Continua", 
      desc: "I nostri modelli apprendono da ogni progetto, migliorando costantemente performance e efficienza." 
    },
  ];

  return (
    <section id="ai" className="py-24 bg-brand-deep relative overflow-hidden border-y border-brand-white/10">
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Title and Description */}
          <div className="lg:col-span-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/10 mb-8 border border-brand-accent/20">
              <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent">
                {t('ai.tag')}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10 text-brand-white leading-[1.1] uppercase">
              {t('ai.title')}
            </h2>
            
            <p className="text-sm font-normal text-brand-white/50 leading-relaxed max-w-md mb-12">
              {t('ai.desc')}
            </p>
          </div>

          {/* Right Column: Features and Technical Rail */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f, idx) => (
                <motion.div 
                  key={f.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 bg-brand-white/5 border border-brand-white/10 shadow-sm hover:bg-brand-white/10 transition-all relative group backdrop-blur-sm"
                >
                  <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-brand-accent rounded-full opacity-40 group-hover:opacity-100 transition-opacity" />
                  
                  <span className="text-[10px] font-mono text-brand-white/30 mb-4 block">
                    {f.id}
                  </span>
                  
                  <h3 className="text-lg font-bold mb-3 text-brand-white uppercase tracking-tight">
                    {f.title}
                  </h3>
                  
                  <p className="text-xs text-brand-white/50 leading-relaxed font-normal">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Technical Rail Accent */}
            <div className="mt-12 pt-12 border-t border-brand-white/10 flex justify-between items-center">
              <div className="flex gap-8">
                <div className="flex flex-col gap-1">
                  <span className="text-[7px] font-mono text-brand-white/30 uppercase tracking-widest">Processing</span>
                  <span className="text-[10px] font-bold text-brand-white uppercase">Real-time</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[7px] font-mono text-brand-white/30 uppercase tracking-widest">Accuracy</span>
                  <span className="text-[10px] font-bold text-brand-white uppercase">99.98%</span>
                </div>
              </div>
              <div className="text-[8px] font-mono text-brand-white/20 uppercase tracking-[0.4em]">
                AITHRA_LABS_INFRASTRUCTURE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
