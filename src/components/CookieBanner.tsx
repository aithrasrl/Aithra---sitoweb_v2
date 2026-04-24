import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:max-w-md z-[1000]"
        >
          <div className="bg-brand-deep text-brand-white p-6 md:p-8 border border-white/10 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-accent mb-4 font-bold">
                  {t('cookies.banner.policy')}
                </h4>
                <p className="text-xs text-brand-white/60 leading-relaxed font-medium">
                  {t('cookies.banner.text')}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 items-center justify-between pt-2">
                <div className="flex gap-4">
                  <button
                    onClick={handleAccept}
                    className="text-[10px] font-mono uppercase tracking-widest bg-brand-accent text-brand-white px-6 py-3 hover:bg-brand-white hover:text-brand-deep transition-all duration-300 font-bold"
                  >
                    {t('cookies.banner.accept')}
                  </button>
                  <button
                    onClick={handleDecline}
                    className="text-[10px] font-mono uppercase tracking-widest border border-white/10 px-6 py-3 hover:bg-white/5 transition-all duration-300"
                  >
                    {t('cookies.banner.decline')}
                  </button>
                </div>
                <Link 
                  to="/trasparenza" 
                  className="text-[9px] font-mono uppercase tracking-widest text-brand-white/30 hover:text-brand-accent transition-colors"
                  onClick={() => setIsVisible(false)}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
