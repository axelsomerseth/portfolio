import React from "react";
import { Trans } from "react-i18next";

const Projects: React.FC<{}> = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-header">
        <Trans i18nKey={"projects.header"} />
      </h2>
      <div className="projects-container">
        <div className="project-container project-card">
          <img
            src="assets/images/expenseTracker.png"
            alt="expense-tracker"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">
            <Trans i18nKey={"projects.project1.title"} />
          </h3>
          <p className="project-details">
            <Trans i18nKey={"projects.project1.details"} />
          </p>
          <a
            href={"https://resolutions-99ef3.web.app/"}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <Trans i18nKey={"projects.link"} />
          </a>
        </div>
        <div className="project-container project-card">
          <img
            src="assets/images/netflixClone.png"
            alt="netflic-clone"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">
            <Trans i18nKey={"projects.project2.title"} />
          </h3>
          <p className="project-details">
            <Trans i18nKey={"projects.project2.details"} />
          </p>
          <a
            href={"https://resolutions-99ef3.web.app/"}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <Trans i18nKey={"projects.link"} />
          </a>
        </div>
        <div className="project-container project-card">
          <img
            src="assets/images/greenyEarth.png"
            alt="greeny-earth"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">
            <Trans i18nKey={"projects.project3.title"} />
          </h3>
          <p className="project-details">
            <Trans i18nKey={"projects.project3.details"} />
          </p>
          <a
            href={"https://resolutions-99ef3.web.app/"}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <Trans i18nKey={"projects.link"} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
