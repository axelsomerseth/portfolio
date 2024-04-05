import React from "react";
import { Trans } from "react-i18next";
import recontentScreenshot from "./../assets/screenshots/recontent.png";
import badgrExtrasScreenshot from "./../assets/screenshots/badgr-extras.png";
import resolutionsScreenshot from "./../assets/screenshots/resolutions.png";
import { LinkIcon } from "@heroicons/react/24/solid";

const Projects: React.FC<{}> = () => {
  return (
    <section className="Projects">
      <h2 className="section-header">
        <Trans i18nKey={"projects.header"} />
      </h2>

      <div className="flex flex-col lg:flex-row">
        {/* TODO: extract ProjectCard into a separate component */}
        <div className="flex-initial ProjectCard">
          <img
            src={recontentScreenshot}
            alt="recontent screenshot"
            loading="lazy"
            className="project-img"
          />
          <h3 className="project-title">
            <Trans i18nKey={"projects.project1.title"} />
          </h3>
          <p className="project-details">
            <Trans i18nKey={"projects.project1.details"} />
          </p>
          <a
            href={"https://app.recontent.io/"}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <LinkIcon className="h-5" />
            &nbsp;
            <Trans i18nKey={"projects.link"} />
          </a>
        </div>

        <div className="flex-initial ProjectCard">
          <img
            src={badgrExtrasScreenshot}
            alt="badgr extras screenshot"
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
            href={
              "https://chromewebstore.google.com/detail/badgr-extras/bmblmoohmflnobgccibkbdfgfgllgdfa"
            }
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <LinkIcon className="h-5" />
            &nbsp;
            <Trans i18nKey={"projects.link"} />
          </a>
        </div>

        <div className="flex-initial ProjectCard">
          <img
            src={resolutionsScreenshot}
            alt="resolution screenshot"
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
            <LinkIcon className="h-5" />
            &nbsp;
            <Trans i18nKey={"projects.link"} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
