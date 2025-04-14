import React from "react";
import WorkingFromAnywhere from "../assets/illustrations/working_from_anywhere.svg";
import { Trans, useTranslation } from "react-i18next";

/**
 * Renders the Hero section with an image and bio text.
 *
 * @return {JSX.Element} The JSX element representing the Hero section.
 */
const Hero: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <section className="Hero" id="about">
      <div className="flex-initial lg:w-7/12 pb-3">
        <img src={WorkingFromAnywhere} alt="" className="w-full lg:w-10/12" />
      </div>
      <div className="flex-initial lg:w-5/12">
        <div className="flex w-full h-full justify-center items-center p-10">
          <div className="flex-initial p-5 rounded-lg border border-gray-500 shadow-lg shadow-slate-500">
            <div className="text-center">
              <h2 className="text-2xl pb-3">
                <Trans i18nKey={"hero.bioTitle"} t={t} />
              </h2>
              <p className="text-wrap">
                <Trans i18nKey={"hero.bioText"} t={t} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
