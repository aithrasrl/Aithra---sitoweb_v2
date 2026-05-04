import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";

export default function About() {
  const { t } = useLanguage();

  const officeGallery = [
    { img: "/assets/11.png", id: "11" },
    { img: "/assets/12.jpeg", id: "12" },
    { img: "/assets/14.png", id: "14" },
    { img: "/assets/15.png", id: "15" },
    { img: "/assets/19.png", id: "19" }
  ];

  const boardMembers = [
    { name: t('about.team.member.01.name'), role: t('about.team.member.01.role'), degree: t('about.team.member.01.degree'), img: "/assets/CV_CAB.png", scale: 1, position: "object-[center_30%]" },
    { name: t('about.team.member.02.name'), role: t('about.team.member.02.role'), degree: t('about.team.member.02.degree'), img: "/assets/CV_PIB2.jpeg", scale: 1.2, position: "object-top" },
    { name: t('about.team.member.03.name'), role: t('about.team.member.03.role'), degree: t('about.team.member.03.degree'), img: "/assets/CV_FRN.png", scale: 1, position: "object-[center_30%]" },
  ];

  const employees = [
    { name: t('about.team.employee.01.name'), role: t('about.team.employee.01.role'), degree: t('about.team.employee.01.degree'), img: "/assets/CV_SMM.jpeg", scale: 1.2, position: "object-[center_-10%]" },
    { name: t('about.team.employee.02.name'), role: t('about.team.employee.02.role'), degree: t('about.team.employee.02.degree'), img: "/assets/CV_CAB.png", scale: 1, position: "object-[center_30%]" },
    { name: t('about.team.employee.03.name'), role: t('about.team.employee.03.role'), degree: t('about.team.employee.03.degree'), img: "/assets/CV_PIB2.jpeg", scale: 1.2, position: "object-top" },
    { name: t('about.team.employee.04.name'), role: t('about.team.employee.04.role'), degree: t('about.team.employee.04.degree'), img: "/assets/CV_FRN.png", scale: 1, position: "object-[center_30%]" },
  ];

  const locations = [
    { city: "Milano", type: "HEADQUARTERS" },
    { city: "Viale Col di Lana 8", type: "OFFICE" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 bg-brand-white"
    >
      <SEO 
        title={t('seo.about.title')}
        description={t('seo.about.description')}
      />
      <div className="bg-brand-deep py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-accent mb-6 block font-bold">
            {t('nav.about')}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-brand-white uppercase leading-tight">
            {t('about.headline.main')} <br />
            <span className="text-white/10">{t('about.headline.sub')}</span>
          </h1>
          <p className="text-brand-white/60 font-normal text-sm max-w-3xl leading-relaxed whitespace-pre-line text-justify">
            {t('about.desc')}
          </p>
        </div>
      </div>

      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6 lg:pl-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="aspect-[4/5] bg-brand-black/5 border border-brand-black/10 overflow-hidden relative">
               <img 
                src="/assets/13.png" 
                alt="Studio Life"
                className="w-full h-full object-cover opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8 bg-brand-white p-6 border border-brand-black/10">
                <div className="text-[8px] font-mono uppercase tracking-widest text-brand-black/40 mb-1">{t('about.experience.label')}</div>
                <div className="text-xl font-bold text-brand-deep">{t('about.experience.value')}</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight uppercase mb-8 text-brand-deep">{t('about.philosophy.title')}</h2>
              <p className="text-lg text-brand-black/70 leading-relaxed font-light mb-8 italic">
                "{t('about.philosophy.text')}"
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-bold uppercase mb-2 text-brand-deep">{t('about.integrated.title')}</h4>
                  <p className="text-[10px] text-brand-black/50 leading-relaxed font-normal">
                    {t('about.integrated.desc')}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase mb-2 text-brand-deep">{t('about.sustainable.title')}</h4>
                  <p className="text-[10px] text-brand-black/50 leading-relaxed font-normal">
                    {t('about.sustainable.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Section */}
      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6 lg:pl-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-accent mb-6 block font-bold">{t('about.people')}</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-deep uppercase leading-tight">
                {t('about.people.subtitle')}
              </h2>
            </div>
            <p className="text-sm text-brand-black/60 max-w-xs leading-relaxed font-normal">
              {t('about.people.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {boardMembers.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6 border border-brand-black/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <motion.img 
                    src={member.img} 
                    alt={member.name}
                    className={`w-full h-full object-cover ${member.position || 'object-center'}`}
                    style={{ scale: member.scale }}
                    whileHover={{ scale: member.scale * 1.05 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-tight mb-1 text-brand-deep group-hover:text-brand-accent transition-colors">{member.name}</h3>
                <p className="text-[10px] font-mono uppercase tracking-widest text-brand-black/40 mb-1 leading-tight">{member.role}</p>
                <p className="text-[9px] font-mono uppercase tracking-wider text-brand-black/25 italic">{member.degree}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employees Section */}
      <section className="py-24 bg-brand-black/[0.02] border-y border-brand-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:pl-24">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-brand-deep uppercase leading-tight">
              TEAM AITHRA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {employees.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group"
              >
                <div className="aspect-[1/1] overflow-hidden mb-6 border border-brand-black/5 grayscale group-hover:grayscale-0 transition-all duration-700 rounded-full">
                  <motion.img 
                    src={member.img} 
                    alt={member.name}
                    className={`w-full h-full object-cover ${member.position || 'object-center'}`}
                    style={{ scale: member.scale }}
                    whileHover={{ scale: member.scale * 1.05 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-bold uppercase tracking-tight mb-1 text-brand-deep group-hover:text-brand-accent transition-colors">{member.name}</h3>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-brand-black/40 mb-1 leading-tight">{member.role}</p>
                  <p className="text-[9px] font-mono uppercase tracking-wider text-brand-black/25 italic">{member.degree}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 pt-24 border-t border-brand-black/5">
            <div className="max-w-2xl mb-16">
              <p className="text-sm text-brand-black/60 leading-relaxed font-normal">
                {t('about.team.fullDesc')}
              </p>
            </div>

            <div className="relative group overflow-hidden">
               <div className="flex animate-about-carousel">
                  {officeGallery.concat(officeGallery).map((item, idx) => (
                    <div key={idx} className="min-w-[300px] md:min-w-[500px] aspect-video overflow-hidden bg-brand-black/5">
                      <img 
                        src={item.img} 
                        alt={item.id} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes about-carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-about-carousel {
          animation: about-carousel 40s linear infinite;
        }
        .animate-about-carousel:hover {
          animation-play-state: paused;
        }
      `}} />

      <section className="py-24 bg-brand-white text-brand-deep border-t border-brand-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight uppercase mb-16 text-center">{t('about.presence.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {locations.map((loc, idx) => (
              <div key={idx}>
                <div className={`text-2xl mb-2 ${loc.type === 'OFFICE' ? 'font-normal' : 'font-bold'}`}>{loc.city}</div>
                <div className="text-[8px] font-mono uppercase tracking-widest text-brand-black/40">{loc.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
