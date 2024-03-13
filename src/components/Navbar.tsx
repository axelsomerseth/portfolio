import React from "react";
import { Trans } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <nav className="flex flex-col lg:flex-row items-center Navbar">
      <h1 className="flex-initial text-3xl font-bold underline lg:pl-5">
        Axel Cordova
      </h1>
      <div className="flex-initial w-full lg:w-6/12">
        <div className="flex flex-col lg:flex-row lg:justify-around items-center">
          <div className="flex-initial w-full lg:w-8/12 pt-3 lg:pt-0">
            <ul className="flex flex-row lg:flex-row justify-around items-center">
              <li>
                <a href="#about" className="NavLink">
                  <Trans i18nKey={"navbar.about"} />
                </a>
              </li>
              <li>
                <a href="#skills" className="NavLink">
                  <Trans i18nKey={"navbar.skills"} />
                </a>
              </li>
              <li>
                <a href="#projects" className="NavLink">
                  <Trans i18nKey={"navbar.projects"} />
                </a>
              </li>
              <li>
                <a href="#contact" className="NavLink">
                  <Trans i18nKey={"navbar.contact"} />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-initial w-full lg:w-4/12 pt-3 lg:pt-0">
            <div className="flex flex-row lg:flex-row justify-evenly items-center">
              <div className="flex-initial">
                <LanguageSwitcher />
              </div>
              <div className="flex-initial">
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
