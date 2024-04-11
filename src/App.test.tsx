import React from "react";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.tests";
import App from "./App";

test("renders owners name", () => {
  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
  const h1Element = screen.getByText(/Axel Cordova/i, { selector: "h1" });
  expect(h1Element).toBeInTheDocument();
});
