import { motion } from "motion/react";
import Projects from "../components/Projects";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";

export default function ProjectsPage() {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO 
        title={t('seo.projects.title')}
        description={t('seo.projects.description')}
      />
      <Projects />
    </motion.div>
  );
}
