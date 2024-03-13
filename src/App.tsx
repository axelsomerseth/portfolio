import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MoreAbout from "./components/MoreAbout";
import Skills from "./components/Skills";
import SocialMedia from "./components/SocialMedia";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";

const App: React.FC<{}> = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <>
      <LanguageSwitcher
        currentLanguage={currentLanguage}
        handleLanguage={handleLanguage}
      />

      {/* <!-- Navbar --> */}
      <Navbar />

      {/* <!-- Hero Section --> */}
      <Hero />

      {/* <!-- More about --> */}
      <MoreAbout />

      {/* <!-- Skills section --> */}
      <Skills />

      {/* <!-- Projects section --> */}
      <Projects />

      {/* <!-- Contact section --> */}
      <Contact />

      {/* <!-- Social Media accounts --> */}
      <SocialMedia />

      {/* <!-- Scroll to top --> */}
      <ScrollToTop />

      {/* <!-- Footer section --> */}
      <Footer />
    </>
  );
};

export default App;
