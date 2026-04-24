import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SEO from "../components/SEO";

// Gardone Images
import ghg1 from "../assets/2605_GHG1.png";
import ghg2 from "../assets/2605_GHG2.png";
import ghg3 from "../assets/2605_GHG3.png";
import ghg4 from "../assets/2605_GHG4.png";
import ghg5 from "../assets/2605_GHG5.jpg";
import ghg6 from "../assets/2605_GHG6.jpg";
import ghg7 from "../assets/2605_GHG7.jpg";
import ghg8 from "../assets/2605_GHG8.jpg";
import ghg9 from "../assets/2605_GHG9.jpg";

// Quilico Images
import pc1 from "../assets/2608_PC1.png";
import pc2 from "../assets/2608_PC2.png";
import pc3 from "../assets/2608_PC3.png";

// Cascina San Giuseppe Images
import csg1 from "../assets/2608_CSG01.png";
import csg2 from "../assets/2608_CSG02.png";
import csg3 from "../assets/2608_CSG03.png";
import csg4 from "../assets/2608_CSG04.png";

const ghgAssets = {
  ghg1: ghg1,
  ghg2: ghg2,
  ghg3: ghg3,
  ghg4: ghg4,
  ghg5: ghg5,
  ghg6: ghg6,
  ghg7: ghg7,
  ghg8: ghg8,
  ghg9: ghg9
};

