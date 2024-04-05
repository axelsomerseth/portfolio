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
      <Navbar />
      <main className="w-full flex flex-col items-center p-1">
        <div className="flex-initial">
          <Hero />
        </div>
        <div className="flex-initial">
          <MoreAbout />
        </div>
        <div className="flex-initial lg:w-full">
          <Skills />
        </div>
        <div className="flex-initial">
          <Projects />
        </div>
        <div className="flex-initial">
          <Contact />
        </div>
        <div className="flex-initial lg:w-5/6">
          <SocialMedia />
        </div>
        <div className="flex-initial w-full">
          <Footer />
        </div>
      </main>
      <ScrollToTop />
    </LanguageContext.Provider>
  );
};

export default App;
