// This private route is just a WRAPPER around the current route being used.

import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth();

  return (
    <div>
      {/* Passing props like you would normally have in a route */}
      <Route
        {...rest}
        render={(props) => {
          return user ? <Component {...props} /> : <Redirect to="/login" />;
        }}
      >
        {/* {user ? children : <Redirect to="/login" />} */}
      </Route>
    </div>
  );
}
