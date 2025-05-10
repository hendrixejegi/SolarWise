import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loadVendorData, loadSolarFacts } from "./lib/loaders";

import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Marketplace from "./pages/marketplace";
import SolarFact from "./pages/solar-fact";
import Assessment from "./pages/assessment";
import RegisterPage from "./pages/register";
import SolarHubPage from "./pages/solar-hub-page";
import NotFoundPage from "./pages/not-found";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        index: true,
        loader: async () => ({ facts: await loadSolarFacts() }),
        Component: Home,
      },
      {
        path: "solar-facts/:factId",
        loader: async () => ({ facts: await loadSolarFacts() }),
        Component: SolarFact,
      },
      {
        path: "assessment",
        Component: Assessment,
      },
      {
        path: "marketplace",
        loader: async () => ({ vendors: await loadVendorData() }),
        Component: Marketplace,
      },
      { path: "about-us", Component: AboutUs },
      { path: "register", Component: RegisterPage },
      { path: "solar-hub", Component: SolarHubPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
