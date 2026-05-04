import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { id: "01", name: t('nav.projects'), href: "/projects" },
    { id: "02", name: t('nav.services'), href: "/services" },
    { id: "03", name: t('nav.ailab'), href: "/ai-lab" },
    { id: "04", name: t('nav.news'), href: "/news" },
    { id: "05", name: t('nav.about'), href: "/about" },
    { id: "06", name: t('nav.careers'), href: "/careers" },
    { id: "07", name: t('nav.contact'), href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[70] h-24 grid grid-cols-3 items-center px-6 lg:px-12 bg-brand-white/80 backdrop-blur-sm">
        <div className="flex justify-start">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/assets/LOGO_AITHRA.png" alt="AITHRA Logo" className="h-8 w-auto transition-opacity group-hover:opacity-80" />
          </Link>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="text-sm font-bold uppercase tracking-widest hover:text-brand-accent transition-colors"
          >
            {t('nav.menu')}
          </button>
        </div>

        <div className="flex justify-end">
          <button 
            className="text-[10px] font-mono font-bold tracking-widest hover:text-brand-accent transition-colors flex items-center gap-1"
            onClick={() => setLanguage(language === 'IT' ? 'EN' : 'IT')}
          >
            <span className={language === 'IT' ? 'text-brand-accent underline underline-offset-4' : 'opacity-40'}>IT</span>
            <span className="opacity-20">/</span>
            <span className={language === 'EN' ? 'text-brand-accent underline underline-offset-4' : 'opacity-40'}>EN</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-white flex flex-col"
          >
            <div className="h-24 flex items-center justify-between px-6 lg:px-12">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="opacity-40 hover:opacity-100 transition-opacity">
                <img src="/assets/LOGO_AITHRA.png" alt="AITHRA Logo" className="h-6 w-auto" />
              </Link>
              <div className="flex items-center gap-6">
                <button 
                  className="text-[10px] font-mono font-bold tracking-widest hover:text-brand-accent transition-colors flex items-center gap-1"
                  onClick={() => setLanguage(language === 'IT' ? 'EN' : 'IT')}
                >
                  <span className={language === 'IT' ? 'text-brand-accent underline underline-offset-4' : 'opacity-40'}>IT</span>
                  <span className="opacity-20">/</span>
                  <span className={language === 'EN' ? 'text-brand-accent underline underline-offset-4' : 'opacity-40'}>EN</span>
                </button>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] hover:text-brand-accent transition-colors border border-brand-black/10 px-4 py-2"
                >
                  {t('nav.close')}
                </button>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 lg:px-24">
              <div className="flex flex-col gap-2 lg:gap-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group"
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-8 py-2"
                    >
                      <span className="text-[10px] font-mono text-brand-accent font-bold w-8">
                        {link.id}
                      </span>
                      <span className={`text-2xl lg:text-3xl font-bold tracking-tighter uppercase transition-all group-hover:translate-x-4 ${location.pathname === link.href ? 'text-brand-accent' : 'text-brand-deep/30 group-hover:text-brand-deep'}`}>
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-6 lg:p-12 border-t border-brand-deep/5 flex flex-col md:flex-row justify-between gap-8">
              <div className="flex gap-12">
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-brand-deep/40 mb-2">Inquiries</h4>
                  <p className="text-sm font-bold">info@aithra.it</p>
                </div>
                {/* <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-brand-deep/40 mb-2">Phone</h4>
                  <p className="text-sm font-bold">+39 393 3293206</p>
                </div> */}
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-brand-deep/40 mb-2">Location</h4>
                  <p className="text-sm font-bold">Milan, Italy</p>
                </div>
              </div>
              <div className="flex gap-6 text-[10px] font-mono uppercase tracking-widest text-brand-deep/40">
                <a href="#" className="hover:text-brand-accent">Instagram</a>
                <a href="#" className="hover:text-brand-accent">LinkedIn</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
