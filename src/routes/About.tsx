import React from "react";
import { Trans, useTranslation } from "react-i18next";
import Banner from "../components/plus/Banner";

const About: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <>
      <Banner />
      <h1 className="w-full h-svh flex justify-center items-center">
        <Trans i18nKey={"about.title"} t={t} />
      </h1>
    </>
  );
};

export default About;
