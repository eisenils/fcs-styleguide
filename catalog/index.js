import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";
import { Catalog, pageLoader } from "catalog";
import {theme} from "./theme"
import Logo from "./static/ne-dsgn_logo.svg"
import Styles from "./styles.css"

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./pages/WELCOME.md"))
  },{
    title: "Grüner Baum Schweinberg",
    pages: [
      {
        path: "gbs/logo",
        title: "Logo",
        content: pageLoader(() => import("./pages/gbs/Logo.md")),
      },
      {
        path: "gbs/colors",
        title: "Farben",
        content: pageLoader(() => import("./pages/gbs/Colors.md")),
      },
      {
        path: "gbs/typography",
        title: "Typografie",
        content: pageLoader(() => import("./pages/gbs/Typography.md")),
      },
    ],
  },{
    title: "GetYourSound",
    pages: [
      {
        path: "gys/logo",
        title: "Logo",
        content: pageLoader(() => import("./pages/gys/Logo.md")),
      },
      {
        path: "gys/colors",
        title: "Farben",
        content: pageLoader(() => import("./pages/gys/Colors.md")),
      },
      {
        path: "gys/typography",
        title: "Typografie",
        content: pageLoader(() => import("./pages/gys/Typography.md")),
      },
    ],
  },
];

ReactDOM.render(
  <Catalog
    title="NE Design - Styleguide"
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