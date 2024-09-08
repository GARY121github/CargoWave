import "./assets/css/bootstrap.min.css";
import "./assets/css/all.min.css";
import "./assets/css/style.css";
import "./assets/css/animate.min.css";
import "./assets/css/custom-animate.css";
import "./assets/css/responsive.css";
import "./assets/css/icomoon.css";
import "./assets/css/color-1.css";
import "./assets/css/color-2.css";
import "./assets/css/color-3.css";
import "./assets/css/react-adjustment.css";
import "./assets/css/module-css/about.css";
import "./assets/css/module-css/footer.css";
// import "./assets/css/module-css/header.css";
// import Loading from "./components/Section/Common/Loading/Loading";
import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/index";
const divStyle = {
  overflow: 'hidden',
}

const App = () => {
  return (
    <div style={divStyle}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App