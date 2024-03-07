import { Route, Switch } from "react-router-dom";

import Position from "../pages/Position";
import Nesting from "../pages/Nesting";
import Hover from "../pages/Hover";
import Home from "../pages/Home";

const MainContainer = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/nesting" component={Nesting} />
      <Route path="/position" component={Position} />
      <Route path="/hover" component={Hover} />
    </Switch>
  );
};

export default MainContainer;
