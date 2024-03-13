import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Trans } from "react-i18next";

const Navbar: React.FC<{}> = () => {
  return (
    <nav>
      <h1 className="text-3xl font-bold underline">
        <UserCircleIcon className="h-6 w-6 text-blue-500" />
        Axel Cordova
      </h1>
      <ul className="navigation">
        <li>
          <a href="#about" className="nav-link">
            <Trans i18nKey={"navbar.about"} />
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-link">
            <Trans i18nKey={"navbar.skills"} />
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">
            <Trans i18nKey={"navbar.projects"} />
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            <Trans i18nKey={"navbar.contact"} />
          </a>
        </li>
      </ul>
      <button className="burger-menu" id="burger-menu">
        {/* Hamburger menu */}
      </button>
    </nav>
  );
};

export default Navbar;
