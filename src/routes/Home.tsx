import React from "react";

// import Header from "../components/plus/Header";
// import Banner from "../components/plus/Banner";
// import CallToAction from "../components/plus/CallToAction";
import FeaturedService from "../components/plus/FeaturedService";
// import CenteredGrid from "../components/plus/CenteredGrid";
// import BentoGrid from "../components/plus/BentoGrid";
import FormSection from "../components/plus/FormSection";
// import Stats from "../components/plus/Stats";
// import LogoGrid from "../components/plus/LogoGrid";
// import Testimonials from "../components/plus/Testimonials";
// import FromTheBlog from "../components/plus/FromTheBlog";
import PhotoGrid from "../components/plus/PhotoGrid";
// import ScrollToTop from "../components/ScrollToTop";

const Home: React.FC<{}> = () => {
  return (
    <>
      {/* Some important information */}
      {/* <Banner /> */}

      {/* About */}
      <FeaturedService />

      {/* PhotoGrid */}
      <PhotoGrid />

      {/* See my last recent project (Like POS for example) */}
      {/* <CallToAction /> */}

      {/* Contact form */}
      <FormSection />

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
    </>
  );
};

export default Home;
