import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import Home from "./pages/home";
import AboutUs from "@pages/about-us";
import Marketplace from "./pages/marketplace";

// Axios Config Defaults
axios.defaults.baseURL = "http://localhost:3001/";

async function getVendorData() {
  let data = null;
  await axios
    .get("/vendors")
    .then((response) => (data = response.data))
    .catch((error) => console.log(error));
  return data;
}

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: "marketplace",
        loader: async () => ({ vendors: await getVendorData() }),
        Component: Marketplace,
      },
      { path: "about-us", Component: AboutUs },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
