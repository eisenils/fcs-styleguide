import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";
import { Catalog, pageLoader } from "catalog";
import { theme } from "./theme";
import Logo from "./static/fc-schweinberg-logo.svg";
import Styles from "./styles.css";

const pages = [
  {
    path: "/",
    title: "Start",
    content: pageLoader(() => import("./pages/Start.md")),
  },
  {
    path: "/logo",
    title: "Logo",
    content: pageLoader(() => import("./pages/Logo.md")),
  },
  {
    path: "/farben",
    title: "Farben",
    content: pageLoader(() => import("./pages/Colors.md")),
  },
  {
    path: "/typografie",
    title: "Typografie",
    content: pageLoader(() => import("./pages/Typography.md")),
  },
];

ReactDOM.render(
  <Catalog
    title="FC Schweinberg Styleguide"
    logoSrc={Logo}
    pages={pages}
    theme={theme}
    styles={Styles}
  />,
  document.getElementById("catalog")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
