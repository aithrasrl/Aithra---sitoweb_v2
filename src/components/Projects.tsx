import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ghgMain from "../assets/2605_GHG9.jpg";
import quilicoMain from "../assets/2608_PC1.png";
import monzaMain from "../assets/2608_CSG01.png";

export default function Projects() {
  const { t, language } = useLanguage();
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({
    year: "All",
    type: "All",
    area: "All",
    country: "All",
    amount: "All",
    services: "All"
  });

  const projects = [
    {
      id: "gardone",
      title: t('project.gardone.title'),
      category: t('project.gardone.category'),
      image: ghgMain,
      year: "2025",
      type: "Hospitality",
      area: 10000,
      areaDisplay: "10,000 sqm",
      country: "Italy",
      location: "Gardone Riviera",
      amount: 8000000,
      amountDisplay: "€8M",
      services: t('project.gardone.services')
    },
    {
      id: "quilico",
      title: t('project.quilico.title'),
      category: t('project.quilico.category'),
      image: quilicoMain,
      year: "2026",
      type: "Public",
      area: 1500,
      areaDisplay: "1,500 sqm",
      country: "Italy",
      location: "Pavone Canavese",
      amount: 1500000,
      amountDisplay: "€1.5M",
      services: t('project.quilico.services')
    },
    {
      id: "monza",
      title: t('project.monza.title'),
      category: t('project.monza.category'),
      image: monzaMain,
      year: "2026",
      type: "Residential",
      area: 750,
      areaDisplay: "750 sqm",
      country: "Italy",
      location: "Monza",
      amount: 150000,
      amountDisplay: "€150k",
      services: t('project.monza.services')
    }
  ];

  const filterOptions = {
    year: ["All", "2025", "2026"],
    type: ["All", "Hospitality", "Public", "Residential"],
    area: ["All", "range1", "range2", "range3", "range4"],
    country: ["All", "Italy", "USA", "France", "Germany", "UK", "Spain", "Switzerland", "UAE"],
    amount: ["All", "range1", "range2", "range3", "range4"],
    services: ["All", t('filter.service.pm'), t('filter.service.energy'), t('filter.service.architecture'), t('filter.service.structures')]
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((p: any) => {
      return (Object.entries(activeFilters) as [string, string][]).every(([key, value]) => {
        if (value === "All") return true;
        
        if (key === "services") return (p.services as string).includes(value);

        if (key === "area") {
          if (value === "range1") return p.area < 500;
          if (value === "range2") return p.area >= 500 && p.area <= 2000;
          if (value === "range3") return p.area > 2000 && p.area <= 5000;
          if (value === "range4") return p.area > 5000;
        }

        if (key === "amount") {
          if (value === "range1") return p.amount < 500000;
          if (value === "range2") return p.amount >= 500000 && p.amount <= 2000000;
          if (value === "range3") return p.amount > 2000000 && p.amount <= 10000000;
          if (value === "range4") return p.amount > 10000000;
        }

        return p[key] === value;
      });
    });
  }, [activeFilters, projects]);

  const handleFilterChange = (key: string, value: string) => {
    setActiveFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <section id="projects" className="bg-brand-white">
      {/* Header */}
      <div className="py-32 bg-brand-deep relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-accent mb-8 block font-bold">
            {t('projects.selected')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-[0.85] tracking-tighter text-brand-white uppercase max-w-4xl">
            {t('projects.title')} <br />
            <span className="text-brand-white/20">{t('projects.subtitle')}</span>
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Filters Bar */}
        <div className="mb-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-y border-brand-black/5 py-10">
          {Object.entries(filterOptions).map(([key, options]) => (
            <div key={key} className="flex flex-col gap-3">
              <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-black/40 font-bold">
                {t(`projects.filter.${key}`)}
              </label>
              <select 
                value={activeFilters[key]}
                onChange={(e) => handleFilterChange(key, e.target.value)}
                className="text-[11px] font-bold uppercase tracking-tighter bg-transparent border-none focus:ring-0 cursor-pointer hover:text-brand-accent transition-colors p-0 appearance-none"
              >
                {options.map(opt => (
                  <option key={opt} value={opt} className="bg-brand-white text-brand-black uppercase">
                    {opt === 'All' ? t('filter.all') : 
                     (key === 'area' || key === 'amount') ? t(`filter.${key}.${opt}`) :
                     key === 'country' ? t(`filter.country.${opt.toLowerCase()}`) :
                     opt === 'Hospitality' ? t('filter.type.hospitality') : 
                     opt === 'Public' ? t('filter.type.public') : 
                     opt === 'Residential' ? t('filter.type.residential') : opt}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: any) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer relative"
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="absolute top-4 right-4 bg-brand-white/90 backdrop-blur px-3 py-1 text-[10px] font-mono z-10">
                      {project.year}
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                      <h3 className="text-xl font-bold uppercase tracking-tight mb-1 text-brand-white">{project.title}</h3>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-brand-white/70">
                        {project.category}
                      </p>
                      <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-[8px] font-mono text-brand-white/40 uppercase">{project.location}</span>
                        <span className="text-[8px] font-mono text-brand-white/40 uppercase">{project.amountDisplay}</span>
                        <span className="text-[8px] font-mono text-brand-white/40 uppercase">{project.areaDisplay}</span>
                      </div>
                    </div>

                    <div className="absolute bottom-6 right-6 w-10 h-10 border border-brand-white/20 flex items-center justify-center text-brand-white opacity-40 group-hover:opacity-100 group-hover:bg-brand-white group-hover:text-brand-black transition-all duration-500 z-10">
                      →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-sm font-mono uppercase tracking-widest text-brand-black/30">{t('projects.noResults')}</p>
          </div>
        )}

        <div className="mt-20 text-center">
          <button className="px-12 py-4 border border-brand-black text-xs font-mono uppercase tracking-[0.3em] hover:bg-brand-black hover:text-brand-white transition-all">
            {t('projects.viewAll')}
          </button>
        </div>
      </div>
    </section>
  );
}
