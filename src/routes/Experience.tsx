import React from "react";
import Banner from "../components/plus/Banner";
import LogoGrid from "../components/plus/LogoGrid";
// import CenteredGrid from "../components/plus/CenteredGrid";
import Testimonials from "../components/plus/Testimonials";

const Experience: React.FC<{}> = () => {
  return (
    <>
      <Banner />
      <h1 className="w-full flex justify-center items-center">Experience</h1>

      {/* Roles that I have been working in */}
      <LogoGrid />

      {/* Roles that I have been working in */}
      {/* <CenteredGrid /> */}

      {/* Contact people for recommendations */}
      <Testimonials />
    </>
  );
};

export default Experience;
