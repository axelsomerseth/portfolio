import React from "react";
import Banner from "../components/plus/Banner";
// import BentoGrid from "../components/plus/BentoGrid";
// import CallToAction from "../components/plus/CallToAction";

const Projects: React.FC<{}> = () => {
  return (
    <>
      <Banner />

      <h1 className="w-full flex justify-center items-center">
        Projects that I have worked on
      </h1>

      {/* Examples of developed apps */}
      {/* <BentoGrid /> */}

      {/* See my last recent project (Like POS for example) */}
      {/* <CallToAction /> */}
    </>
  );
};

export default Projects;
