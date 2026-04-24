import { motion, AnimatePresence } from "motion/react";
import { useState, FormEvent } from "react";
import { Map, Marker } from "pigeon-maps";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";

export default function Contact() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:info@aithra.it?subject=${encodeURIComponent(formData.subject || "Contact Inquiry")}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
  };

  const milanCoords: [number, number] = [45.4514, 9.1866]; // Viale Col di Lana 8, Milano

  const faqs = [
    { q: t('contact.faq.01.q'), a: t('contact.faq.01.a') },
    { q: t('contact.faq.02.q'), a: t('contact.faq.02.a') },
    { q: t('contact.faq.03.q'), a: t('contact.faq.03.a') },
    { q: t('contact.faq.04.q'), a: t('contact.faq.04.a') },
    { q: t('contact.faq.05.q'), a: t('contact.faq.05.a') },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 bg-brand-white"
    >
      <SEO 
        title={t('seo.contact.title')}
        description={t('seo.contact.description')}
      />
      <div className="bg-brand-deep py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-accent mb-6 block font-bold">
            {t('contact.title')}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-brand-white uppercase leading-tight">
            {t('contact.headline.main')} <br />
            <span className="text-white/10">{t('contact.headline.sub')}</span>
          </h1>
          <p className="text-brand-white/40 font-mono text-[10px] uppercase tracking-widest max-w-md leading-relaxed">
            {t('contact.desc')}
          </p>
        </div>
      </div>

      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight uppercase mb-12 text-brand-deep">{t('contact.details.title')}</h2>
              <div className="space-y-12">
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-black/40 mb-4">{t('contact.details.inquiries')}</h4>
                  <p className="text-xl font-bold text-brand-deep">info@aithra.it</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-black/40 mb-4">{t('contact.details.phone')}</h4>
                  <p className="text-xl font-bold text-brand-deep">+39 393 3293206</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-black/40 mb-4">{t('contact.details.office')}</h4>
                  <p className="text-xl font-bold text-brand-deep">Viale Col di Lana 8, 20136 Milano, Italy</p>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-black/[0.02] border border-brand-black/5 p-10">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-brand-deep">{t('contact.form.title')}</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="border-b border-brand-black/10 pb-2">
                    <label className="text-[8px] font-mono uppercase tracking-widest text-brand-black/40 block mb-2">{t('contact.form.name')}</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-transparent border-none outline-none w-full text-xs font-mono text-brand-deep placeholder:text-brand-black/10" 
                      placeholder={t('contact.form.placeholder.name')} 
                    />
                  </div>
                  <div className="border-b border-brand-black/10 pb-2">
                    <label className="text-[8px] font-mono uppercase tracking-widest text-brand-black/40 block mb-2">{t('contact.form.email')}</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-transparent border-none outline-none w-full text-xs font-mono text-brand-deep placeholder:text-brand-black/10" 
                      placeholder={t('contact.form.placeholder.email')} 
                    />
                  </div>
                </div>
                <div className="border-b border-brand-black/10 pb-2">
                  <label className="text-[8px] font-mono uppercase tracking-widest text-brand-black/40 block mb-2">{t('contact.form.subject')}</label>
                  <input 
                    type="text" 
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-transparent border-none outline-none w-full text-xs font-mono text-brand-deep placeholder:text-brand-black/10" 
                    placeholder={t('contact.form.placeholder.subject')} 
                  />
                </div>
                <div className="border-b border-brand-black/10 pb-2">
                  <label className="text-[8px] font-mono uppercase tracking-widest text-brand-black/40 block mb-2">{t('contact.form.message')}</label>
                  <textarea 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-transparent border-none outline-none w-full text-xs font-mono h-32 resize-none text-brand-deep placeholder:text-brand-black/10" 
                    placeholder={t('contact.form.placeholder.message')} 
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-brand-accent text-brand-white text-[10px] font-mono uppercase tracking-[0.3em] hover:bg-brand-deep transition-all"
                >
                  {t('contact.form.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 bg-brand-white border-t border-brand-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-accent mb-6 block font-bold">
                {t('contact.faq.title')}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-brand-deep uppercase leading-tight mb-8">
                {t('contact.faq.subtitle')}
              </h2>
            </div>
            
            <div className="lg:col-span-8 space-y-px bg-brand-black/5 border border-brand-black/5">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-brand-white group">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left p-8 flex justify-between items-center hover:bg-brand-black/[0.02] transition-colors"
                  >
                    <span className="text-sm md:text-base font-bold uppercase tracking-tight text-brand-deep group-hover:text-brand-accent transition-colors">
                      {faq.q}
                    </span>
                    <motion.span 
                      animate={{ rotate: openFaq === idx ? 45 : 0 }}
                      className="text-brand-accent text-2xl font-light"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 text-xs md:text-sm text-brand-black/50 leading-relaxed font-normal max-w-2xl">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-brand-white border-t border-brand-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div className="max-w-2xl">
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-accent mb-6 block font-bold">{t('about.map.title')}</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-deep uppercase leading-tight">
                  {t('about.map.milan')}
                </h2>
              </div>
            </div>

            <div className="h-[500px] w-full border border-brand-black/5 relative overflow-hidden grayscale contrast-[1.1] brightness-[1.05]">
              <Map 
                defaultCenter={milanCoords} 
                defaultZoom={15}
                mouseEvents={true}
                touchEvents={true}
              >
                <Marker 
                  width={50} 
                  anchor={milanCoords} 
                  color="#0088D1" 
                />
              </Map>
              
              {/* Overlay to ensure brand consistency - pointer-events-none allows interaction with map below */}
              <div className="absolute inset-0 pointer-events-none border-[20px] border-brand-white/10" />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