export default function ProjectDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const projects = [
    {
      id: "gardone",
      title: t('project.gardone.title'),
      location: t('project.gardone.location'),
      category: t('project.gardone.category'),
      image: ghgAssets.ghg9,
      images: [ghgAssets.ghg1, ghgAssets.ghg2],
      gallery: [ghgAssets.ghg3, ghgAssets.ghg4, ghgAssets.ghg5, ghgAssets.ghg7, ghgAssets.ghg6, ghgAssets.ghg8, ghgAssets.ghg9],
      strips: {
        cantiere: [ghgAssets.ghg1, ghgAssets.ghg2, ghgAssets.ghg3, ghgAssets.ghg4],
        evoluzione: [ghgAssets.ghg5, ghgAssets.ghg7, ghgAssets.ghg6, ghgAssets.ghg8, ghgAssets.ghg9]
      },
      client: "Racco Spa",
      services: t('project.gardone.services'),
      duration: t('project.gardone.duration'),
      value: t('project.gardone.value'),
      area: "10,000 sqm",
      country: "Italy",
      introduction: t('project.gardone.desc'),
      challenge: t('project.gardone.challenge'),
      solution: t('project.gardone.solution'),
      outcome: t('project.gardone.outcome')
    },
    {
      id: "quilico",
      title: t('project.quilico.title'),
      location: t('project.quilico.location'),
      category: t('project.quilico.category'),
      image: pc1,
      images: [pc2, pc3],
      gallery: [pc1, pc2, pc3],
      strips: {
        evoluzione: [pc1, pc2, pc3]
      },
      client: "Comune di Pavone Canavese",
      services: t('project.quilico.services'),
      duration: t('project.quilico.duration'),
      value: "€1.5M",
      area: "1,500 sqm",
      country: "Italy",
      introduction: t('project.quilico.desc'),
      challenge: t('project.quilico.challenge'),
      solution: t('project.quilico.solution'),
      outcome: t('project.quilico.outcome')
    },
    {
      id: "monza",
      title: t('project.monza.title'),
      location: t('project.monza.location'),
      category: t('project.monza.category'),
      image: csg1,
      images: [csg2, csg3],
      gallery: [csg1, csg2, csg3, csg4],
      strips: {
        evoluzione: [csg1, csg2, csg3, csg4]
      },
      client: "Condominio Cascina San Giuseppe",
      services: t('project.monza.services'),
      duration: t('project.monza.duration'),
      value: "€150k",
      area: "750 sqm",
      country: "Italy",
      introduction: t('project.monza.desc'),
      challenge: t('project.monza.challenge'),
      solution: t('project.monza.solution'),
      outcome: t('project.monza.outcome')
    }
  ];

  const project = projects.find(p => p.id === id);
  
  // Combine all images into a single array for navigation
  const allImages = project 
    ? [project.image, ...project.images, ...project.gallery]
    : [];

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % allImages.length);
  }, [selectedImageIndex, allImages.length]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + allImages.length) % allImages.length);
  }, [selectedImageIndex, allImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedImageIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, handleNext, handlePrev]);

  const cantiereRef = useRef<HTMLDivElement>(null);
  const evoluzioneRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = 400;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (!project) return (
    <div className="pt-40 text-center py-20 bg-brand-white min-h-screen">
      <h1 className="text-2xl font-bold uppercase mb-8">Project Not Found</h1>
      <Link to="/projects" className="text-brand-accent font-mono text-xs uppercase tracking-widest">Back to Projects</Link>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-white"
    >
      <SEO 
        title={`${project.title} | ${project.category} | AITHRA`}
        description={`${project.introduction.substring(0, 160)}...`}
        ogImage={project.image}
      />
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button 
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors z-[110]"
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all hover:scale-110 z-[110]"
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all hover:scale-110 z-[110]"
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={allImages[selectedImageIndex]} 
                alt="Selected view" 
                className="max-w-full max-h-full object-contain pointer-events-none select-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-2">
                {allImages.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 transition-all duration-300 ${i === selectedImageIndex ? 'w-8 bg-brand-accent' : 'w-2 bg-white/20'}`} 
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden group cursor-zoom-in" onClick={() => setSelectedImageIndex(0)}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-deep/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full relative">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <Link 
                to="/projects" 
                className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-accent mb-8 inline-block hover:translate-x-2 transition-transform"
                onClick={(e) => e.stopPropagation()}
              >
                ← {t('project.back')}
              </Link>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-brand-white uppercase leading-[0.8] mb-8">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-8 items-center text-brand-white/60 font-mono text-[10px] uppercase tracking-widest">
                <span>{project.location}</span>
                <div className="w-1 h-1 bg-brand-accent rounded-full" />
                <span>{project.category}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-brand-deep py-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className="text-[9px] font-mono uppercase tracking-widest text-brand-white/40 block mb-2">{t('project.label.client')}</span>
              <span className="text-xs font-bold text-brand-white uppercase">{project.client}</span>
            </div>
            <div>
              <span className="text-[9px] font-mono uppercase tracking-widest text-brand-white/40 block mb-2">{t('project.label.area')}</span>
              <span className="text-xs font-bold text-brand-white uppercase">{project.area}</span>
            </div>
            <div>
              <span className="text-[9px] font-mono uppercase tracking-widest text-brand-white/40 block mb-2">{t('project.label.duration')}</span>
              <span className="text-xs font-bold text-brand-white uppercase">{project.duration}</span>
            </div>
            <div>
              <span className="text-[9px] font-mono uppercase tracking-widest text-brand-white/40 block mb-2">{t('project.label.value')}</span>
              <span className="text-xs font-bold text-brand-white uppercase">{project.value}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Main Text Content */}
            <div className="lg:col-span-7">
              <div className="prose prose-brand max-w-none">
                <p className="text-xl md:text-2xl font-normal text-brand-deep leading-relaxed mb-16 italic text-balance">
                  {project.introduction}
                </p>

                <div className="space-y-20">
                  <div>
                    <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-accent mb-8 font-bold">{t('project.heading.challenge')}</h2>
                    <p className="text-base text-brand-black/60 leading-relaxed font-normal">
                      {project.challenge}
                    </p>
                  </div>

                  {project.strips?.cantiere && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-brand-accent font-bold">Cantiere</span>
                        <div className="flex gap-4">
                          <button 
                            onClick={() => scroll(cantiereRef, 'left')}
                            className="w-8 h-8 rounded-full border border-brand-black/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-white transition-all transition-colors"
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={16} />
                          </button>
                          <button 
                            onClick={() => scroll(cantiereRef, 'right')}
                            className="w-8 h-8 rounded-full border border-brand-black/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-white transition-all transition-colors"
                            aria-label="Next image"
                          >
                            <ChevronRight size={16} />
                          </button>
                        </div>
                      </div>
                      <div 
                        ref={cantiereRef}
                        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-4 -mx-6 px-6"
                      >
                        {project.strips.cantiere.map((img, i) => (
                           <div 
                            key={i} 
                            className="w-[70vw] md:w-[400px] shrink-0 aspect-[4/3] bg-brand-black/5 overflow-hidden transition-all duration-700 cursor-zoom-in group"
                            onClick={() => setSelectedImageIndex(allImages.indexOf(img))}
                          >
                            <img src={img} alt={`Cantiere ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-accent mb-8 font-bold">{t('project.heading.solution')}</h2>
                    <p className="text-base text-brand-black/60 leading-relaxed font-normal">
                      {project.solution}
                    </p>
                  </div>

                  {project.strips?.evoluzione && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-brand-accent font-bold">Evoluzione</span>
                        <div className="flex gap-4">
                          <button 
                            onClick={() => scroll(evoluzioneRef, 'left')}
                            className="w-8 h-8 rounded-full border border-brand-black/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-white transition-all transition-colors"
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={16} />
                          </button>
                          <button 
                            onClick={() => scroll(evoluzioneRef, 'right')}
                            className="w-8 h-8 rounded-full border border-brand-black/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-white transition-all transition-colors"
                            aria-label="Next image"
                          >
                            <ChevronRight size={16} />
                          </button>
                        </div>
                      </div>
                      <div 
                        ref={evoluzioneRef}
                        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-4 -mx-6 px-6"
                      >
                        {project.strips.evoluzione.map((img, i) => (
                           <div 
                            key={i} 
                            className="w-[70vw] md:w-[400px] shrink-0 aspect-[4/3] bg-brand-black/5 overflow-hidden transition-all duration-700 cursor-zoom-in group"
                            onClick={() => setSelectedImageIndex(allImages.indexOf(img))}
                          >
                            <img src={img} alt={`Evoluzione ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-accent mb-8 font-bold">{t('project.heading.outcome')}</h2>
                    <p className="text-base text-brand-black/60 leading-relaxed font-normal text-balance">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="sticky top-32 space-y-12">
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-brand-deep mb-6 font-bold">{t('project.heading.services')}</h4>
                  <ul className="space-y-4">
                    {project.services.split(', ').map((service, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-tight text-brand-deep">
                        <div className="w-1.5 h-1.5 bg-brand-accent rotate-45" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 bg-brand-deep text-brand-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full -translate-y-16 translate-x-16 blur-3xl group-hover:bg-brand-accent/20 transition-all duration-500" />
                  <h4 className="text-[9px] font-mono uppercase tracking-widest text-brand-accent mb-6 font-bold relative z-10">{t('project.heading.technical')}</h4>
                  <p className="text-xs leading-relaxed text-brand-white/60 mb-8 relative z-10">
                    {t('project.technical.desc')}
                  </p>
                  <Link to="/contact" className="text-[10px] font-mono uppercase tracking-widest border-b border-brand-accent font-bold relative z-10 hover:text-brand-accent transition-colors pb-1">
                    {t('project.button.enquire')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Other Projects */}
      <section className="py-24 bg-brand-white border-t border-brand-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[10px] font-mono uppercase tracking-[0.6em] text-brand-accent mb-12 block font-bold text-center">{t('projects.selected')}</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => p.id !== id).map((otherProject) => (
              <Link 
                key={otherProject.id}
                to={`/projects/${otherProject.id}`}
                className="group relative block aspect-[21/9] overflow-hidden bg-brand-deep"
              >
                <img 
                  src={otherProject.image} 
                  alt={otherProject.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <span className="text-[8px] font-mono uppercase tracking-[0.4em] text-brand-accent mb-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {t('project.viewCase')}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-brand-white uppercase tracking-tighter leading-none group-hover:text-brand-accent transition-colors duration-500">
                    {otherProject.title}
                  </h3>
                  <div className="mt-4 w-12 h-px bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
