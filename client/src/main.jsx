import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@pages/Home.jsx";
import AboutUs from "@pages/about-us";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "about-us", Component: AboutUs },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
