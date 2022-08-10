import { Link } from "react-router-dom";

export default function Widget(props) {
  return (
    <div className="widget-wrapper">
      <Link className="widget-title" to={`/${props.name.toLowerCase()}`}>
        {props.name}
      </Link>
      <img className="widget-image" src={props.img} alt={props.name} />
    </div>
  );
}
