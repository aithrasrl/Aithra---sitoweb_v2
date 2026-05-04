import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-brand-white text-brand-deep pt-24 pb-12 border-t border-brand-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <img src="/assets/LOGO_AITHRA.png" alt="AITHRA Logo" className="h-10 w-auto" />
            </div>
            <p className="text-brand-black/40 text-xs leading-relaxed mb-10 max-w-xs font-medium">
              {t('footer.desc')}
            </p>
            <div className="flex gap-6 text-[10px] font-mono uppercase tracking-widest">
              <a href="#" className="text-brand-black/40 hover:text-brand-accent transition-colors">LI</a>
              <a href="#" className="text-brand-black/40 hover:text-brand-accent transition-colors">IG</a>
              <a href="#" className="text-brand-black/40 hover:text-brand-accent transition-colors">TW</a>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[9px] font-mono uppercase tracking-[0.4em] text-brand-black/20 mb-8">{t('footer.navigation')}</h4>
              <ul className="space-y-4 text-[10px] font-mono uppercase tracking-widest">
                <li><Link to="/projects" className="text-brand-black/60 hover:text-brand-accent">01. {t('nav.projects')}</Link></li>
                <li><Link to="/services" className="text-brand-black/60 hover:text-brand-accent">02. {t('nav.services')}</Link></li>
                <li><Link to="/ai-lab" className="text-brand-black/60 hover:text-brand-accent">03. {t('nav.ailab')}</Link></li>
                <li><Link to="/news" className="text-brand-black/60 hover:text-brand-accent">04. {t('nav.news')}</Link></li>
                <li><Link to="/about" className="text-brand-black/60 hover:text-brand-accent">05. {t('nav.about')}</Link></li>
                <li><Link to="/careers" className="text-brand-black/60 hover:text-brand-accent">06. {t('nav.careers')}</Link></li>
                <li><Link to="/contact" className="text-brand-black/60 hover:text-brand-accent">07. {t('nav.contact')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[9px] font-mono uppercase tracking-[0.4em] text-brand-black/20 mb-8">{t('footer.contact')}</h4>
              <ul className="space-y-4 text-[10px] font-mono tracking-widest uppercase">
                <li className="text-brand-black/60">
                  <span className="text-brand-black/20 mr-3">[E]</span>
                  info@aithra.it
                </li>
                {/* [T] +39 393 3293206 removed temporarily */}
                <li className="text-brand-black/60">
                  <span className="text-brand-black/20 mr-3">[A]</span>
                  Viale Col di Lana 8, 20136 Milano
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[9px] font-mono uppercase tracking-[0.4em] text-brand-black/20 mb-8">{t('footer.newsletter')}</h4>
              <p className="text-[9px] text-brand-black/30 mb-6 uppercase tracking-widest leading-relaxed">{t('footer.newsletter.desc')}</p>
              <div className="flex border-b border-brand-black/10 pb-2">
                <input 
                  type="email" 
                  placeholder="EMAIL_ADDRESS" 
                  className="bg-transparent border-none outline-none text-[10px] font-mono w-full placeholder:text-brand-black/10"
                />
                <button className="text-[10px] font-mono uppercase tracking-widest text-brand-accent">{t('footer.join')}</button>
              </div>
              <div className="mt-8">
                <Link 
                  to="/trasparenza" 
                  className="text-[9px] font-mono uppercase tracking-[0.3em] text-brand-black/20 hover:text-brand-accent transition-colors block"
                >
                  {t('footer.transparency')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-[7px] font-mono uppercase tracking-[0.5em] text-brand-black/10">
            {t('footer.allRights')}
          </span>
          <div className="flex gap-10 text-[7px] font-mono uppercase tracking-[0.5em] text-brand-black/10">
            <a href="#" className="hover:text-brand-deep">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-brand-deep">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
