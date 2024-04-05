import React from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

/**
 * Generates a scroll to top button and functionality when clicked.
 *
 * @param {React.MouseEvent<HTMLButtonElement>} event - The click event triggering the scroll to top
 * @return {void}
 */
const ScrollToTop: React.FC<{}> = () => {
  const scrollToTop = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className="Scroll" onClick={scrollToTop}>
      <ArrowUpCircleIcon className="h-10" />
    </button>
  );
};

export default ScrollToTop;
