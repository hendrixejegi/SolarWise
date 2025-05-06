import { Outlet, useLocation } from "react-router-dom";

import Header from "@components/header";
import Footer from "./components/footer";

function App() {
  const pathName = useLocation().pathname;

  console.log(pathName);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
