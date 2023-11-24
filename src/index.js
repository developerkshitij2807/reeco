import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { Main } from "src/pages/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Routes = [
  {
    path: "/",
    element: <Main />,
  },
];

const router = createBrowserRouter(Routes);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
