import React from "react";
import { Trans, useTranslation } from "react-i18next";
import Banner from "../components/plus/Banner";

const About: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <>
      <Banner />
      <h1 className="w-full flex justify-center items-center">
        <Trans i18nKey={"about.title"} t={t} />
      </h1>

      {/* TODO: upload some photos of me doing thing I like */}
    </>
  );
};

export default About;
