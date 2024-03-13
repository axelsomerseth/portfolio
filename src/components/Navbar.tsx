import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

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
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-link">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
      <button className="burger-menu" id="burger-menu">
        {/* Hamburguer menu */}
      </button>
    </nav>
  );
};

export default Navbar;
