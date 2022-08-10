import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// TODO:
// Render nomatch page.

import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import About from "./pages/About";
import Swapi from "./component/widgets/Swapi";
import Weather from "./component/widgets/Weather";
// import NoMatch from "./component/NoMatch";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Navbar} />
        <Route path="/home" component={Home} />

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/logout" component={Logout} />
          <Route path="/swapi" component={Swapi} />
          <Route path="/weather" component={Weather} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
