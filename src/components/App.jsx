import { Route } from "react-router-dom";

import MainContainer from "./routing/MainContainer";
import Navbar from "./navigation/Navbar";
import Footer from "./navigation/Footer";

function App() {
  return (
    <div className="app-container">
      <Route component={Navbar} />
      <Route component={MainContainer} />
      <Route component={Footer} />
    </div>
  );
}

export default App;
