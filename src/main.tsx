import React from "react";
import ReactDOM from "react-dom/client";
import IndexRouter from "./router";
import DefaultLayout from "./layout/default";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DefaultLayout>
      <IndexRouter />
    </DefaultLayout>
  </React.StrictMode>,
);
