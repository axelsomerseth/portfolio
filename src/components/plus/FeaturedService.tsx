import React from "react";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  CircleStackIcon,
  CloudIcon,
} from "@heroicons/react/20/solid";
import KeyboardImage from "../../assets/images/keychron_k2.png";
import { useTranslation, Trans } from "react-i18next";

const features = [
  {
    name: "Front-end Development",
    description:
      "Experienced in design and implementation of beautiful and interactive components with React and TailwindCSS and -you guessed- other tools.",
    icon: CodeBracketIcon,
  },
  {
    name: "Mobile Development",
    description:
      "Capable of building mobile Apps with React Native and Expo Framework.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Back-end Development",
    description:
      "Skilled in back-end development with Golang, but highly experienced in Node.js + web frameworks like Express.js, Nest.js, Remix and Fastify.",
    icon: ServerIcon,
  },
  {
    name: "Databases",
    description:
      "Competent in SQL Databases like Postgres and NoSQL Databases like MongoDB and Firestore.",
    icon: CircleStackIcon,
  },
  {
    name: "Cloud Computing",
    description:
      "Trained in configuring cloud services in platforms like Amazon Web Services or Google Cloud Platform. I also configured CI/CD Pipelines by the way.",
    icon: CloudIcon,
  },
];

const FeaturedSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden theme py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-primary">
                <Trans i18nKey={"featuredService.subHeading"} t={t} />
              </h2>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight theme sm:text-5xl">
                <Trans i18nKey={"featuredService.mainHeading"} t={t} />
              </h1>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
                Hi there! I'm a Full Stack Software Engineer. My main tech stack
                is React.js + Node.js + TypeScript. I have +7 years of
                experience. I love solving problems and satisfying needs through
                software development. Latests technologies will be always
                important to our civilization.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-gray-300">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 size-5 text-primary"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={KeyboardImage}
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
