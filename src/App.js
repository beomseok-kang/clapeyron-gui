import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./Pages/Main";
import PropertiesPrediction from "./Pages/PropertiesPrediction";

import './Assets/Css/reset.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/pp" component={PropertiesPrediction}/>
      </Switch>
    </Router>
  );
}

export default App;
