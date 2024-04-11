import React from "react";
import { Trans, useTranslation } from "react-i18next";
import recontentScreenshot from "./../assets/screenshots/recontent.png";
import badgrExtrasScreenshot from "./../assets/screenshots/badgr-extras.png";
import resolutionsScreenshot from "./../assets/screenshots/resolutions.png";
import ProjectCard from "./ProjectCard";

const Projects: React.FC<{}> = () => {
  const { t } = useTranslation();

  const PROJECTS = [
    {
      title: t("projects.project1.title"),
      details: t("projects.project1.details"),
      screenshot: recontentScreenshot,
      link: "https://app.recontent.io/",
    },
    {
      title: t("projects.project2.title"),
      details: t("projects.project2.details"),
      screenshot: badgrExtrasScreenshot,
      link: "https://badgr-extras.netlify.app/",
    },
    {
      title: t("projects.project3.title"),
      details: t("projects.project3.details"),
      screenshot: resolutionsScreenshot,
      link: "https://resolutions-app.netlify.app/",
    },
  ];

  return (
    <section className="Projects">
      <h2 className="section-header">
        <Trans i18nKey={"projects.header"} />
      </h2>

      <div className="flex flex-col lg:flex-row">
        {PROJECTS.map((project) => (
          <ProjectCard
            className="flex-initial"
            key={project.title}
            title={project.title}
            details={project.details}
            screenshot={project.screenshot}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
