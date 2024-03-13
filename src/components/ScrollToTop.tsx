import React from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

const ScrollToTop: React.FC<{}> = () => {
  return (
    <button className="Scroll">
      <ArrowUpCircleIcon className="h-10" />
    </button>
  );
};

export default ScrollToTop;
