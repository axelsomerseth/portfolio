import React from "react";
import WorkingFromAnywhere from "../assets/illustrations/working_from_anywhere.svg";
import { Trans } from "react-i18next";

const Hero: React.FC<{}> = () => {
  return (
    <section className="Hero" id="about">
      <div className="flex flex-row">
        <div className="flex-initial lg:w-7/12">
          <img src={WorkingFromAnywhere} alt="" />
        </div>
        <div className="flex-initial lg:w-5/12">
          <div className="flex w-full h-full justify-center items-center">
            <div className="flex-initial lg:w-1/2 lg:h-2/5 p-5 rounded-lg shadow-lg shadow-slate-400">
              <div className="text-center">
                <h2 className="bio-title">
                  <Trans i18nKey={"hero.bioTitle"} />
                </h2>
                <p className="bio-text">
                  <Trans i18nKey={"hero.bioText"} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
