import React from "react";
import { Trans } from "react-i18next";

/**
 * Renders a section component displaying more information.
 *
 * @return {React.JSX.Element} The rendered section component
 */
const MoreAbout: React.FC<{}> = () => {
  return (
    <section className="MoreAbout">
      <h2 className="section-header">
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
