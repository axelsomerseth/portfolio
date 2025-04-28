import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFreeCodeCamp,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaLinks: React.FC<{}> = () => {
  return (
    <div className="flex flex-row gap-8 justify-center items-center w-full theme py-4 sm:py-2">
      <a
        href="https://github.com/axelsomerseth"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="text-3xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/axelsomerseth/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
      </a>

      <a
        href="https://www.freecodecamp.org/axelsomerseth"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFreeCodeCamp} className="text-3xl" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
