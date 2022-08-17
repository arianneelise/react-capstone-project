import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faGear} size="2x" />
          <h2>Widgets for Days</h2>
        </div>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </header>
  );
}
