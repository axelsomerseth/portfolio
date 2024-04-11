import React from "react";
import { Trans } from "react-i18next";
import reactLogo from "./../assets/icons/react-logo.png";
import nodeLogo from "./../assets/icons/node-logo.png";
import typescriptLogo from "./../assets/icons/typescript-logo.png";
import awsLogo from "./../assets/icons/aws-logo.png";
import gitLogo from "./../assets/icons/git-logo.png";
import postgresqlLogo from "./../assets/icons/postgresql-logo.png";
import IconCard from "./IconCard";

const Skills: React.FC<{}> = () => {
  return (
    <section className="Skills" id="skills">
      <h2 className="section-header">
        <Trans i18nKey={"skills.header"} />
      </h2>

      <div className="flex lg:flex-row justify-around">
        <IconCard className="flex-initial">
          <img src={reactLogo} alt="react logo" loading="lazy" />
        </IconCard>
        <IconCard className="flex-initial">
          <img src={nodeLogo} alt="node logo" loading="lazy" />
        </IconCard>
        <IconCard className="flex-initial">
          <img src={typescriptLogo} alt="typescript logo" loading="lazy" />
        </IconCard>
      </div>

      <div className="flex lg:flex-row justify-around">
        <IconCard className="flex-initial">
          <img src={gitLogo} alt="git logo" loading="lazy" />
        </IconCard>
        <IconCard className="flex-initial">
          <img src={awsLogo} alt="aws logo" loading="lazy" />
        </IconCard>
        <IconCard className="flex-initial">
          <img src={postgresqlLogo} alt="postgresql logo" loading="lazy" />
        </IconCard>
      </div>
    </section>
  );
};

export default Skills;
