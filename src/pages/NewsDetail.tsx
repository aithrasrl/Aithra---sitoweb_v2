import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  const newsData: Record<string, { title: string; desc: string; content: string; img: string }> = {
    "conto-termico": {
      title: t('home.news.item1.title'),
      desc: t('home.news.item1.desc'),
      content: t('news.conto-termico.content'),
      img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1200"
    },
    "ai-engineering": {
      title: t('home.news.item2.title'),
      desc: t('home.news.item2.desc'),
      content: t('news.ai-engineering.content'),
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200"
    },
    "smart-tools": {
      title: t('home.news.item3.title'),
      desc: t('home.news.item3.desc'),
      content: t('news.smart-tools.content'),
      img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80&w=1200"
    },
    "energy-transition": {
      title: t('home.news.item4.title'),
      desc: t('home.news.item4.desc'),
      content: t('news.energy-transition.content'),
      img: "/assets/windmill.jpg"
    },
    "milan-event-2026": {
      title: "MILANO ARCH WEEK 2026",
      desc: "L'integrazione dell'AI nella progettazione urbana sostenibile.",
      content: t('news.milan-arch-week.content'),
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
    },
    "aithra-story": {
      title: "AITHRA: THE GENESIS",
      desc: "Come siamo passati da studio di ingegneria tradizionale a hub di innovazione tecnologica.",
      content: t('news.aithra-genesis.content'),
      img: "/assets/13.png"
    }
  };

  const article = id ? newsData[id] : null;

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/" className="text-brand-accent hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-white min-h-screen pt-32 pb-24"
    >
      <SEO 
        title={`${article.title} | News | AITHRA`}
        description={`${article.desc}`}
        ogImage={article.img}
      />
      <div className="max-w-4xl mx-auto px-6">
        <Link 
          to="/news" 
          className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-accent mb-12 inline-block hover:text-brand-deep transition-colors"
        >
          ← Back to Latest News
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-accent mb-6 block font-bold">
            News & Insights
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-brand-deep uppercase mb-8 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-brand-black/60 italic mb-12 leading-relaxed">
            {article.desc}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="aspect-video overflow-hidden mb-16 border border-brand-black/5"
        >
          <img 
            src={article.img} 
            alt={article.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-lg text-brand-black/80 leading-relaxed whitespace-pre-line">
            {article.content}
          </p>
          
          <div className="mt-24 pt-12 border-t border-brand-black/10">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Share this article</h4>
            <div className="flex gap-4">
              {['LinkedIn', 'Twitter', 'Facebook'].map((social) => (
                <button 
                  key={social}
                  className="text-[10px] font-mono uppercase tracking-widest text-brand-black/40 hover:text-brand-accent transition-colors"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
