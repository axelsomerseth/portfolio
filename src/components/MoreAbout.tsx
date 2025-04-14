import React from "react";
import { Trans, useTranslation } from "react-i18next";

/**
 * Renders a section component displaying more information.
 *
 * @return {React.JSX.Element} The rendered section component
 */
const MoreAbout: React.FC<{}> = () => {
  const { t } = useTranslation();
  return (
    <section className="MoreAbout">
      <h2 className="section-header">
        <Trans i18nKey={"moreAbout.title"} t={t} />
      </h2>
      <p>
        <Trans i18nKey={"moreAbout.p1"} t={t} />
      </p>
      <p>
        <Trans i18nKey={"moreAbout.p2"} t={t} />
      </p>
      <p>
        <Trans i18nKey={"moreAbout.p3"} t={t} />
      </p>
    </section>
  );
};

export default MoreAbout;
