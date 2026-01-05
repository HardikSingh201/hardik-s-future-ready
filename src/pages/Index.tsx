import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Hardik K. Singh | CSE Student & Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Hardik K. Singh - B.Tech CSE student at VIT specializing in Data Analytics, Web Development, AI & Machine Learning. View projects and connect."
        />
        <meta name="keywords" content="Hardik Singh, CSE student, VIT, web developer, AI, machine learning, data analytics, portfolio" />
        <meta name="author" content="Hardik K. Singh" />
        <link rel="canonical" href="https://hardiksingh.dev" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Hardik K. Singh | Developer Portfolio" />
        <meta property="og:description" content="B.Tech CSE student specializing in Data Analytics, Web Development, AI & Machine Learning." />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hardik K. Singh | Developer Portfolio" />
        <meta name="twitter:description" content="B.Tech CSE student specializing in Data Analytics, Web Development, AI & Machine Learning." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
