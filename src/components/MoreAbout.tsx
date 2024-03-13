import React from "react";
import { Trans } from "react-i18next";

const MoreAbout: React.FC<{}> = () => {
  return (
    <section className="more-about">
      <h2>
        <Trans i18nKey={"moreAbout.title"} />
      </h2>
      <p>
        <Trans i18nKey={"moreAbout.p1"} />
      </p>
      <p>
        <Trans i18nKey={"moreAbout.p2"} />
      </p>
      <p>
        <Trans i18nKey={"moreAbout.p3"} />
      </p>
    </section>
  );
};

export default MoreAbout;
