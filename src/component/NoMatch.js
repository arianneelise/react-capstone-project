// import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";

export default function Widget(props) {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faBan} />
      </div>
      <div>
        Oops! Looks like the page "{props.location.pathname.slice(1)}" doesn't
        exist.
      </div>
      {/* <div>
        Return to <Link to="/home">Homepage</Link>
      </div> */}
    </div>
  );
}
