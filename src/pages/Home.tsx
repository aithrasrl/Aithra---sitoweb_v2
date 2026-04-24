import { motion, useMotionValue, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";
export default function Home() {
  const { t } = useLanguage();
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isDragging) return;

    const loopWidth = 1728; // Approximate width of one set of 4 items (400*4 + 32*4)
    
    const controls = animate(x, [x.get(), -loopWidth], {
      duration: 40 * (Math.abs(loopWidth + x.get()) / loopWidth),
      ease: "linear",
      repeat: Infinity,
      onUpdate: (latest) => {
        if (latest <= -loopWidth) {
          x.set(0);
        }
      }
    });

    return controls.stop;
  }, [isDragging, x]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-white"
    >
      <SEO 
        title={t('seo.home.title')}
        description={t('seo.home.description')}
      />
      <Hero />
      
      {/* Integrated Design Section */}
      <section className="py-8 md:py-32 bg-brand-white border-b border-brand-black/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-24">
          <div className="w-full h-px bg-brand-black/10 mb-8 md:mb-12" />
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-accent mb-6 block font-bold">{t('home.integrated.tag')}</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-brand-deep uppercase leading-[0.85] tracking-tighter">
            {t('home.integrated.title')} <br />
            <span className="text-brand-black/20">{t('home.integrated.title.sub')}</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/2 aspect-[16/9] overflow-hidden border-r border-brand-black/5"
          >
            <img 
              src="/assets/01_Facciata.png" 
              alt="Integrated Design"
              className="w-full h-full object-cover hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/2 flex items-center"
          >
            <div className="px-6 lg:pl-24 lg:pr-12 py-6 md:py-20 max-w-2xl">
              <div className="w-16 h-px bg-brand-accent mb-8 md:mb-16" />
              <p className="text-2xl md:text-4xl font-normal text-brand-black/70 leading-tight tracking-tight mb-12 italic">
                "{t('home.integrated.quote')}"
              </p>
              <p className="text-sm text-brand-black/40 font-normal max-w-sm leading-relaxed mb-16">
                {t('home.integrated.desc')}
              </p>
              <Link to="/services" className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-accent hover:text-brand-deep transition-colors border-b border-brand-accent/20 pb-2 font-bold">
                {t('home.integrated.link')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR APPROACH Section */}
      <section className="py-8 md:py-32 bg-brand-white border-b border-brand-black/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-24">
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-accent mb-8 block font-bold">
            {t('home.approach.tag')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-[0.85] tracking-tighter text-brand-deep uppercase">
            {t('home.approach.title')}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/2 aspect-[16/9] overflow-hidden border-r border-brand-black/5"
          >
            <img 
              src="/assets/03_STR-Digitali.png" 
              alt="Our Approach"
              className="w-full h-full object-cover hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/2 flex items-center"
          >
            <div className="px-6 lg:pl-24 lg:pr-12 py-6 md:py-20 max-w-2xl">
              <div className="w-16 h-px bg-brand-accent mb-8 md:mb-16" />
              <p className="text-2xl md:text-4xl font-normal text-brand-black/70 leading-tight tracking-tight mb-16 italic">
                "{t('home.approach.desc')}"
              </p>
              
              <div className="space-y-16">
                {[
                  { id: "01", title: t('home.approach.step1.title'), desc: t('home.approach.step1.desc') },
                  { id: "02", title: t('home.approach.step2.title'), desc: t('home.approach.step2.desc') },
                  { id: "03", title: t('home.approach.step3.title'), desc: t('home.approach.step3.desc') }
                ].map((step) => (
                  <div key={step.id} className="flex gap-10 items-start group">
                    <span className="text-[14px] font-mono text-brand-accent font-bold pt-1">{step.id}</span>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest mb-3 group-hover:text-brand-accent transition-colors">{step.title}</h4>
                      <p className="text-xs text-brand-black/40 font-normal leading-relaxed max-w-xs">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR EXPERTISE Section */}
      <section className="py-8 md:py-32 bg-brand-white border-b border-brand-black/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-24">
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-accent mb-8 block font-bold">
            {t('home.expertise.tag')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-[0.85] tracking-tighter text-brand-deep uppercase">
            {t('home.expertise.title')}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/2 aspect-[16/9] overflow-hidden border-r border-brand-black/5"
          >
            <img 
              src="/assets/03a.png" 
              alt="Our Expertise"
              className="w-full h-full object-cover hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/2 flex items-center"
          >
            <div className="px-6 lg:pl-24 lg:pr-12 py-6 md:py-20 max-w-2xl">
              <div className="w-16 h-px bg-brand-accent mb-8 md:mb-16" />
              <p className="text-2xl md:text-4xl font-normal text-brand-black/70 leading-tight tracking-tight mb-16 italic">
                "{t('home.expertise.desc')}"
              </p>
              <div className="grid grid-cols-2 gap-12 pt-16 border-t border-brand-black/5">
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-brand-deep/40 mb-6 font-bold">{t('home.expertise.core.title')}</h4>
                  <ul className="text-[11px] font-bold uppercase space-y-3 tracking-wider">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-accent" /> {t('home.expertise.core.item1')}</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-accent" /> {t('home.expertise.core.item2')}</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-accent" /> {t('home.expertise.core.item3')}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-brand-deep/40 mb-6 font-bold">{t('home.expertise.digital.title')}</h4>
                  <ul className="text-[11px] font-bold uppercase space-y-3 tracking-wider">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-accent" /> {t('home.expertise.digital.item1')}</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-accent" /> {t('home.expertise.digital.item2')}</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-accent" /> {t('home.expertise.digital.item3')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEWS Section - Marquee Effect */}
      <section className="py-8 md:py-32 bg-brand-white border-b border-brand-black/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-6 md:mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-accent mb-6 block font-bold">
            {t('home.news.tag')}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-brand-deep uppercase">
            {t('home.news.title')}
          </h2>
        </div>

        <div className="relative cursor-grab active:cursor-grabbing" ref={containerRef}>
          <motion.div 
            style={{ x }}
            drag="x"
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            onDrag={(e, info) => {
              const currentX = x.get();
              const loopWidth = 1728;
              if (currentX <= -loopWidth) {
                x.set(currentX + loopWidth);
              } else if (currentX > 0) {
                x.set(currentX - loopWidth);
              }
            }}
            className="flex gap-8 px-8 whitespace-nowrap"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-8">
                {[
                  { id: "conto-termico", title: t('home.news.item1.title'), desc: t('home.news.item1.desc'), img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800", link: "/news/conto-termico" },
                  { id: "ai-engineering", title: t('home.news.item2.title'), desc: t('home.news.item2.desc'), img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800", link: "/news/ai-engineering" },
                  { id: "smart-tools", title: t('home.news.item3.title'), desc: t('home.news.item3.desc'), img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80&w=800", link: "/news/smart-tools" },
                  { id: "energy-transition", title: t('home.news.item4.title'), desc: t('home.news.item4.desc'), img: "/assets/windmill.jpg", link: "/news/energy-transition" },
                ].map((news, idx) => (
                  <Link 
                    key={idx} 
                    to={news.link}
                    className="w-[400px] group block shrink-0"
                    onClick={(e) => {
                      if (isDragging) e.preventDefault();
                    }}
                  >
                    <div className="aspect-video overflow-hidden mb-6 border border-brand-black/5">
                      <img 
                        src={news.img} 
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-brand-deep mb-3 group-hover:text-brand-accent transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-xs text-brand-black/40 font-normal leading-relaxed whitespace-normal line-clamp-2">
                      {news.desc}
                    </p>
                    <div className="mt-4 text-[10px] font-mono uppercase tracking-widest text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      {t('home.news.more')}
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statement Section with Grid Lines */}
      <section className="py-12 md:py-24 bg-brand-white relative border-b border-brand-black/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
            <div className="lg:col-span-8 border-l border-brand-accent/30 pl-12">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold leading-tight uppercase tracking-tight text-brand-deep"
              >
                {t('home.metric.title.1')} <br />
                <span className="text-brand-accent">{t('home.metric.title.2')}</span> {t('home.metric.title.3')} <br />
                <span className="text-brand-black/20">{t('home.metric.title.4')}</span>
              </motion.h2>
              <p className="mt-12 text-sm text-brand-black/60 max-w-xl leading-relaxed font-normal">
                {t('home.metric.desc')}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end">
              <div className="p-8 border border-brand-black/10 bg-brand-black/5">
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-accent mb-4 block">{t('home.metric.label')}</span>
                <div className="text-5xl font-bold tracking-tighter mb-2">35%</div>
                <p className="text-[9px] font-mono uppercase tracking-widest text-brand-black/40">{t('home.metric.value.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview - Settanta7 Character */}
      <section className="py-24 text-brand-white relative overflow-hidden">
        {/* Background Image for the Team Section */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Office Environment"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-black" />
        </div>
        <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.85]">
              THE <br />
              <span className="text-brand-white/20">{t('home.team.subtitle')}</span>
            </h2>
            <div className="w-px h-24 bg-brand-white/10 hidden md:block" />
            <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-white/40 max-w-xs text-right leading-relaxed">
              {t('home.team.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-white/10 border border-brand-white/10">
            {[
              { name: "CIRIACO ALBERTO BELMONTE", role: "CEO e AI Research Lead", id: "01" },
              { name: "PIERLUIGI BISOGNO", role: "Technical Director and Head of Proposal", id: "02" },
              { name: "FRANCESCO NEPITA", role: "Production and Construction Manager", id: "03" }
            ].map((member, idx) => (
              <div key={idx} className="bg-brand-black p-10 group hover:bg-brand-white/5 transition-all relative overflow-hidden">
                <span className="text-[8px] font-mono text-brand-accent mb-6 block">{member.id}</span>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-brand-accent transition-colors">{member.name}</h3>
                <p className="text-[10px] font-mono uppercase tracking-widest text-brand-white/40">{member.role}</p>
                
                {/* Technical accent */}
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-brand-white/10 group-hover:border-brand-accent transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 text-brand-white relative overflow-hidden">
        {/* Background Image for the CTA Section */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Skyscraper"
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-deep" />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12">
            {t('home.cta.title.1')} <br />
            <span className="text-brand-accent">{t('home.cta.title.2')}</span>
          </h2>
          <Link 
            to="/contact" 
            className="inline-block text-sm font-bold uppercase tracking-[0.4em] border border-brand-white/20 px-12 py-6 hover:bg-brand-white hover:text-brand-deep transition-all"
          >
            {t('home.cta.button')}
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
