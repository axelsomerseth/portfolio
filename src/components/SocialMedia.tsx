import React from "react";
import GitHubLogo from "../assets/icons/github-logo.png";
import LinkedInLogo from "../assets/icons/linkedin-logo.png";
import { Trans, useTranslation } from "react-i18next";
import IconCard from "./IconCard";

const SocialMedia: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <section className="SocialMedia">
      <h2 className="section-header">
        <Trans i18nKey={"socialMedia.header"} t={t} />
      </h2>
      <div className="flex lg:flex-row justify-evenly items-center">
        <IconCard className="flex-initial w-1/5 lg:w-1/12">
          <a
            href={"https://www.linkedin.com/in/axelsomerseth/"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedInLogo} alt="Linkedin" loading="lazy" />
          </a>
        </IconCard>
        <IconCard className="flex-initial w-1/5 lg:w-1/12">
          <a
            href={"https://github.com/axelsomerseth/"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={GitHubLogo} alt="Github" loading="lazy" />
          </a>
        </IconCard>
      </div>
    </section>
  );
};

export default SocialMedia;
