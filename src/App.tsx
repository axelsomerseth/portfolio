import React, { createContext, useState } from "react";
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

export const LanguageContext = createContext("en");

const App: React.FC<{}> = () => {
  const { i18n } = useTranslation();
  const [language] = useState(i18n.resolvedLanguage || "en");

  return (
    <LanguageContext.Provider value={language}>
      <div className="w-full">
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
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
