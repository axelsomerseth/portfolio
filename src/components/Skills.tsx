import React from "react";
import { Trans } from "react-i18next";
import reactLogo from "./../assets/icons/react-logo.png";
import nodeLogo from "./../assets/icons/node-logo.png";
import typescriptLogo from "./../assets/icons/typescript-logo.png";
import awsLogo from "./../assets/icons/aws-logo.png";
import gitLogo from "./../assets/icons/git-logo.png";
import postgresqlLogo from "./../assets/icons/postgresql-logo.png";

const Skills: React.FC<{}> = () => {
  return (
    <section className="Skills">
      <h2 className="section-header">
        <Trans i18nKey={"skills.header"} />
      </h2>

      {/* TODO: extract skill into a separate component */}
      <div className="flex lg:flex-row justify-around">
        <div className="flex-initial IconCard">
          <img src={reactLogo} alt="react logo" loading="lazy" />
        </div>
        <div className="flex-initial IconCard">
          <img src={nodeLogo} alt="node logo" loading="lazy" />
        </div>
        <div className="flex-initial IconCard">
          <img src={typescriptLogo} alt="typescript logo" loading="lazy" />
        </div>
      </div>

      <div className="flex lg:flex-row justify-around">
        <div className="flex-initial IconCard">
          <img src={gitLogo} alt="git logo" loading="lazy" />
        </div>
        <div className="flex-initial IconCard">
          <img src={awsLogo} alt="aws logo" loading="lazy" />
        </div>
        <div className="flex-initial IconCard">
          <img src={postgresqlLogo} alt="postgresql logo" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
