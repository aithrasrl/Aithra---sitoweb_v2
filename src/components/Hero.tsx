import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import heroImage from "../assets/hero-milan.jpg";

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <div className="bg-brand-black">
      {/* Section 1: New Hero Design */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Full Screen Background Image - Milan Skyline (Local Asset) */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Milan Architecture Gae Aulenti"
            className="w-full h-full object-cover opacity-100"
            referrerPolicy="no-referrer"
          />
          {/* Subtle overlay only to ensure text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            key={language}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-brand-accent font-mono text-sm tracking-[0.6em] uppercase mb-6 block">
              {t('home.hero.engineering')}
            </span>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              {t('home.hero.tagline').split(':')[0]}: <br />
              <span className="text-brand-accent">{t('home.hero.tagline').split(':')[1]}</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto font-normal tracking-wide">
              {t('home.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: AITHRA IS AI-POWERED ENGINEERING FIRM*/}
      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-accent mb-8 block font-bold">
                {t('home.hero.intro.integrated')}
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tighter text-brand-deep uppercase">
                AITHRA IS <br />
                <span className="text-brand-accent">AI-Powered</span> <br />
                <span className="text-brand-black/10">Engineering.</span>
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="lg:col-span-4 pb-4"
            >
              <p className="text-sm font-normal text-brand-black/60 leading-relaxed max-w-sm">
                {t('home.hero.intro.desc')}
              </p>
              <div className="mt-8 flex flex-col gap-4">
                <div className="h-px w-full bg-brand-black/10" />
                <div className="space-y-4">
                   <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-brand-deep/40">{t('home.hero.intro.expertise')}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-deep">{t('home.hero.intro.integrated')}</span>
                   </div>
                   <div className="flex justify-end items-center">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-deep">{t('home.hero.intro.sustainability')}</span>
                   </div>
                   <div className="flex justify-end items-center">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-deep">{t('home.hero.intro.construction')}</span>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
