import React from "react";

const stats = [
  { id: 1, name: "Years of experience", value: "7" },
  { id: 2, name: "Projects I have worked on previous jobs", value: "16" },
  // { id: 3, name: "Junior Developers mentored", value: "7" },
];

const Stats: React.FC = () => {
  return (
    <div className="theme py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl
          className={`grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-${stats.length}`}
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base/7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Stats;
