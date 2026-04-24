import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 bg-brand-white"
    >
      <SEO 
        title={t('seo.services.title')}
        description={t('seo.services.description')}
      />
      <Services />

      {/* Final Statement / CTA */}
      <section className="py-32 bg-brand-deep text-brand-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter uppercase mb-12 max-w-4xl mx-auto leading-none">
            {t('services.cta.title')}
          </h2>
          <p className="text-brand-white/40 font-mono text-[10px] uppercase tracking-[0.4em] mb-16">
            {t('services.cta.tagline')}
          </p>
          <Link 
            to="/contact" 
            className="inline-block text-sm font-bold uppercase tracking-[0.4em] border border-brand-white/20 px-12 py-6 hover:bg-brand-white hover:text-brand-deep transition-all"
          >
            {t('services.cta.button')}
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
