import React from "react";

import "./renorun.scss";
import { Route } from "react-router-dom";
import RenoRun from "../renorun";
import TopNav from "../top-nav";
import Footer from "../footer";

function App() {
  return (
    <div className="wrapper">
      <TopNav />
      <Route exact path="/renorun">
        <RenoRun />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
