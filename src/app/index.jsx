import "./index.scss";
import { Route } from "react-router-dom";
import Home from "../home";
import TopNav from "../top-nav";
import Footer from "../footer";

function App() {
  return (
    <div className="wrapper">
      <TopNav /><Route exact path="/"><Home /></Route>
      <Footer />
    </div>
  );
}

export default App;
