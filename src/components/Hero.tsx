import React from "react";
import WorkingFromAnywhere from "../assets/illustrations/working_from_anywhere.svg";
import { Trans } from "react-i18next";

const Hero: React.FC<{}> = () => {
  return (
    <section className="hero" id="about">
      <img src={WorkingFromAnywhere} alt="" />
      <div className="bio animate__animated animate__shakeX">
        <h2 className="bio-title">
          <Trans i18nKey={"hero.bioTitle"} />
        </h2>
        <p className="bio-text">
          <Trans i18nKey={"hero.bioText"} />
        </p>
      </div>
    </section>
  );
};

export default Hero;
