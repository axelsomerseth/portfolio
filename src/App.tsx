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
import Separator from "./components/Separator";

export const LanguageContext = createContext("en");

const App: React.FC<{}> = () => {
  const { i18n } = useTranslation();
  const [language] = useState(i18n.resolvedLanguage || "en");

  return (
    <LanguageContext.Provider value={language}>
      <Navbar />
      <main className="w-full flex flex-col items-center lg:pl-16 lg:pr-16 pl-2 pr-2">
        <Separator />
        <div className="flex-initial">
          <Hero />
        </div>

        <Separator />
        <div className="flex-initial">
          <MoreAbout />
        </div>

        <Separator />
        <div className="flex-initial lg:w-full">
          <Skills />
        </div>

        <Separator />
        <div className="flex-initial">
          <Projects />
        </div>

        <Separator />
        <div className="flex-initial">
          <Contact />
        </div>

        <Separator />
        <div className="flex-initial lg:w-5/6">
          <SocialMedia />
        </div>

        <Separator />
        <div className="flex-initial w-full">
          <Footer />
        </div>
      </main>
      <ScrollToTop />
    </LanguageContext.Provider>
  );
};

export default App;
