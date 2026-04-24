import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";

export default function Transparency() {
  const { t } = useLanguage();

  const sections = [
    {
      title: t('transparency.section.company.title'),
      items: [
        t('transparency.section.company.name'),
        t('transparency.section.company.vat'),
        t('transparency.section.company.address'),
      ]
    },
    {
      title: t('transparency.section.insurance.title'),
      desc: t('transparency.section.insurance.desc')
    },
    {
      title: t('transparency.section.subsidies.title'),
      desc: t('transparency.section.subsidies.desc')
    },
    {
      title: t('privacy.section.controller.title'),
      desc: t('privacy.section.controller.desc')
    },
    {
      title: t('privacy.section.purposes.title'),
      desc: t('privacy.section.purposes.desc')
    },
    {
      title: t('privacy.section.data.title'),
      desc: t('privacy.section.data.desc')
    },
    {
      title: t('privacy.section.rights.title'),
      desc: t('privacy.section.rights.desc')
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
        title={t('seo.transparency.title')}
        description={t('seo.transparency.description')}
      />
      
      <section className="bg-brand-deep py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-accent mb-6 block font-bold">
            {t('transparency.title')}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-brand-white uppercase leading-tight">
            {t('transparency.headline.main')} <br />
            <span className="text-white/10">{t('transparency.headline.sub')}</span>
          </h1>
          <p className="text-brand-white/40 font-mono text-[10px] uppercase tracking-widest max-w-md leading-relaxed">
            {t('transparency.desc')}
          </p>
        </div>
      </section>

      <section className="py-24 bg-brand-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="mb-20 pb-10 border-b border-brand-deep/5">
            <div>
              <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-accent mb-2">Technical Dossier</h2>
              <p className="text-2xl font-bold tracking-tighter text-brand-deep uppercase">Internal Governance & Legal Disclosure</p>
            </div>
          </div>

          <div className="space-y-20">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-8 bg-brand-accent opacity-30 group-hover:w-12 transition-all duration-500" />
                  <h3 className="text-[11px] font-mono uppercase tracking-[0.3em] text-brand-deep font-bold">
                    {section.title}
                  </h3>
                </div>
                
                <div className="pl-12">
                  {section.items ? (
                    <ul className="space-y-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-base font-medium text-brand-deep/80 tracking-tight flex items-start gap-3">
                          <span className="text-brand-accent font-mono text-[10px] mt-1.5 opacity-50">[{String(i + 1).padStart(2, '0')}]</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="relative">
                      <p className="text-base font-medium text-brand-deep/80 tracking-tight leading-relaxed">
                        {section.desc}
                      </p>
                      <div className="mt-6 flex gap-2">
                        <div className="w-1 h-1 bg-brand-accent rounded-full opacity-30" />
                        <div className="w-1 h-1 bg-brand-accent rounded-full opacity-30" />
                        <div className="w-1 h-1 bg-brand-accent rounded-full opacity-30" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
