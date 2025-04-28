import React from "react";

import Banner from "../components/plus/Banner";
import FeaturedService from "../components/plus/FeaturedService";
import FormSection from "../components/plus/FormSection";
import PhotoGrid from "../components/plus/PhotoGrid";
import Stats from "../components/plus/Stats";
import SocialMediaLinks from "../components/plus/SocialMediaLinks";
// import FromTheBlog from "../components/plus/FromTheBlog";

const Home: React.FC<{}> = () => {
  return (
    <>
      <Banner />

      {/* About */}
      <FeaturedService />

      {/* PhotoGrid */}
      <PhotoGrid />

      {/* Contact form */}
      <FormSection />

      <Stats />

      <SocialMediaLinks />

      {/* Skills section*/}

      {/* TODO: I have to find out what can i put here in this section: any ideas? */}
      {/* <FromTheBlog /> */}
    </>
  );
};

export default Home;
