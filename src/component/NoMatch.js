// import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faBan } from "@fortawesome/free-solid-svg-icons";

export default function Widget(props) {
  return (
    <div className="no-match">
      <div>
        <FontAwesomeIcon icon={faBan} size="6x" />
      </div>
      <div className="text">
        Oops! Looks like the page "{props.location.pathname.slice(1)}" doesn't
        exist.
      </div>
      <div>
        Return to <Link to="/home">Homepage</Link>
      </div>
    </div>
  );
}
