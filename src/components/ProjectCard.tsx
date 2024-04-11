import { LinkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Trans } from "react-i18next";

interface ProjectCardProps {
  className: string;
  title: string;
  details: string;
  screenshot: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  className,
  title,
  details,
  screenshot,
  link,
}) => {
  return (
    <div className={className + " ProjectCard"}>
      <img
        src={screenshot}
        alt="recontent screenshot"
        loading="lazy"
        className="project-img"
      />
      <h3 className="project-title">{title}</h3>
      <p className="project-details">{details}</p>
      <a href={link} target="_blank" rel="noreferrer" className="project-link">
        <LinkIcon className="h-5" />
        &nbsp;
        <Trans i18nKey={"projects.link"} />
      </a>
    </div>
  );
};

export default ProjectCard;
