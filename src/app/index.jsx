import React, { useEffect } from "react";

import "./index.scss";
import { Route, useLocation } from "react-router-dom";
import Home from "../home";
import RenoRun from "../renorun";
import TopNav from "../top-nav";
import Footer from "../footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    switch (location.pathname) {
      case "/renorun":
        document.title = "Tomas Manrique - RenoRun";
        break;
      default:
        document.title = "Tomas Manrique - Work";
        break;
    }
  }, [location]);

  return (
    <div className="wrapper">
      <TopNav />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/renorun">
        <RenoRun />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
