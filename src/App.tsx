import React from "react";

import Header from "./components/plus/Header";
import ScrollToTop from "./components/ScrollToTop";
import { Outlet } from "react-router";

const App: React.FC<{}> = () => {
  return (
    <>
      <Header />

      <Outlet />

      <ScrollToTop />
    </>
  );
};

export default App;
