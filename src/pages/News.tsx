import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";

type NewsCategory = 'all' | 'article' | 'publication' | 'event' | 'story';

interface NewsItem {
  id: string;
  category: NewsCategory;
  title: string;
  date: string;
  desc: string;
  img: string;
  link: string;
}

export default function News() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<NewsCategory>('all');

  const newsItems: NewsItem[] = [
    {
      id: "conto-termico",
      category: 'article',
      title: t('home.news.item1.title'),
      date: "2026.03.15",
      desc: t('home.news.item1.desc'),
      img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800",
      link: "/news/conto-termico"
    },
    {
      id: "ai-engineering",
      category: 'article',
      title: t('home.news.item2.title'),
      date: "2026.02.28",
      desc: t('home.news.item2.desc'),
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      link: "/news/ai-engineering"
    },
    {
      id: "smart-tools",
      category: 'article',
      title: t('home.news.item3.title'),
      date: "2026.01.12",
      desc: t('home.news.item3.desc'),
      img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80&w=800",
      link: "/news/smart-tools"
    },
    {
      id: "energy-transition",
      category: 'article',
      title: t('home.news.item4.title'),
      date: "2026.04.10",
      desc: t('home.news.item4.desc'),
      img: "/assets/windmill.jpg",
      link: "/news/energy-transition"
    },
    {
      id: "milan-event-2026",
      category: 'article',
      title: "MILANO ARCH WEEK 2026",
      date: "2026.04.25",
      desc: "Il nostro intervento sull'integrazione dell'AI nella progettazione urbana sostenibile.",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      link: "/news/milan-event-2026"
    },
    {
      id: "aithra-story",
      category: 'story',
      title: "AITHRA: THE GENESIS",
      date: "2026.01.20",
      desc: "Come siamo passati da studio di ingegneria tradizionale a hub di innovazione tecnologica.",
      img: "/assets/13.png",
      link: "/news/aithra-story"
    }
  ];

  const filteredItems = filter === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === filter);

  const filters: { id: NewsCategory; label: string }[] = [
    { id: 'all', label: t('news.filter.all') },
    { id: 'article', label: t('news.filter.articles') },
    { id: 'publication', label: t('news.filter.publications') },
    { id: 'event', label: t('news.filter.events') },
    { id: 'story', label: t('news.filter.stories') },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-white min-h-screen pt-20 pb-24"
    >
      <SEO 
        title={t('seo.news.title')}
        description={t('seo.news.description')}
      />
      <div className="bg-brand-deep text-brand-white py-32 relative overflow-hidden mb-16">
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-accent mb-8 block font-bold">
            Archive
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">
            {t('news.archive.title')}
          </h1>
          <p className="mt-8 text-sm text-brand-white/40 font-mono uppercase tracking-widest mb-16">
            {t('news.archive.subtitle')}
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 border-b border-brand-white/10 pb-8">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`text-[10px] font-mono uppercase tracking-widest px-6 py-2 border transition-all ${
                  filter === f.id 
                    ? 'bg-brand-accent text-brand-white border-brand-accent' 
                    : 'bg-transparent text-brand-white/40 border-brand-white/10 hover:border-brand-accent hover:text-brand-accent'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <Link to={item.link} className="block">
                <div className="aspect-video overflow-hidden mb-6 border border-brand-black/5 relative">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-brand-white/90 backdrop-blur-sm px-3 py-1 text-[8px] font-mono uppercase tracking-widest text-brand-deep font-bold">
                    {item.category}
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono text-brand-accent font-bold">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-brand-deep mb-3 group-hover:text-brand-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-black/40 font-normal leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
                <div className="mt-6 pt-6 border-t border-brand-black/5 flex justify-between items-center">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Read More —&gt;
                  </span>
                  <div className="w-8 h-px bg-brand-black/10 group-hover:w-12 group-hover:bg-brand-accent transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
