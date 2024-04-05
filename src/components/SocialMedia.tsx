import React from "react";
import GitHubLogo from "../assets/icons/github-logo.png";
import LinkedInLogo from "../assets/icons/linkedin-logo.png";
import { Trans } from "react-i18next";

const SocialMedia: React.FC<{}> = () => {
  return (
    <section className="SocialMedia">
      <h2 className="section-header">
        <Trans i18nKey={"socialMedia.header"} />
      </h2>
      <div className="flex lg:flex-row justify-evenly items-center">
        {/* TODO: extract SocialMediaCard into a separate component */}
        <div className="flex-initial IconCard w-1/5 lg:w-1/12">
          <a
            href={"https://www.linkedin.com/in/axelsomerseth/"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedInLogo} alt="Linkedin" loading="lazy" />
          </a>
        </div>
        <div className="flex-initial IconCard w-1/5 lg:w-1/12">
          <a
            href={"https://github.com/axelsomerseth/"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={GitHubLogo} alt="Github" loading="lazy" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
