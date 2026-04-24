import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import laserScannerImg from "../assets/laser-scanner.jpg";
import facciataImg from "../assets/01_Facciata.png";
import revitImg from "../assets/02_revit.png";
import tenderImg from "../assets/03_STR-Digitali.png";

export default function Services() {
  const { t } = useLanguage();

  const serviceCategories = [
    {
      id: "01",
      title: t('services.energia.title'),
      desc: t('services.energia.desc'),
      items: t('services.energia.items').split(', '),
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "02",
      title: t('services.architettura.title'),
      desc: t('services.architettura.desc'),
      items: t('services.architettura.items').split(', '),
      image: facciataImg
    },
    {
      id: "03",
      title: t('services.strutture.title'),
      desc: t('services.strutture.desc'),
      items: t('services.strutture.items').split(', '),
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "04",
      title: t('services.impianti.title'),
      desc: t('services.impianti.desc'),
      items: t('services.impianti.items').split(', '),
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "05",
      title: t('services.ai.title'),
      desc: t('services.ai.desc'),
      items: t('services.ai.items').split(', '),
      image: revitImg
    },
    {
      id: "06",
      title: t('services.tender.title'),
      desc: t('services.tender.desc'),
      items: t('services.tender.items').split(', '),
      image: tenderImg
    },
    {
      id: "07",
      title: t('services.rilievo.title'),
      desc: t('services.rilievo.desc'),
      items: t('services.rilievo.items').split(', '),
      image: laserScannerImg
    }
  ];

  return (
    <section id="services" className="bg-brand-white">
      {/* Header */}
      <div className="py-32 bg-brand-deep relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-accent mb-8 block font-bold">
            {t('services.title')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-[0.85] tracking-tighter text-brand-white uppercase max-w-4xl">
            {t('services.subtitle')}
          </h2>
        </div>
      </div>

      {/* Service Categories */}
      {serviceCategories.map((category, idx) => (
        <div key={category.id} className="border-b border-brand-black/10 overflow-hidden">
          <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch`}>
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="lg:w-1/2 aspect-[16/9] lg:aspect-auto lg:max-h-[500px] overflow-hidden"
            >
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-full object-cover hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:w-1/2 flex items-center bg-brand-white"
            >
              <div className="px-6 lg:px-24 py-16 max-w-2xl">
                <span className="text-[14px] font-mono text-brand-accent font-bold mb-6 block">{category.id}</span>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-deep uppercase tracking-tighter mb-6 leading-none">
                  {category.title}
                </h3>
                <p className="text-lg text-brand-black/70 leading-relaxed mb-8 italic font-normal">
                  "{category.desc}"
                </p>
                
                <div className="w-12 h-px bg-brand-accent/30 mb-8" />
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <div className="w-1 h-1 bg-brand-accent mt-2 flex-shrink-0" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-black/40 group-hover:text-brand-accent transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}
