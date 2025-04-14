import React from "react";
import { Trans, useTranslation } from "react-i18next";

const About: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>
        <Trans i18nKey={"about.title"} t={t} />
      </h1>
    </>
  );
};

export default About;
