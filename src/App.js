import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// TODO:
// Render nomatch page.

import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Swapi from "./component/widgets/Swapi";
import Weather from "./component/widgets/Weather";
import Dictionary from "./component/widgets/Dictionary";
import Jokes from "./component/widgets/Jokes";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PrivateRoute from "./pages/auth/PrivateRoute";
import NoMatch from "./component/NoMatch";
import Dropzone from "./component/widgets/Dropzone";
import "./styles/App.scss";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <PrivateRoute path="/" component={Navbar} />

          <Switch>
            <PrivateRoute path="/home" component={Home} />

            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />

            <PrivateRoute path="/about" component={About} />
            <PrivateRoute path="/swapi" component={Swapi} />
            <PrivateRoute path="/weather" component={Weather} />
            <PrivateRoute path="/dictionary" component={Dictionary} />
            <PrivateRoute path="/jokes" component={Jokes} />
            <PrivateRoute path="/dropzone" component={Dropzone} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
