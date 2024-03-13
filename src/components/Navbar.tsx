import React from "react";
import { Trans } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <nav className="flex flex-row Navbar">
      <h1 className="flex-initial text-3xl font-bold underline pl-5">
        Axel Cordova
      </h1>
      <div className="flex-initial w-6/12">
        <div className="flex flex-row justify-around items-center">
          <div className="flex-initial w-7/12">
            <ul className="flex flex-row justify-around">
              <li className="">
                <a href="#about" className="nav-link">
                  <Trans i18nKey={"navbar.about"} />
                </a>
              </li>
              <li className="">
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
          </div>
          <div className="flex-initial w-5/12">
            <div className="flex justify-evenly items-center">
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
