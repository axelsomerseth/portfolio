import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import Banner from "../components/plus/Banner";
import { QuestionMarkCircleIcon } from "@heroicons/react/16/solid";

const About: React.FC<{}> = () => {
  const { t } = useTranslation();
  const [position, setPosition] = useState({ top: "40%", left: "40%" });

  const handleMouseHover = () => {
    const newTop = Math.floor(Math.random() * 80) + "%";
    const newLeft = Math.floor(Math.random() * 80) + "%";
    setPosition({ top: newTop, left: newLeft });
  };

  const onClick = () => {
    alert(t("about.funnyAlert"));
  };

  return (
    <>
      <Banner />
      <h1 className="w-full flex justify-center items-center">
        <Trans i18nKey={"about.title"} t={t} />
      </h1>
      <div className="w-lvw h-lvh">
        <div className="w-full h-full relative">
          <button
            id="funny-button"
            style={{
              top: position.top,
              left: position.left,
              transition: "top 0.1s, left 0.1s",
            }}
            onMouseOver={handleMouseHover}
            onTouchStart={handleMouseHover}
            onClick={onClick}
            className="relative rounded-md bg-primary px-3.5 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/80"
          >
            <div className="flex w-full h-full justify-center items-center gap-2">
              <QuestionMarkCircleIcon className="size-4" />
              <Trans t={t} i18nKey={"about.funnyButton"} />
            </div>
          </button>
        </div>
      </div>

      {/* TODO: upload some photos of me doing thing I like */}
    </>
  );
};

export default About;
