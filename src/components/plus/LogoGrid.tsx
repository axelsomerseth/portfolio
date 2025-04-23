import React from "react";
import AgileLogo from "../../assets/images/companies/agile_solutions_logo.jpeg";
import DeunaLogo from "../../assets/images/companies/deuna_logo.png";
import VarsityDevLogo from "../../assets/images/companies/varsity_dev_logo.png";
import ContolloLogo from "../../assets/images/companies/contollo_consulting_logo.jpeg";

interface Logo {
  name: string;
  source: string;
  link: string;
}

const logos: Logo[] = [
  {
    name: "Agile Solutions",
    source: AgileLogo,
    link: "https://agilesolutions.com/en/",
  },
  {
    name: "DEUNA",
    source: DeunaLogo,
    link: "https://www.deuna.com/",
  },
  {
    name: "Varsity Dev",
    source: VarsityDevLogo,
    link: "https://varsity.dev/",
  },
  {
    name: "Contollo Consulting",
    source: ContolloLogo,
    link: "https://www.contollo.net/",
  },
];

const LogoGrid: React.FC = () => {
  return (
    <div className="theme py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold">
          Companies that I worked for
        </h2>
        <div
          className={`mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4`}
        >
          {logos.map((l) => {
            return (
              <a
                href={l.link}
                className="flex justify-center items-center col-span-2 lg:col-span-1"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt={l.name}
                  src={l.source}
                  width={140}
                  height={70}
                  className="max-h-12 object-contain"
                />
              </a>
            );
          })}
          {/* <img
            alt="Deuna"
            src={DeunaLogo}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          /> */}
          {/* <img
            alt="Varsity Dev"
            src={VarsityDevLogo}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          /> */}
          {/* <img
            alt="Contollo"
            src={ContolloLogo}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          /> */}
          {/* <img
            alt="Statamic"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default LogoGrid;
