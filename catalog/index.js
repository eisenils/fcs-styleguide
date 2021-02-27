import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import {theme} from "./theme"

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./WELCOME.md"))
  },{
    title: "Grüner Baum Schweinberg",
    pages: [
      {
        path: "gbs/colors",
        title: "Farben",
        content: pageLoader(() => import("./pages/gbs/Colors.md")),
      },
    ],
  },
];

ReactDOM.render(
  <Catalog
    title="NE Design - Styleguide"
    pages={pages}
    theme={theme}
  />,
  document.getElementById("catalog")
);
