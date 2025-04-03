import React, { createContext, useState } from "react";
import { useTranslation } from "react-i18next";

import Header from "./components/plus/Header";
// import Banner from "./components/plus/Banner";
// import CallToAction from "./components/plus/CallToAction";
import FeaturedService from "./components/plus/FeaturedService";
// import CenteredGrid from "./components/plus/CenteredGrid";
// import BentoGrid from "./components/plus/BentoGrid";
// import FormSection from "./components/plus/FormSection";
// import Stats from "./components/plus/Stats";
// import LogoGrid from "./components/plus/LogoGrid";
// import Testimonials from "./components/plus/Testimonials";
// import FromTheBlog from "./components/plus/FromTheBlog";
import ScrollToTop from "./components/ScrollToTop";

export const LanguageContext = createContext("en");

const App: React.FC<{}> = () => {
  const { i18n } = useTranslation();
  const [language] = useState(i18n.resolvedLanguage || "en");

  return (
    <LanguageContext.Provider value={language}>
      {/* Navbar */}
      <Header />

      {/* Some important information */}
      {/* <Banner /> */}

      {/* About */}
      <FeaturedService />

      {/* See my last recent project (Like POS for example) */}
      {/* <CallToAction /> */}

      {/* Contact form */}
      {/* <FormSection /> */}

      {/* Skills section*/}

      {/* Uses section*/}

      {/* Projects section */}

      {/* Roles that I have been working in */}
      {/* <CenteredGrid /> */}

      {/* Examples of developed apps */}
      {/* <BentoGrid /> */}

      {/* TODO: not defined */}
      {/* <Stats /> */}

      {/* Work Experiences */}
      {/* <LogoGrid /> */}

      {/* Contact people for recommendations */}
      {/* <Testimonials /> */}

      {/* Latest 3 public repositories */}
      {/* <FromTheBlog /> */}

      <ScrollToTop />
    </LanguageContext.Provider>
  );
};

export default App;
