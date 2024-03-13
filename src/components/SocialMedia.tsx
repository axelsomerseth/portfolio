import React from "react";
import GitHubLogo from "../assets/icons/github-mark.png";
import LinkedInLogo from "../assets/icons/LI-In-Bug.png";

const SocialMedia: React.FC<{}> = () => {
  return (
    <div className="social-media">
      <a
        href={"https://www.linkedin.com/in/axelsomerseth/"}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={LinkedInLogo}
          alt="Linkedin"
          loading="lazy"
          className="socicon"
        />
      </a>
      <a
        href={"https://github.com/axelsomerseth/"}
        target="_blank"
        rel="noreferrer"
      >
        <img src={GitHubLogo} alt="Github" className="socicon" />
      </a>
    </div>
  );
};

export default SocialMedia;
