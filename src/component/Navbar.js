import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";

export default function Header() {
  const { user, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout(auth);
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <header>
      <div className="header-wrapper">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faGear} size="2x" />
          <h2>Widgets for Days</h2>
        </div>

        <div className="links">
          {user && (
            <p>
              <FontAwesomeIcon icon={faCheck} className="check-icon" /> Logged
              in as {user.email}
            </p>
          )}
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </header>
  );
}
