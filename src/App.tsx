/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import ServicesPage from "./pages/Services";
import AILab from "./pages/AILab";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import NewsDetail from "./pages/NewsDetail";
import News from "./pages/News";
import ProjectDetail from "./pages/ProjectDetail";
import Transparency from "./pages/Transparency";

import { LanguageProvider } from "./context/LanguageContext";
import { HelmetProvider } from "react-helmet-async";
import CookieBanner from "./components/CookieBanner";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const [showIntro, setShowIntro] = useState(true);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setShowIntro(false);
      document.body.style.overflow = "auto";
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-brand-accent selection:text-white">
      <CustomCursor />
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999999] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Background Image for Intro */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
                alt="Intro Background"
                className="w-full h-full object-cover opacity-20"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-black" />
            </div>
            <div className="relative overflow-hidden mb-8 z-10">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl font-bold text-brand-white tracking-tighter uppercase"
              >
                AITHRA
              </motion.h1>
            </div>
            <div className="w-48 h-px bg-brand-white/10 relative overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute inset-0 bg-brand-accent"
              />
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-[8px] font-mono uppercase tracking-[0.6em] text-brand-white/40"
            >
              Integrated Engineering Systems
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="noise-overlay" />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#0088D1] z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      <ScrollToTop />
      
      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/ai-lab" element={<AILab />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/trasparenza" element={<Transparency />} />
        </Routes>
      </AnimatePresence>

      <Footer />
      <CookieBanner />

      {/* Global Technical Elements */}
      <div className="fixed top-0 left-6 h-full w-px bg-brand-black/5 pointer-events-none hidden xl:block" />
      <div className="fixed top-0 right-6 h-full w-px bg-brand-black/5 pointer-events-none hidden xl:block" />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
